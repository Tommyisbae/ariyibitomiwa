import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useEffect } from "react";
import { CASE_STUDIES, type CaseStudy } from "./caseStudies";

export default function CaseStudyPage({ study }: { study: CaseStudy }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${study.title} | Ariyibi Tomiwa`;
  }, [study]);

  const idx = CASE_STUDIES.findIndex((c) => c.slug === study.slug);
  const next = CASE_STUDIES[(idx + 1) % CASE_STUDIES.length];

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-[620px] mx-auto px-6 py-12 md:py-20">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-[14px] text-gray-500 hover:text-black transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          All work
        </a>

        <header className="mb-10">
          <h1 className="text-3xl font-semibold mb-3">{study.title}</h1>
          <p className="text-[16px] text-[#4A4A4A] leading-relaxed">
            {study.summary}
          </p>
        </header>

        <div className="-mx-6 sm:mx-0 mb-10 overflow-hidden rounded-none sm:rounded-[24px] bg-gray-100">
          <img
            src={study.hero}
            alt={`${study.title} hero`}
            className="w-full h-auto block"
          />
        </div>

        <dl className="grid grid-cols-2 gap-x-6 gap-y-5 mb-14 pb-10 border-b border-gray-100">
          {study.meta.map((m) => (
            <div key={m.label}>
              <dt className="text-[12px] font-medium text-[#A0A0A0] uppercase tracking-wider mb-1">
                {m.label}
              </dt>
              <dd className="text-[15px] text-gray-900">{m.value}</dd>
            </div>
          ))}
        </dl>

        <div className="space-y-12 text-[16px] text-[#4A4A4A] leading-relaxed mb-14">
          {study.sections.map((s) => (
            <section key={s.heading} className="space-y-3">
              <h2 className="text-[12px] font-medium text-[#A0A0A0] uppercase tracking-wider">
                {s.heading}
              </h2>
              {s.body && <p>{s.body}</p>}
              {s.bullets && (
                <ul className="space-y-3">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-[11px] w-1 h-1 rounded-full bg-gray-400 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <div className="space-y-6 mb-16">
          {study.gallery.map((src, i) => (
            <div
              key={src}
              className="-mx-6 sm:mx-0 overflow-hidden rounded-none sm:rounded-[24px] bg-gray-100"
            >
              {src.endsWith(".mp4") ? (
                <video
                  src={src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto block"
                />
              ) : (
                <img
                  src={src}
                  alt={`${study.title} screen ${i + 1}`}
                  loading="lazy"
                  className="w-full h-auto block"
                />
              )}
            </div>
          ))}
        </div>

        <section className="grid sm:grid-cols-2 gap-6">
          <a
            href={study.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="bg-[#F2F2F1] rounded-[16px] sm:rounded-[24px] p-6 sm:p-8 relative min-h-[200px] flex flex-col group hover:bg-[#E5E5E4] transition-colors"
          >
            <span className="text-[14px] text-gray-500 mb-2">Live site</span>
            <h3 className="text-2xl font-semibold">Visit {study.title}</h3>
            <ArrowUpRight className="w-8 h-8 absolute bottom-6 right-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
          {next && next.slug !== study.slug && (
            <a
              href={`/work/${next.slug}`}
              className="bg-[#F2F2F1] rounded-[16px] sm:rounded-[24px] p-6 sm:p-8 relative min-h-[200px] flex flex-col group hover:bg-[#E5E5E4] transition-colors"
            >
              <span className="text-[14px] text-gray-500 mb-2">Next project</span>
              <h3 className="text-2xl font-semibold">{next.title}</h3>
              <ArrowUpRight className="w-8 h-8 absolute bottom-6 right-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          )}
        </section>

        <footer className="mt-20 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p>Ariyibi Tomiwa &copy; 2026</p>
          <a href="/" className="hover:text-black mt-2 sm:mt-0 transition-colors">
            Back to all work
          </a>
        </footer>
      </main>
    </div>
  );
}
