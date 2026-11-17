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
    gallery: ["/projects/climb.jpg"],
  },
  {
    slug: "intryc",
    title: "Intryc AI",
    summary:
      "A brand refresh and Webflow site for a YC-backed AI support-QA platform.",
    liveUrl: "https://www.intryc.com/",
    meta: [
      { label: "Role", value: "Brand, web design & Webflow build" },
      { label: "Timeline", value: "8 weeks" },
      { label: "Tools", value: "Figma, Webflow, Loom" },
      { label: "Year", value: "2025" },
    ],
    hero: CONTRA + "xcuz0gkzvpkto0hkkqip.webp",
    sections: [
      {
        heading: "Overview",
        body: "Intryc had a great product sitting behind a basic template and a dated identity: limited colour, little polish, and nothing to set it apart. For a YC-backed company selling to a tech-savvy audience, the site was undercutting the product.",
      },
      {
        heading: "The brief",
        body: "Build trust, feel premium, and stand out from the sea of dark, monotone SaaS sites.",
      },
      {
        heading: "What I did",
        bullets: [
          "Introduced a gradient system that ties Intryc's many secondary colours into one cohesive look.",
          "Paired Suisse Intl for headings with Inter for body copy: high-end and technical up top, easy to read underneath.",
          "Built the site in Webflow to be modular and easy to maintain, with a clear class-naming system, clean architecture and reusable components.",
          "Ran hands-on training calls and recorded Loom tutorials so the team can update content and launch new pages without an agency.",
        ],
      },
    ],
    gallery: [
      CONTRA + "wi6qsjn5oqi5enfsglsn.webp",
      CONTRA + "ka4twlbsj3mwyjltpf5y.webp",
      CONTRA + "yy3prpjgnfpbjep1ok7c.webp",
    ],
  },
  {
    slug: "trackside",
    title: "TRACKSIDE",
    summary:
      "Web design, motion and a CMS-driven Webflow build for a motorsport hospitality brand.",
    liveUrl: "https://trackside.vip/",
    meta: [
      { label: "Role", value: "Web design, motion & Webflow build" },
      { label: "Deliverables", value: "Website, CMS, booking flow" },
      { label: "Tools", value: "Figma, Webflow, Zoho Bookings" },
      { label: "Year", value: "2026" },
    ],
    hero: CONTRA + "yfxdjgvbrjm1zsn1ojfj.webp",
    sections: [
      {
        heading: "Overview",
        body: "TRACKSIDE curates race weekends at the biggest motorsport events: accommodation, hospitality suites, transport and concierge. Their old site was static and generic, nothing like the pace and precision of the experience they sell.",
      },
      {
        heading: "The brief",
        body: "A premium site that feels immersive without being heavy, makes finding an event effortless, and turns visitors into conversations. Lead capture had to be live before a major race, with richer motion and booking to follow.",
      },
      {
        heading: "What I did",
        bullets: [
          "Modelled racing series, events and packages as linked CMS collections, so the team can publish a new race weekend without touching code.",
          "Built package logic for the Select and Signature tiers, with occupancy-based pricing and conditional display, so every event shows the right options automatically.",
          "Designed a live events calendar that filters by series and country and scales to an international calendar.",
          "Added bento layouts, animated series cards and custom illustrated components, with motion that adds energy without distracting from the next step.",
          "Connected the inquiry flow to Zoho Bookings so guests can book a consultation directly.",
        ],
      },
      {
        heading: "Result",
        body: "Launched on the custom domain ahead of the race deadline and started capturing qualified inquiries, with group sizes and event preferences, from day one. Motion and CRM work shipped in later phases.",
      },
    ],
    gallery: [
      "https://media.contra.com/video/upload/fl_progressive/q_auto:best,w_1500/fuynmyiyeuhssslqct0m.mp4",
      CONTRA + "kq42ujoecjn42otfyeoi.webp",
    ],
  },
  {
    slug: "cameron-gawley",
    title: "Cameron Gawley",
    summary:
      "A Webflow site and content hub for an operator who helps founders scale DTC brands.",
    liveUrl: "https://www.camerongawley.com/",
    meta: [
      { label: "Role", value: "UI/UX design, brand strategy & Webflow build" },
      { label: "Deliverables", value: "Website, design system, CMS, lead gen" },
      { label: "Tools", value: "Figma, Webflow, Relume, JavaScript" },
      { label: "Year", value: "2026" },
    ],
    hero: "/projects/cameron-gawley.jpg",
    sections: [
      {
        heading: "Overview",
        body: "Cameron has generated $500M+ in revenue for DTC brands, but his site made him look like a consultant. The goal was to make him look like an institution: a home base where founders find his systems, frameworks and case studies.",
      },
      {
        heading: "The brief",
        body: "Show real authority without feeling corporate. Organise three business lines, Systems, Advisory and Ventures, in a CMS that scales. Capture high-intent subscribers for his Operator Breakdown newsletter without interrupting the reading.",
      },
      {
        heading: "What I did",
        bullets: [
          "Built a Figma design system first, with styles set up as variables and mapped to Webflow global classes.",
          "Paired an editorial look (serif headings, cream backgrounds) with a tactical one (dark sections, monospace data), in forest green, cream, electric lime and charcoal.",
          "Structured case studies as Problem, Decision and Outcome fields in the CMS, so Cameron can publish without touching the design.",
          "Placed dark-mode components at key conversion points and styled the newsletter form like a members' club card.",
          "Added a scroll- and time-triggered newsletter modal, a partner marquee and lime hover states, with WebP images and semantic HTML for speed and SEO.",
          "Recorded a CMS training video library so the team can run the site in-house.",
        ],
      },
      {
        heading: "Result",
        body: "A client-maintainable content hub that brings all three revenue streams into one lead-generation system, built with a Client-First structure the team can keep extending.",
      },
    ],
    gallery: [
      "https://media.contra.com/video/upload/fl_progressive/q_auto:best,w_1500/xcghak37bkbhgq5f8qud.mp4",
      CONTRA + "aqtzye2sqawhtvbqvclu.webp",
    ],
  },
  {
    slug: "haven-oaks",
    title: "Haven Oaks",
    summary:
      "Web design and Webflow build for a family-run home-care provider, delivered in one week.",
    liveUrl: "https://www.havenoakscareservices.com/",
    meta: [
      { label: "Role", value: "Web design & Webflow build" },
      { label: "Timeline", value: "1 week" },
      { label: "Tools", value: "Figma, Webflow" },
      { label: "Year", value: "2025" },
    ],
    hero: "/projects/haven-oaks.jpg",
    sections: [
      {
        heading: "Overview",
        body: "Haven Oaks provides person-centred care in people's homes, but their online presence was minimal and didn't show any of that warmth. Families arranging care are often under stress, so the site had to be easy to use and genuinely helpful, not just a brochure.",
      },
      {
        heading: "The brief",
        body: "Build trust at first glance, explain a wide range of services in plain language, make starting care feel simple, and show what existing clients say.",
      },
      {
        heading: "What I did",
        bullets: [
          "Designed a calm, uncluttered layout with a clear hierarchy and a blue-and-white palette that feels reliable.",
          "Chose photography of diverse people in comfortable home settings, so families can picture their own situation.",
          "Laid out Nursing Care, Domiciliary Care, Live-In Support and Semi-Independent Living in one clear services section.",
          "Turned starting care into three steps: book a visit, get a free home assessment, begin support.",
          "Added a testimonials section with real client and family quotes to build credibility.",
          "Built the site in Webflow, fully responsive and accessible.",
        ],
      },
    ],
    gallery: [
      CONTRA + "qysdrqeb27kujegck4oy.webp",
      CONTRA + "ch1emjqgi9qodhsrptuf.webp",
    ],
  },
];

export const getCaseStudy = (slug: string) =>
  CASE_STUDIES.find((c) => c.slug === slug);
