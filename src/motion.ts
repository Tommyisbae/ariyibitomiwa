import { useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let lenis: Lenis | null = null;

export function useSmoothScroll() {
  useEffect(() => {
    if (prefersReducedMotion()) return;
    lenis = new Lenis({ lerp: 0.09 });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis?.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(tick);
      lenis?.destroy();
      lenis = null;
    };
  }, []);
}

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  if (lenis) lenis.scrollTo(el, { offset: 0, duration: 1.4 });
  else el.scrollIntoView({ behavior: "smooth" });
}

export function useNavTheme() {
  useLayoutEffect(() => {
    const nav = document.getElementById("site-nav");
    if (!nav) return;
    const triggers = gsap.utils.toArray<HTMLElement>("[data-dark]").map((el) =>
      ScrollTrigger.create({
        trigger: el,
        start: "top 30px",
        end: "bottom 30px",
        onToggle: () => {
          const active = ScrollTrigger.getAll().some(
            (st) => st.vars.id === "nav-dark" && st.isActive,
          );
          nav.classList.toggle("is-dark", active);
        },
        id: "nav-dark",
      }),
    );
    ScrollTrigger.refresh();
    return () => triggers.forEach((t) => t.kill());
  }, []);
}

export { gsap, ScrollTrigger };

