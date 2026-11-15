export type CaseStudySection = {
  heading: string;
  body?: string;
  bullets?: string[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  liveUrl: string;
  meta: { label: string; value: string }[];
  hero: string;
  sections: CaseStudySection[];
  gallery: string[];
};

const CONTRA = "https://media.contra.com/image/upload/fl_progressive/q_auto:best/";

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "riverlight",
    title: "Riverlight",
    summary:
      "A brand system and website for a firm that builds and backs service businesses.",
    liveUrl: "https://www.riverlight.co/",
    meta: [
      { label: "Role", value: "Brand & web design" },
      { label: "Deliverables", value: "Brand system, website" },
      { label: "Tools", value: "Figma, Framer, Webflow" },
      { label: "Year", value: "2026" },
    ],
    hero: CONTRA + "uahybjaohicdqmfrjxzw.webp",
    sections: [
      {
        heading: "Overview",
        body: "Riverlight builds and scales service businesses, and backs the people who run them. Their whole idea is investing in brilliant people, but their old identity didn't show that.",
      },
      {
        heading: "The brief",
        body: "Build a brand system and website that feel as human as the company's mission.",
      },
    ],
    gallery: [
      CONTRA + "tpj2pzwahvb2o2quvrro.webp",
      CONTRA + "konzjszc5jttg5eewiqf.webp",
      CONTRA + "wxptcakhtap1jbvmemte.webp",
      CONTRA + "jypsi1ajhv7csnrxzfrg.webp",
      CONTRA + "mhssj8vz2tkkfqcbq8rh.webp",
      CONTRA + "owyzfvxthuwyqhiagmxg.webp",
    ],
  },
  {
    slug: "climb",
    title: "Climb",
    summary:
      "A 10+ page marketing site and design system for a Databricks-native AI consultancy.",
    liveUrl: "https://climb.ai/",
    meta: [
      { label: "Role", value: "Web & UI design" },
      { label: "Deliverables", value: "Design system, 10+ page site" },
      { label: "Tools", value: "Figma" },
      { label: "Year", value: "2026" },
    ],
    hero: CONTRA + "me8nzlu217ifxcas9byc.webp",
    sections: [
      {
        heading: "Overview",
        body: "Climb needed its full marketing site designed on an aggressive, launch-driven sprint. I started from brand guidelines and early wireframes, and turned them into a polished, high-fidelity site that works just as well on mobile as on desktop.",
      },
      {
        heading: "Scope",
        body: "10+ pages, including Home, Case Studies, Solutions, Capabilities, Basecamps and Insights.",
      },
      {
        heading: "What I did",
        bullets: [
          "Built a complete design system in Figma: type scale, structured colour library and reusable components, ready for a clean developer handoff.",
          "Designed high-fidelity desktop and mobile layouts across the full site, consistent with the established brand direction.",
          "Ran rapid iteration with same-day feedback cycles to hit a tight launch date.",
          "Managed delivery end to end, keeping the client aligned and the project on schedule through launch.",
        ],
      },
    ],
    gallery: ["/climb-cover.png"],
  },
];

export const getCaseStudy = (slug: string) =>
  CASE_STUDIES.find((c) => c.slug === slug);
