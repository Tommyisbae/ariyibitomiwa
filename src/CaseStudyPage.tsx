import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useEffect } from "react";
import { CASE_STUDIES, type CaseStudy } from "./caseStudies";

export default function CaseStudyPage({ study }: { study: CaseStudy }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${study.title} case study | Ariyibi Tomiwa`;
    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute("content", study.summary);
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", `https://www.ariyibitomiwa.com/work/${study.slug}`);
  }, [study]);

  const index = CASE_STUDIES.findIndex((item) => item.slug === study.slug);
  const next = CASE_STUDIES[(index + 1) % CASE_STUDIES.length];

  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-[1080px] px-6 pb-12 pt-8 md:px-10 md:pt-12">
        <nav aria-label="Case study navigation" className="mb-16 flex items-center justify-between gap-4 text-sm md:mb-24">
          <a href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-black">
            <ArrowLeft className="size-4" aria-hidden="true" /> All work
          </a>
          <a href="mailto:tomiwa@ariyibitomiwa.com" className="rounded-lg border border-gray-200 px-4 py-2 hover:bg-gray-50">Let’s talk</a>
        </nav>

        <header className="mb-10 max-w-[780px] md:mb-14">
          <h1 className="text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.08] tracking-[-0.045em]">{study.title}</h1>
          <p className="mt-6 max-w-[62ch] text-[18px] leading-relaxed text-gray-600">{study.summary}</p>
          <a href={study.liveUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#F2F2F1] px-4 py-2.5 text-sm font-medium transition-colors hover:bg-[#E5E5E4]">Visit live site <ArrowUpRight className="size-4" aria-hidden="true" /></a>
        </header>

        <figure className="mb-12 overflow-hidden rounded-2xl bg-gray-100 md:rounded-3xl">
          <img src={study.hero} alt={`${study.title} project overview`} fetchPriority="high" className="block h-auto w-full" />
        </figure>

        <dl className="mb-16 grid grid-cols-2 gap-6 border-b border-gray-200 pb-10 md:grid-cols-4">
          {study.meta.map((item) => (
            <div key={item.label}>
              <dt className="mb-2 text-[13px] text-gray-500">{item.label}</dt>
              <dd className="text-[15px] leading-relaxed">{item.value}</dd>
            </div>
          ))}
        </dl>

        <div className="space-y-12 md:space-y-16">
          {study.sections.map((section, sectionIndex) => (
            <div key={section.heading}>
              <section className="grid gap-4 md:grid-cols-[1fr_2fr] md:gap-12">
                <h2 className="text-xl font-medium tracking-tight">{section.heading}</h2>
                <div className="max-w-[65ch] space-y-4 text-[17px] leading-[1.75] text-[#4A4A4A]">
                  {section.body && <p>{section.body}</p>}
                  {section.bullets && <ul className="list-disc space-y-3 pl-5">{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
                </div>
              </section>
              {sectionIndex === study.sections.length - 1 && (
                <figure className="mt-12 md:mt-16">
                  <a href={study.currentCapture} target="_blank" rel="noreferrer" aria-label={`Open full-size ${study.title} website screenshot`} className="block overflow-hidden rounded-2xl border border-gray-200">
                    <img src={study.currentCapture} alt={`${study.title} live website captured in November 2026`} loading="lazy" width={1265} height={712} className="block h-auto w-full" />
                  </a>
                </figure>
              )}
            </div>
          ))}
        </div>

        {study.gallery.length > 0 && (
          <section aria-label="Project imagery" className="mt-16 space-y-8 md:mt-24">
            {study.gallery.map((item, imageIndex) => (
              <figure key={item.src}>
                <div className="overflow-hidden rounded-2xl bg-gray-100 md:rounded-3xl">
                  {item.src.endsWith(".mp4") ? (
                    <video src={item.src} autoPlay muted loop controls playsInline preload="metadata" className="block h-auto w-full" aria-label={`${study.title} project walkthrough`} />
                  ) : (
                    <a href={item.src} target="_blank" rel="noreferrer" aria-label={`Open ${study.title} design detail ${imageIndex + 1}`}>
                      <img src={item.src} alt={item.caption} loading="lazy" className="block h-auto w-full" />
                    </a>
                  )}
                </div>
              </figure>
            ))}
          </section>
        )}


        <section aria-label="Continue exploring" className="mt-20 grid gap-6 sm:grid-cols-2">
          <a href="mailto:tomiwa@ariyibitomiwa.com" className="group relative flex min-h-[200px] flex-col rounded-[16px] bg-[#F2F2F1] p-6 pb-16 transition-colors hover:bg-[#E5E5E4] sm:rounded-[24px] sm:p-8 sm:pb-16">
            <span className="mb-2 text-[14px] font-normal text-gray-500">Get in touch</span>
            <h2 className="text-2xl font-medium">Let’s work together</h2>
            <ArrowUpRight className="absolute bottom-6 right-6 size-8 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
          </a>
          {next && (
            <a href={`/work/${next.slug}`} className="group relative flex min-h-[200px] flex-col rounded-[16px] bg-[#F2F2F1] p-6 pb-16 transition-colors hover:bg-[#E5E5E4] sm:rounded-[24px] sm:p-8 sm:pb-16">
              <span className="mb-2 text-[14px] font-normal text-gray-500">Next case study</span>
              <h2 className="text-2xl font-medium">{next.title}</h2>
              <ArrowUpRight className="absolute bottom-6 right-6 size-8 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
            </a>
          )}
        </section>

        <footer className="mt-8 flex flex-wrap justify-between gap-3 border-t border-gray-100 pt-6 text-xs text-gray-500">
          <p>Ariyibi Tomiwa &copy; {new Date().getFullYear()}</p>
          <a href="/" className="hover:text-black">Back to all work</a>
        </footer>
      </main>
    </div>
  );
}
