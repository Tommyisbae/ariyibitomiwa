import { ArrowUpRight, Check, Copy, X } from "lucide-react";
import { useLayoutEffect, useRef, useState } from "react";
import CaseStudyPage from "./CaseStudyPage";
import { getCaseStudy } from "./caseStudies";

const EMAIL = "tomiwa@ariyibitomiwa.com";
const TESTIMONIALS = [
  {
    quote: "Ariyibi is an absolute standout professional.",
    name: "Sean Majumder, client",
  },
  {
    quote:
      "Clean, professional build, handled a complex CMS restructure well and took feedback on board.",
    name: "Ed Perez, Max Performance",
  },
  {
    quote:
      "Professional, ethical Webflow designer that can deliver. Fast and pragmatic.",
    name: "Paulo C. Graça Moura, Quinta do Rapozinho",
  },
  {
    quote:
      "His attention to detail and deep understanding of Webflow made the entire process seamless.",
    name: "Octavian, design collaborator",
  },
];
const BOOKING_URL = "https://cal.com/ariyibi-tomiwa/15min";
const SOCIALS = [
  {
    label: "LinkedIn",
    handle: "ariyibi-tomiwa",
    href: "https://www.linkedin.com/in/ariyibi-tomiwa/",
  },
  {
    label: "Contra",
    handle: "ariyibi_tomiwa",
    href: "https://contra.com/ariyibi_tomiwa/work",
  },
  { label: "X", handle: "@tommy_is_bae", href: "https://x.com/tommy_is_bae" },
];

const PROJECTS = [
  {
    id: 0,
    title: "Riverlight",
    caseStudy: "riverlight",
    description:
      "Brand system and website for a firm that builds and backs service businesses.",
    tags: ["Brand System", "Web Design", "Figma"],
    coverUrl: "/projects/riverlight.jpg",
    liveUrl: "https://www.riverlight.co/",
  },
  {
    id: 1,
    title: "Climb",
    caseStudy: "climb",
    description:
      "Website design and design system for a Databricks-native AI consultancy.",
    tags: ["UI Design", "Design System", "Figma"],
    coverUrl: "/projects/climb.jpg",
    liveUrl: "https://climb.ai/",
  },
  {
    id: 2,
    title: "Intryc AI",
    caseStudy: "intryc",
    description: "Web design and Webflow build for an AI support-QA platform.",
    tags: ["Webflow", "Web Design", "Interactions"],
    coverUrl: "/projects/intryc.jpg",
    liveUrl: "https://www.intryc.com/",
  },
  {
    id: 3,
    title: "Tandem",
    description:
      "Web design and Webflow build for a multifamily real-estate firm.",
    tags: ["Webflow", "Web Design", "Interactions"],
    coverUrl: "/projects/tandem.jpg",
    liveUrl: "https://www.thetandemco.com/",
  },
  {
    id: 4,
    title: "TRACKSIDE",
    caseStudy: "trackside",
    description:
      "Web design, motion and Webflow build for a motorsport hospitality brand.",
    tags: ["Webflow", "Web Design", "Motion"],
    coverUrl: "/projects/trackside.jpg",
    liveUrl: "https://trackside.vip/",
  },
  {
    id: 5,
    title: "Mono AI",
    description:
      "Concept site for an AI productivity platform, built in Webflow.",
    tags: ["Webflow", "Concept", "Interactions"],
    coverUrl: "/projects/mono-ai.jpg",
    liveUrl: "https://mono-ai-e3cdb7.webflow.io/",
  },
  {
    id: 6,
    title: "Cameron Gawley",
    caseStudy: "cameron-gawley",
    description:
      "Personal site and CMS for an operator behind $500M+ in client revenue.",
    tags: ["Webflow", "UI/UX Design", "CMS"],
    coverUrl: "/projects/cameron-gawley.jpg",
    liveUrl: "https://www.camerongawley.com/",
  },
  {
    id: 7,
    title: "Haven Oaks",
    caseStudy: "haven-oaks",
    description: "Web design and Webflow build for a London home-care agency.",
    tags: ["Webflow", "Web Design", "Accessibility"],
    coverUrl: "/projects/haven-oaks.jpg",
    liveUrl: "https://www.havenoakscareservices.com/",
  },
];

