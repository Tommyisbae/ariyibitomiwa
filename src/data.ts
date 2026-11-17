export type Project = {
  title: string;
  description: string;
  tags: string[];
  cover: string;
  caseStudy?: string;
  liveUrl: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Riverlight",
    description:
      "Brand system and website for a firm that builds and backs service businesses.",
    tags: ["Brand system", "Web design"],
    cover: "/riverlight-cover.webp",
    caseStudy: "riverlight",
    liveUrl: "https://www.riverlight.co/",
  },
  {
    title: "Climb",
    description:
      "Website and design system for a Databricks-native AI consultancy.",
    tags: ["Web design", "Design system"],
    cover: "/climb-cover.png",
    caseStudy: "climb",
    liveUrl: "https://climb.ai/",
  },
  {
    title: "Intryc",
    description: "Brand refresh and Webflow build for a YC-backed AI support-QA platform.",
    tags: ["Brand", "Webflow"],
    cover: "/intryc-cover.png",
    caseStudy: "intryc",
    liveUrl: "https://www.intryc.com/",
  },
  {
    title: "Tandem",
    description: "Web design and Webflow build for a multifamily real-estate firm.",
    tags: ["Web design", "Webflow"],
    cover: "/tandem-cover.png",
    liveUrl: "https://www.thetandemco.com/",
  },
  {
    title: "Trackside",
    description:
      "Web design, motion and a CMS-driven Webflow build for a motorsport hospitality brand.",
    tags: ["Motion", "Webflow"],
    cover: "/trackside-cover.webp",
    caseStudy: "trackside",
    liveUrl: "https://trackside.vip/",
  },
  {
    title: "Voiceflow",
    description: "Web design and Webflow build for an AI agent platform.",
    tags: ["UI design", "Webflow"],
    cover: "/voiceflowcover.jpeg",
    liveUrl: "https://www.voiceflow.com/",
  },
  {
    title: "Mono AI",
    description: "Concept site for an AI productivity platform, built in Webflow.",
    tags: ["Concept", "Webflow"],
    cover: "/mono-ai-cover.png",
    liveUrl: "https://mono-ai-e3cdb7.webflow.io/",
  },
  {
    title: "Cameron Gawley",
    description:
      "Personal site and CMS for an operator behind $500M+ in client revenue.",
    tags: ["Web design", "CMS"],
    cover: "/cameron-gawley-cover.png",
    liveUrl: "https://www.camerongawley.com/",
  },
  {
    title: "Haven Oaks",
    description: "Web design and Webflow build for a London home-care agency.",
    tags: ["Web design", "Accessibility"],
    cover: "/haven-oaks-cover.png",
    liveUrl: "https://www.havenoakscareservices.com/",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Clean, professional build, handled a complex CMS restructure well and took feedback on board.",
    name: "Ed Perez",
    org: "Max Performance",
  },
  {
    quote:
      "Professional, ethical Webflow designer that can deliver. Fast and pragmatic.",
    name: "Paulo C. Graça Moura",
    org: "Quinta do Rapozinho",
  },
  {
    quote:
      "His attention to detail and deep understanding of Webflow made the entire process seamless.",
    name: "Octavian",
    org: "Design collaborator",
  },
];

export const SERVICES = [
  {
    name: "Brand systems",
    detail: "Identity, type, colour and the rules that keep them consistent.",
  },
  {
    name: "Website design",
    detail: "Marketing sites for SaaS and B2B, designed page by page in Figma.",
  },
  {
    name: "Webflow and Framer builds",
    detail: "Clean structure and a CMS your team can run without a developer.",
  },
  {
    name: "Design systems",
    detail: "Components and tokens that keep every new page on brand.",
  },
];

export const LINKS = [
  { label: "Email", href: "mailto:ariyibitomiwa611@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ariyibi-tomiwa/" },
  { label: "Contra", href: "https://contra.com/ariyibi_tomiwa/work" },
  { label: "X", href: "https://x.com/tommy_is_bae" },
];

export const REEL =
  "https://media.contra.com/video/upload/fl_progressive/q_auto:best,w_1500/fuynmyiyeuhssslqct0m.mp4";
