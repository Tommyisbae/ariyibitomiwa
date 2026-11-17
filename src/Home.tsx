import { useEffect, useLayoutEffect, useRef, useState, type MouseEvent } from "react";
import { LINKS, PROJECTS, REEL, SERVICES, TESTIMONIALS } from "./data";
import {
  gsap,
  ScrollTrigger,
  prefersReducedMotion,
  scrollToId,
  useSmoothScroll,
  useNavTheme,
} from "./motion";

const INTRO =
  "We make websites that feel expensive. Clean, quiet and impossible to ignore. Ariyibi Studio partners with SaaS and B2B companies whose product has outpaced their brand, and closes the gap, from identity to a Webflow or Framer build their team can actually run.";

function useLagosClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Africa/Lagos",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);
  return time;
}

function Chars({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span className={className} aria-label={text}>
      {text.split("").map((c, i) => (
        <span key={i} className="char" aria-hidden="true">
          {c === " " ? " " : c}
        </span>
      ))}
    </span>
  );
}

function Nav() {
  const go = (id: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToId(id);
  };
  return (
    <header id="site-nav" className="fixed inset-x-0 top-0 z-50 text-oxblood bg-paper/85 backdrop-blur-sm transition-colors duration-300 [&.is-dark]:text-paper [&.is-dark]:bg-transparent [&.is-dark]:backdrop-blur-none">
      <nav className="grid-12 px-5 py-4 text-[13px]">
        <a
          href="/"
          className="col-span-6 md:col-span-4 font-display font-bold tracking-[-0.02em] text-[15px] leading-none pt-[1px]"
        >
          Ariyibi Studio
        </a>
        <div className="col-span-6 md:col-span-8 flex justify-end gap-6 md:grid md:grid-cols-4 md:gap-5">
          <a href="#work" onClick={go("work")} className="hover:opacity-60 transition-opacity">
            Work
          </a>
          <a href="#services" onClick={go("services")} className="hover:opacity-60 transition-opacity">
            Services
          </a>
          <a href="#words" onClick={go("words")} className="hidden md:block hover:opacity-60 transition-opacity">
            Clients
          </a>
          <a href="#contact" onClick={go("contact")} className="md:text-right hover:opacity-60 transition-opacity">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const time = useLagosClock();

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      const chars = gsap.utils.toArray<HTMLElement>(".hero-word .char");
      gsap.from(chars, {
        yPercent: 110,
        duration: 1.2,
        ease: "expo.out",
        stagger: 0.06,
        delay: 0.15,
      });
      gsap.from(".hero-meta > *", {
        opacity: 0,
        duration: 0.9,
        stagger: 0.08,
        delay: 0.7,
        ease: "power2.out",
      });
      chars.forEach((c, i) => {
        gsap.to(c, {
          yPercent: -18 - (i % 3) * 22,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });
      gsap.to(".hero-studio", {
        xPercent: -35,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative h-[78svh] md:h-[100svh] flex flex-col justify-end px-5 pb-5 overflow-hidden">
      <div className="hero-meta grid-12 text-[13px] leading-snug mb-6 md:mb-10">
        <p className="col-span-6 md:col-span-3">Brand and web design studio</p>
        <p className="col-span-6 md:col-span-3">For SaaS and B2B teams</p>
        <p className="col-span-6 md:col-span-3 mt-2 md:mt-0">Lagos, working worldwide</p>
        <p className="col-span-6 md:col-span-3 mt-2 md:mt-0 md:text-right tabular-nums">
          {time} WAT
        </p>
      </div>
      <h1 className="text-oxblood">
        <span className="hero-studio block whitespace-nowrap text-right text-[11vw] md:text-[8.5vw] leading-[0.8] mb-[1vw]">
          Studio
        </span>
        <span className="hero-word block overflow-hidden whitespace-nowrap text-[28.6vw] md:text-[31.2vw] leading-[0.78] pb-[2.4vw] -ml-[0.8vw]">
          <Chars text="Ariyibi" />
        </span>
      </h1>
    </section>
  );
}

function Reel() {
  const ref = useRef<HTMLElement>(null);
  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".reel-frame",
        { clipPath: "inset(22% 30% 22% 30% round 18px)" },
        {
          clipPath: "inset(0% 0% 0% 0% round 0px)",
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        },
      );
      gsap.fromTo(
        ".reel-frame video",
        { scale: 1.25 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        },
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} data-dark className="relative h-[220vh]" aria-label="Showreel">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <div className="reel-frame absolute inset-0 overflow-hidden bg-deep">
          <video
            src={REEL}
            poster="/trackside-cover.webp"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function Intro() {
  const ref = useRef<HTMLElement>(null);
  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".intro-word",
        { opacity: 0.14 },
        {
          opacity: 1,
          stagger: 0.05,
          ease: "none",
          scrollTrigger: {
            trigger: ".intro-text",
            start: "top 80%",
            end: "bottom 45%",
            scrub: true,
          },
        },
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="px-5 py-28 md:py-36">
      <div className="grid-12">
        <p className="col-span-12 md:col-span-4 text-[13px] mb-6 md:mb-0">Intro</p>
        <div className="col-span-12 md:col-span-8">
          <p className="intro-text font-display font-bold tracking-[-0.025em] text-[26px] md:text-[34px] leading-[1.12] max-w-[30ch] md:max-w-[34ch]">
            {INTRO.split(" ").map((w, i) => (
              <span key={i} className="intro-word">
                {w}{" "}
              </span>
            ))}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="pill"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("contact");
              }}
            >
              Start a project
            </a>
            <p className="text-[13px] text-mute ml-1">
              Led by Ariyibi Tomiwa, Webflow Certified Partner
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Work() {
  const ref = useRef<HTMLElement>(null);
  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>(".work-panel");
      panels.forEach((panel, i) => {
        const inner = panel.querySelector<HTMLElement>(".work-inner");
        const img = panel.querySelector<HTMLElement>(".work-img");
        const title = panel.querySelectorAll<HTMLElement>(".work-title .char");
        if (img) {
          gsap.fromTo(
            img,
            { yPercent: -7 },
            {
              yPercent: 7,
              ease: "none",
              scrollTrigger: {
                trigger: panel,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        }
        if (title.length) {
          gsap.from(title, {
            yPercent: 100,
            stagger: 0.025,
            duration: 0.9,
            ease: "expo.out",
            scrollTrigger: { trigger: panel, start: "top 55%" },
          });
        }
        const next = panels[i + 1];
        if (next && inner) {
          gsap.to(inner, {
            scale: 0.9,
            filter: "brightness(0.35)",
            borderRadius: 18,
            ease: "none",
            scrollTrigger: {
              trigger: next,
              start: "top bottom",
              end: "top top",
              scrub: true,
            },
          });
        }
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={ref} className="bg-black">
      <div className="bg-paper px-5 pt-10 pb-6 grid-12 text-[13px]">
        <p className="col-span-6 md:col-span-4">Selected work</p>
        <p className="col-span-6 md:col-span-8 text-right md:text-left">
          {PROJECTS.length} projects, 4 with full case studies
        </p>
      </div>
      {PROJECTS.map((p, i) => {
        const internal = Boolean(p.caseStudy);
        return (
          <article key={p.title} data-dark className="work-panel sticky top-0 h-[100svh] overflow-hidden">
            <a
              href={internal ? `/work/${p.caseStudy}` : p.liveUrl}
              {...(internal ? {} : { target: "_blank", rel: "noreferrer" })}
              className="work-inner group absolute inset-0 block overflow-hidden bg-deep text-paper origin-center will-change-transform"
            >
              <img
                src={p.cover}
                alt=""
                loading={i < 2 ? "eager" : "lazy"}
                className="work-img absolute left-0 top-[-8%] w-full h-[116%] object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/30" />
              <div className="absolute inset-x-0 bottom-0 px-5 pb-6 md:pb-8">
                <h2 className="work-title overflow-hidden text-[16vw] md:text-[10vw] leading-[0.82] pb-[0.8vw] mb-5">
                  <Chars text={p.title} />
                </h2>
                <div className="grid-12 text-[13px] leading-snug">
                  <p className="col-span-2 md:col-span-4 tabular-nums opacity-70">
                    {i + 1}/{PROJECTS.length}
                  </p>
                  <p className="col-span-10 md:col-span-4 max-w-[42ch]">{p.description}</p>
                  <p className="hidden md:block md:col-span-2 opacity-70">{p.tags.join(", ")}</p>
                  <p className="col-span-12 md:col-span-2 mt-3 md:mt-0 md:text-right underline underline-offset-4 decoration-1">
                    {internal ? "Read the case study" : "Visit the site"}
                  </p>
                </div>
              </div>
            </a>
          </article>
        );
      })}
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="relative z-10 bg-paper px-5 py-28 md:py-40">
      <div className="grid-12">
        <p className="col-span-12 md:col-span-4 text-[13px] mb-6 md:mb-0">What we do</p>
        <ul className="col-span-12 md:col-span-8 border-t border-oxblood/25">
          {SERVICES.map((s) => (
            <li key={s.name} className="grid grid-cols-8 gap-x-5 py-6 border-b border-oxblood/25">
              <h3 className="col-span-8 md:col-span-4 text-[24px] md:text-[30px] leading-none tracking-[-0.03em] mb-2 md:mb-0">
                {s.name}
              </h3>
              <p className="col-span-8 md:col-span-4 text-[15px] max-w-[38ch] md:pt-1">{s.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    if (prefersReducedMotion() || !track.current) return;
    const ctx = gsap.context(() => {
      const loop = gsap.to(track.current, {
        xPercent: -50,
        duration: 38,
        ease: "none",
        repeat: -1,
      });
      let boost = 1;
      ScrollTrigger.create({
        trigger: ref.current,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          boost = 1 + Math.min(Math.abs(self.getVelocity()) / 250, 6);
          gsap.to(loop, { timeScale: boost, duration: 0.2, overwrite: true });
          gsap.to(loop, { timeScale: 1, duration: 1.2, delay: 0.2, ease: "power2.out" });
          gsap.to(".quote-card", {
            skewX: gsap.utils.clamp(-6, 6, self.getVelocity() / -300),
            duration: 0.4,
            overwrite: true,
          });
          gsap.to(".quote-card", { skewX: 0, duration: 0.8, delay: 0.3, ease: "power3.out" });
        },
      });
      const el = track.current!;
      const pause = () => loop.pause();
      const play = () => loop.play();
      el.addEventListener("mouseenter", pause);
      el.addEventListener("mouseleave", play);
      el.addEventListener("focusin", pause);
      el.addEventListener("focusout", play);
    }, ref);
    return () => ctx.revert();
  }, []);

  const cards = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];
  const tones = ["bg-oxblood text-paper", "bg-taupe text-deep", "bg-[#4a2620] text-paper"];

  return (
    <section id="words" ref={ref} data-dark className="relative z-10 bg-deep text-paper py-28 md:py-40 overflow-hidden">
      <div className="grid-12 px-5 mb-14">
        <p className="col-span-12 md:col-span-4 text-[13px] mb-6 md:mb-0">Kind words</p>
        <h2 className="col-span-12 md:col-span-8 text-[34px] md:text-[56px] max-w-[14ch]">
          What clients say after launch
        </h2>
      </div>
      <div ref={track} className="flex w-max gap-5 pl-5">
        {cards.map((t, i) => (
          <figure
            key={i}
            tabIndex={0}
            className={`quote-card shrink-0 w-[300px] md:w-[400px] min-h-[260px] rounded-[20px] p-7 flex flex-col justify-between ${tones[i % 3]}`}
          >
            <blockquote className="text-[18px] md:text-[20px] leading-[1.4]">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-8 text-[13px]">
              <span className="font-display font-bold tracking-[-0.01em] text-[14px]">{t.name}</span>
              <span className="opacity-70">, {t.org}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const ref = useRef<HTMLElement>(null);
  const time = useLagosClock();
  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.from(".contact-line .char", {
        yPercent: 105,
        stagger: 0.03,
        duration: 1.1,
        ease: "expo.out",
        scrollTrigger: { trigger: ".contact-line", start: "top 85%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={ref} className="relative z-10 bg-paper px-5 pt-28 md:pt-40 pb-6 min-h-[100svh] flex flex-col">
      <div className="grid-12 mb-10">
        <p className="col-span-12 md:col-span-4 text-[13px] mb-6 md:mb-0">Contact</p>
        <div className="col-span-12 md:col-span-8">
          <p className="text-[15px] max-w-[44ch] mb-5">
            Tell us what you are building, where the current site falls short, and when you need it live.
          </p>
          <a
            href="mailto:ariyibitomiwa611@gmail.com"
            className="text-[20px] md:text-[26px] underline underline-offset-[6px] decoration-1 hover:decoration-2 break-all"
          >
            ariyibitomiwa611@gmail.com
          </a>
          <div className="mt-8 flex flex-wrap gap-2">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="pill"
                {...(l.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <h2 className="contact-line mt-auto text-oxblood text-[17vw] md:text-[15.5vw] leading-[0.8] -ml-[0.5vw]">
        <span className="block overflow-hidden pb-[1vw]">
          <Chars text="Start a" />
        </span>
        <span className="block overflow-hidden pb-[1.2vw] text-right">
          <Chars text="project" />
        </span>
      </h2>

      <footer className="grid-12 text-[13px] pt-6 mt-6 border-t border-oxblood/25 gap-y-2">
        <p className="col-span-6 md:col-span-4">&copy; 2026 Ariyibi Studio</p>
        <a
          href="https://experts.webflow.com/profile/ariyibi-tomiwa"
          target="_blank"
          rel="noreferrer"
          className="col-span-6 md:col-span-3 text-right md:text-left hover:opacity-60"
        >
          Webflow Certified Partner
        </a>
        <p className="col-span-6 md:col-span-3 tabular-nums">Lagos {time}</p>
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            scrollToId("top");
          }}
          className="col-span-6 md:col-span-2 text-right hover:opacity-60"
        >
          Back to top
        </a>
      </footer>
    </section>
  );
}

export default function Home() {
  useSmoothScroll();
  useNavTheme();
  useEffect(() => {
    document.title = "Ariyibi Studio | Brand and web design for SaaS and B2B";
  }, []);
  return (
    <div id="top">
      <Nav />
      <main>
        <Hero />
        <Reel />
        <Intro />
        <Work />
        <Services />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}