export default function App() {
  const match = window.location.pathname.match(/^\/work\/([^/]+)\/?$/);
  const study = match ? getCaseStudy(match[1]) : undefined;
  if (study) return <CaseStudyPage study={study} />;
  return <Home />;
}

function Home() {
  const [activeTab, setActiveTab] = useState("Work");
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  const firstRender = useRef(true);
  useLayoutEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [activeTab]);

  const handleTabChange = (tab: string) => setActiveTab(tab);

  return (
    <div className="min-h-screen bg-white relative">
      {/* Fixed Webflow Partner Badge */}
      <a
        href="https://experts.webflow.com/profile/ariyibi-tomiwa"
        target="_blank"
        rel="noreferrer"
        className="fixed right-4 bottom-4 md:right-6 md:bottom-6 z-50 group"
      >
        <img
          src="/certified_partner_badge_white.avif"
          alt="Certified Webflow Partner Badge"
          className="h-[32px] md:h-[40px] w-auto drop-shadow-sm group-hover:-translate-y-1 transition-transform duration-300 transform-gpu"
        />
      </a>

      <main className="max-w-[620px] mx-auto px-6 py-16 md:py-24">
        {/* Profile Header */}
        <section className="flex flex-col items-center text-center mb-12 relative z-10">
          <div
            className="w-[88px] h-[88px] rounded-[20px] sm:rounded-[26px] overflow-hidden mb-4 border-[4px] border-transparent hover:border-[#AAB9FF] cursor-pointer transition-colors duration-200"
            onClick={() => setIsLightboxOpen(true)}
          >
            <img
              src="/avatar.png"
              alt="Ariyibi Tomiwa"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-3xl font-semibold mb-2">Ariyibi Tomiwa</h1>
          <div className="flex items-center text-gray-600">
            <span>Webflow Designer & Developer</span>
          </div>
        </section>

        {/* Navigation Wrapper */}
        <section className="flex justify-center mb-16">
          <div className="inline-flex bg-[#F2F2F1] p-1 rounded-[12px] sm:rounded-[16px]">
            {["Work", "About", "Contact"].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`px-6 sm:px-8 py-2.5 rounded-[8px] sm:rounded-[12px] text-base transition-colors ${
                  activeTab === tab
                    ? "bg-white text-black font-medium shadow-sm"
                    : "text-gray-500 font-normal hover:text-black"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </section>

        {/* Main Content Area */}
        <div className="space-y-16">
          <section
            hidden={activeTab !== "Work"}
            className="space-y-16">
              {PROJECTS.map((project) => (
                <a
                  href={
                    "caseStudy" in project
                      ? `/work/${project.caseStudy}`
                      : project.liveUrl
                  }
                  {...("caseStudy" in project
                    ? {}
                    : { target: "_blank", rel: "noreferrer" })}
                  key={project.id}
                  className="group cursor-pointer block"
                >
                  <div className="relative mb-4 overflow-hidden rounded-none sm:rounded-[24px] bg-gray-100 -mx-6 sm:mx-0">
                    <img
                      src={project.coverUrl}
                      alt={project.title}
                      width={1600}
                      height={1000}
                      loading={project.id < 2 ? "eager" : "lazy"}
                      decoding="async"
                      className="w-full h-auto aspect-[16/10] block object-cover rounded-none sm:rounded-[24px] transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-2 mb-1.5 flex-wrap">
                    <h2 className="text-[15px] font-semibold text-gray-900">
                      {project.title}
                    </h2>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] text-gray-600 bg-[#F2F2F1] px-2 py-0.5 rounded-[4px] font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-[14px] text-gray-600">
                    {project.description}
                  </p>
                </a>
              ))}
          </section>

          <section
            hidden={activeTab !== "About"}
            className="space-y-12 text-[16px] text-[#4A4A4A] leading-relaxed">
              <div className="space-y-4">
                <h3 className="text-[12px] font-medium text-[#A0A0A0] uppercase tracking-wider mb-2">
                  Summary
                </h3>
                <p>
                  My name is Ariyibi Tomiwa, and I'm a Webflow designer and
                  developer. For the past 7 years I've been building websites
                  for SaaS and B2B companies, including AssetIntel, Climb AI
                  and Riverlight. My favorite part of the job is turning a
                  Figma file into a real site people can use.
                </p>
                <p>
                  When I'm not working, you can usually find me reading a
                  book, playing football, or at the gym.
                </p>
                <div className="pt-2 flex items-center gap-4">
                  <a
                    href="https://www.linkedin.com/in/ariyibi-tomiwa/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 bg-[#F2F2F1] hover:bg-[#E5E5E4] transition-colors rounded-[8px] text-[14px] text-black font-medium"
                  >
                    <span className="text-white bg-[#0A66C2] px-1 py-0.5 rounded-[4px] text-[10px] font-bold leading-none flex items-center shrink-0">
                      IN
                    </span>
                    View my LinkedIn
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-[12px] font-medium text-[#A0A0A0] uppercase tracking-wider mb-2">
                  Skills
                </h3>
                <div className="space-y-2">
                  {[
                    { area: "Webflow", items: "Client-First, CMS, components" },
                    { area: "Framer", items: "Sites, CMS, interactions" },
                    {
                      area: "Design",
                      items: "Figma, brand systems, design systems",
                    },
                    { area: "Motion", items: "Webflow Interactions, GSAP" },
                    {
                      area: "Integrations",
                      items: "Wized, Memberstack, Xano, Shopify",
                    },
                  ].map((skill) => (
                    <div
                      key={skill.area}
                      className="flex items-baseline justify-between gap-3"
                    >
                      <p className="text-[15px] text-gray-900">{skill.area}</p>
                      <span className="text-[13px] text-gray-400 text-right">
                        {skill.items}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-[12px] font-medium text-[#A0A0A0] uppercase tracking-wider mb-2">
                  Experience
                </h3>
                <div className="space-y-2">
                  {[
                    {
                      role: "Web Designer & Webflow Developer",
                      org: "Freelance",
                      dates: "2026 – Now",
                    },
                    {
                      role: "Webflow Engineer",
                      org: "AssetIntel",
                      dates: "2026",
                    },
                    { role: "Web Designer", org: "Brandsmits", dates: "2025" },
                    {
                      role: "Design Engineer",
                      org: "Murals.ng",
                      dates: "2023 – 2025",
                    },
                    {
                      role: "Webflow Intern",
                      org: "Tradespace",
                      dates: "2019",
                    },
                  ].map((job) => (
                    <div
                      key={job.org}
                      className="flex items-baseline justify-between gap-3"
                    >
                      <p className="text-[15px] text-gray-900">
                        {job.role}{" "}
                        <span className="text-gray-500">· {job.org}</span>
                      </p>
                      <span className="text-[13px] text-gray-400 shrink-0">
                        {job.dates}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-[12px] font-medium text-[#A0A0A0] uppercase tracking-wider mb-2">
                  Kind words
                </h3>
                <div className="space-y-6">
                  {TESTIMONIALS.map((t) => (
                    <div key={t.name}>
                      <p className="text-[15px] text-gray-900">"{t.quote}"</p>
                      <span className="text-[13px] text-gray-400">
                        {t.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
          </section>

          <section
            hidden={activeTab !== "Contact"}
            className="animate-in fade-in slide-in-from-bottom-2 duration-500">
              <h3 className="text-[12px] font-medium text-[#A0A0A0] uppercase tracking-wider mb-6">
                Contact
              </h3>
              <p className="text-[16px] text-[#4A4A4A] leading-relaxed mb-8 max-w-[46ch]">
                Have a project in mind? Book a quick intro call, or send a
                short note about what you're building and when you need it
                live.
              </p>

              <ul className="border-t border-gray-100 mb-12">
                <li className="border-b border-gray-100">
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between gap-4 py-4 group"
                  >
                    <span className="text-[15px] font-medium">Book a call</span>
                    <span className="flex items-center gap-2 text-[14px] text-gray-500 group-hover:text-black transition-colors">
                      15 min on Cal.com
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </a>
                </li>
                <li className="border-b border-gray-100 flex items-center justify-between gap-4 py-4">
                  <span className="text-[15px] font-medium">Email</span>
                  <span className="flex items-center gap-3 text-[14px] text-gray-500 min-w-0">
                    <a
                      href={`mailto:${EMAIL}`}
                      className="hover:text-black transition-colors truncate"
                    >
                      {EMAIL}
                    </a>
                    <button
                      type="button"
                      onClick={copyEmail}
                      aria-label={copied ? "Email copied" : "Copy email"}
                      title={copied ? "Copied" : "Copy email"}
                      className="shrink-0 hover:text-black transition-colors"
                    >
                      {copied ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </span>
                </li>
              </ul>

              <h3 className="text-[12px] font-medium text-[#A0A0A0] uppercase tracking-wider mb-2">
                Elsewhere
              </h3>
              <ul className="border-t border-gray-100">
                {SOCIALS.map((s) => (
                  <li key={s.label} className="border-b border-gray-100">
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between py-4 group"
                    >
                      <span className="text-[15px] font-medium">{s.label}</span>
                      <span className="flex items-center gap-2 text-[14px] text-gray-500 group-hover:text-black transition-colors">
                        {s.handle}
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
          </section>

          {/* Dynamic CTA Section */}
          <section className="grid sm:grid-cols-2 gap-6 pt-16">
            {(activeTab === "Work" || activeTab === "About") && (
              <button
                type="button"
                onClick={() => handleTabChange("Contact")}
                className="bg-[#F2F2F1] rounded-[16px] sm:rounded-[24px] p-6 sm:p-8 relative min-h-[200px] flex flex-col group cursor-pointer hover:bg-[#E5E5E4] transition-colors text-left w-full"
              >
                <span className="text-[14px] text-gray-500 mb-2 font-normal">
                  Get in touch
                </span>
                <h3 className="text-2xl font-semibold">Book a call or email</h3>
                <div className="absolute bottom-6 right-6">
                  <ArrowUpRight className="w-8 h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </button>
            )}

            {(activeTab === "Work" || activeTab === "Contact") && (
              <button
                type="button"
                onClick={() => handleTabChange("About")}
                className="bg-[#F2F2F1] rounded-[16px] sm:rounded-[24px] p-6 sm:p-8 relative min-h-[200px] flex flex-col group cursor-pointer hover:bg-[#E5E5E4] transition-colors text-left w-full"
              >
                <span className="text-[14px] text-gray-500 mb-2 font-normal">
                  My Story
                </span>
                <h3 className="text-2xl font-semibold">Read about me</h3>
                <div className="absolute bottom-6 right-6">
                  <ArrowUpRight className="w-8 h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </button>
            )}

            {(activeTab === "About" || activeTab === "Contact") && (
              <button
                type="button"
                onClick={() => handleTabChange("Work")}
                className="bg-[#F2F2F1] rounded-[16px] sm:rounded-[24px] p-6 sm:p-8 relative min-h-[200px] flex flex-col group cursor-pointer hover:bg-[#E5E5E4] transition-colors text-left w-full"
              >
                <span className="text-[14px] text-gray-500 mb-2 font-normal">
                  Portfolio
                </span>
                <h3 className="text-2xl font-semibold">View my work</h3>
                <div className="absolute bottom-6 right-6">
                  <ArrowUpRight className="w-8 h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </button>
            )}
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500 relative z-10">
          <p>Ariyibi Tomiwa &copy; 2026</p>
          <div className="flex items-center gap-5 mt-2 sm:mt-0">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="hover:text-black transition-colors"
            >
              Book a call
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="hover:text-black transition-colors"
            >
              {EMAIL}
            </a>
          </div>
        </footer>
      </main>

      {/* Lightbox Overlay */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#161616] flex items-center justify-center p-6 animate-in fade-in duration-200"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="relative w-full max-w-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute -top-20 left-1/2 -translate-x-1/2">
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black hover:scale-105 transition-transform"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="w-full aspect-square rounded-full overflow-hidden">
              <img
                src="/avatar.png"
                alt="Ariyibi Tomiwa Enlarge"
                loading="lazy"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
