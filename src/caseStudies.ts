export type CaseStudySection = {
  heading: string;
  body?: string;
  bullets?: string[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  headline: string;
  summary: string;
  liveUrl: string;
  meta: { label: string; value: string }[];
  hero: string;
  currentCapture: string;
  sections: CaseStudySection[];
  gallery: { src: string; caption: string }[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    "slug": "riverlight",
    "title": "Riverlight",
    "summary": "A brand system and website that connect Riverlight’s people-first investment thesis with a clear, credible digital presence.",
    "liveUrl": "https://www.riverlight.co/",
    "meta": [
      {
        "label": "Role",
        "value": "Brand & web design"
      },
      {
        "label": "Deliverables",
        "value": "Brand system, website"
      },
      {
        "label": "Tools",
        "value": "Figma, Framer, Webflow"
      },
      {
        "label": "Year",
        "value": "2026"
      }
    ],
    "hero": "https://media.contra.com/image/upload/fl_progressive/q_auto:best/uahybjaohicdqmfrjxzw.webp",
    "sections": [
      {
        "heading": "The business need",
        "body": "Riverlight builds and scales service businesses and backs the people who run them. The brief was to make that human focus tangible across the identity and website, giving prospective partners a clear understanding of the firm before the first conversation."
      },
      {
        "heading": "My contribution",
        "body": "I worked across the brand system and website design. Connecting those two deliverables meant the identity could guide the page hierarchy, imagery and tone from the outset."
      },
      {
        "heading": "The design decisions",
        "body": "The website gives the investment thesis room to breathe. A restrained palette, large editorial typography and atmospheric photography establish a calm tone, while direct navigation separates the approach, portfolio and team. That structure lets a prospective partner move from the firm’s point of view to the evidence behind it."
      },
      {
        "heading": "What the team received",
        "body": "A connected brand and website direction, with a consistent visual vocabulary across the main marketing touchpoints. The work shows how I translate a positioning statement into an interface that supports a considered business decision."
      }
    ],
    "gallery": [
      {
        "src": "https://media.contra.com/image/upload/fl_progressive/q_auto:best/tpj2pzwahvb2o2quvrro.webp",
        "caption": "Riverlight — project presentation and design detail."
      },
      {
        "src": "https://media.contra.com/image/upload/fl_progressive/q_auto:best/konzjszc5jttg5eewiqf.webp",
        "caption": "Riverlight — project presentation and design detail."
      },
      {
        "src": "https://media.contra.com/image/upload/fl_progressive/q_auto:best/wxptcakhtap1jbvmemte.webp",
        "caption": "Riverlight — project presentation and design detail."
      },
      {
        "src": "https://media.contra.com/image/upload/fl_progressive/q_auto:best/jypsi1ajhv7csnrxzfrg.webp",
        "caption": "Riverlight — project presentation and design detail."
      },
      {
        "src": "https://media.contra.com/image/upload/fl_progressive/q_auto:best/mhssj8vz2tkkfqcbq8rh.webp",
        "caption": "Riverlight — project presentation and design detail."
      },
      {
        "src": "https://media.contra.com/image/upload/fl_progressive/q_auto:best/owyzfvxthuwyqhiagmxg.webp",
        "caption": "Riverlight — project presentation and design detail."
      }
    ],
    "headline": "Making an investment firm feel as human as its mission.",
    "currentCapture": "/case-studies/riverlight.jpg"
  },
  {
    "slug": "climb",
    "title": "Climb",
    "summary": "A 10+ page responsive website and Figma design system for a Databricks-native AI consultancy.",
    "liveUrl": "https://climb.ai/",
    "meta": [
      {
        "label": "Role",
        "value": "Web & UI design"
      },
      {
        "label": "Deliverables",
        "value": "Design system, 10+ page site"
      },
      {
        "label": "Tools",
        "value": "Figma"
      },
      {
        "label": "Year",
        "value": "2026"
      }
    ],
    "hero": "https://media.contra.com/image/upload/fl_progressive/q_auto:best/me8nzlu217ifxcas9byc.webp",
    "sections": [
      {
        "heading": "The business need",
        "body": "Climb needed a full marketing site designed within an aggressive, launch-driven sprint. The audience included enterprise buyers evaluating data and AI expertise, so the site needed to explain capabilities, demonstrate relevant work and make the next conversation easy to start."
      },
      {
        "heading": "My contribution",
        "body": "Starting with established brand guidelines and early wireframes, I designed high-fidelity desktop and mobile layouts across Home, Case Studies, Solutions, Capabilities, Basecamps and Insights. My scope covered the website design, component system, feedback cycles and developer handoff."
      },
      {
        "heading": "Consistency under a tight deadline",
        "body": "I established the type scale, colour library and reusable Figma components before extending the design across the site. This gave repeated content patterns a common structure and made revisions easier to apply across multiple pages. Same-day feedback cycles kept decisions moving during the sprint."
      },
      {
        "heading": "Designing for enterprise evaluation",
        "body": "The information architecture gives capabilities, solutions and case studies distinct roles. Buyers can understand the offer, explore a relevant application and inspect the supporting work. Desktop and mobile compositions carry that sequence through different screen sizes."
      },
      {
        "heading": "The delivery",
        "body": "A complete set of responsive designs for 10+ pages, supported by a reusable design system and a structured developer handoff. The project demonstrates the ability to turn an established brand into a substantial marketing website while managing scope and feedback against a launch date."
      }
    ],
    "gallery": [
      {
        "src": "/projects/climb.jpg",
        "caption": "Climb — project presentation and design detail."
      }
    ],
    "headline": "A complete enterprise marketing site, designed for a launch deadline.",
    "currentCapture": "/case-studies/climb.jpg"
  },
  {
    "slug": "intryc",
    "title": "Intryc AI",
    "summary": "An eight-week brand, web design and Webflow engagement for a YC-backed AI support-quality platform.",
    "liveUrl": "https://www.intryc.com/",
    "meta": [
      {
        "label": "Role",
        "value": "Brand, web design & Webflow build"
      },
      {
        "label": "Timeline",
        "value": "8 weeks"
      },
      {
        "label": "Tools",
        "value": "Figma, Webflow, Loom"
      },
      {
        "label": "Year",
        "value": "2025"
      }
    ],
    "hero": "https://media.contra.com/image/upload/fl_progressive/q_auto:best/xcuz0gkzvpkto0hkkqip.webp",
    "sections": [
      {
        "heading": "The business need",
        "body": "Intryc’s product had outgrown its template-based website. The brief was to build trust with buyers, establish a distinctive visual identity and give the team a site they could continue developing as the product evolved."
      },
      {
        "heading": "My contribution",
        "body": "I worked across the brand refresh, website design and Webflow implementation. That scope extended through the handoff, including training calls and recorded Loom tutorials for the team."
      },
      {
        "heading": "A coherent visual system",
        "body": "I brought the secondary colours together through a gradient system and paired Suisse Intl headings with Inter body text. The contrast supports a distinctive brand presence while keeping feature explanations and longer product copy readable."
      },
      {
        "heading": "Building for ongoing marketing work",
        "body": "The Webflow implementation uses reusable components, a clear class-naming system and a modular page structure. These decisions matter after launch, when a team needs to update positioning or assemble another page without redesigning every section."
      },
      {
        "heading": "The handoff",
        "body": "Hands-on sessions and recorded walkthroughs covered content updates and page creation. The delivered result combined a refreshed identity, a modular website and practical training, giving the team a foundation for ongoing marketing work."
      }
    ],
    "gallery": [
      {
        "src": "https://media.contra.com/image/upload/fl_progressive/q_auto:best/wi6qsjn5oqi5enfsglsn.webp",
        "caption": "Intryc AI — project presentation and design detail."
      },
      {
        "src": "https://media.contra.com/image/upload/fl_progressive/q_auto:best/ka4twlbsj3mwyjltpf5y.webp",
        "caption": "Intryc AI — project presentation and design detail."
      },
      {
        "src": "https://media.contra.com/image/upload/fl_progressive/q_auto:best/yy3prpjgnfpbjep1ok7c.webp",
        "caption": "Intryc AI — project presentation and design detail."
      }
    ],
    "headline": "A SaaS brand refresh with a website the marketing team can own.",
    "currentCapture": "/case-studies/intryc.jpg"
  },
  {
    "slug": "tandem",
    "title": "Tandem",
    "headline": "A real-estate website organised around trust and track record.",
    "summary": "Web design and Webflow development for a firm spanning development, construction and property management.",
    "liveUrl": "https://www.thetandemco.com/",
    "meta": [
      {
        "label": "Role",
        "value": "Web design & Webflow build"
      },
      {
        "label": "Focus",
        "value": "Corporate website & project portfolio"
      }
    ],
    "hero": "/projects/tandem.jpg",
    "currentCapture": "/case-studies/tandem.jpg",
    "sections": [
      {
        "heading": "The business context",
        "body": "Tandem brings development, construction and property management together in one business. Its website needs to help prospective partners understand both the breadth of that offer and the people and completed projects behind it."
      },
      {
        "heading": "My contribution",
        "body": "My work covered the website design and Webflow build. The design brings the firm’s point of view, capabilities, leadership and property portfolio into a connected digital presence."
      },
      {
        "heading": "Making the organisation legible",
        "body": "The navigation gives capabilities, portfolio, team and contact dedicated destinations. That separation supports different stages of evaluation: understanding what Tandem does, inspecting its work and finding the people to speak with."
      },
      {
        "heading": "Letting the work carry the story",
        "body": "Large architectural imagery and generous typography give the property portfolio prominence. The editorial presentation allows the firm’s principles and long-term perspective to sit alongside concrete examples of its work."
      },
      {
        "heading": "The delivered experience",
        "body": "The website provides a clear route through the business, from its operating philosophy to its properties and contact points. For a marketing team, this creates a coherent destination to share with prospects and partners during a longer sales conversation."
      }
    ],
    "gallery": []
  },
  {
    "slug": "trackside",
    "title": "TRACKSIDE",
    "summary": "A phased Webflow launch connecting motorsport experiences, package logic and consultation booking.",
    "liveUrl": "https://trackside.vip/",
    "meta": [
      {
        "label": "Role",
        "value": "Web design, motion & Webflow build"
      },
      {
        "label": "Deliverables",
        "value": "Website, CMS, booking flow"
      },
      {
        "label": "Tools",
        "value": "Figma, Webflow, Zoho Bookings"
      },
      {
        "label": "Year",
        "value": "2026"
      }
    ],
    "hero": "https://media.contra.com/image/upload/fl_progressive/q_auto:best/yfxdjgvbrjm1zsn1ojfj.webp",
    "sections": [
      {
        "heading": "The business need",
        "body": "TRACKSIDE curates race weekends with accommodation, hospitality, transport and concierge services. Lead capture needed to be live before a major race, with richer motion and booking functionality following in later phases."
      },
      {
        "heading": "My contribution",
        "body": "I designed and built the website, including motion, linked CMS collections, package presentation and the consultation flow. The delivery had to balance a premium experience with the practical requirements of publishing an international events calendar."
      },
      {
        "heading": "The content architecture",
        "body": "Racing series, events and packages became linked CMS collections. A filterable calendar helps visitors narrow the selection by series and country. This structure lets the team add race weekends through the CMS while keeping the relationship between the event and its packages intact."
      },
      {
        "heading": "Making complex offers usable",
        "body": "Select and Signature packages use occupancy-based pricing and conditional display. The site presents the relevant choices for each event and connects the inquiry journey to Zoho Bookings. Motion and illustrated components add character around those functional requirements."
      },
      {
        "heading": "Shipping in phases",
        "body": "The custom-domain launch went live ahead of the race deadline and began capturing inquiries with group sizes and event preferences. Motion and CRM work followed in later phases. Prioritising a usable inquiry path made the initial release commercially useful while the wider experience developed."
      }
    ],
    "gallery": [
      {
        "src": "https://media.contra.com/video/upload/fl_progressive/q_auto:best,w_1500/fuynmyiyeuhssslqct0m.mp4",
        "caption": "TRACKSIDE — project presentation and design detail."
      },
      {
        "src": "https://media.contra.com/image/upload/fl_progressive/q_auto:best/kq42ujoecjn42otfyeoi.webp",
        "caption": "TRACKSIDE — project presentation and design detail."
      }
    ],
    "headline": "Turning a race calendar into a structured hospitality sales journey.",
    "currentCapture": "/case-studies/trackside.jpg"
  },
  {
    "slug": "mono-ai",
    "title": "Mono AI",
    "headline": "Explaining a broad AI offer through a focused product-marketing concept.",
    "summary": "An independent Webflow concept exploring how to make AI capabilities understandable, distinctive and easy to explore.",
    "liveUrl": "https://mono-ai-e3cdb7.webflow.io/",
    "meta": [
      {
        "label": "Project type",
        "value": "Independent concept"
      },
      {
        "label": "Role",
        "value": "Web design & Webflow build"
      }
    ],
    "hero": "/projects/mono-ai.jpg",
    "currentCapture": "/case-studies/mono-ai.jpg",
    "sections": [
      {
        "heading": "The design question",
        "body": "AI platforms often combine several capabilities in one offer. This independent concept explores how a marketing website can give those capabilities a clear hierarchy and help visitors connect them with recognisable tasks."
      },
      {
        "heading": "My contribution",
        "body": "I designed and built the concept in Webflow, bringing together the visual direction, product-marketing layout and interactions. It serves as a working demonstration of how I approach an emerging software category."
      },
      {
        "heading": "A hierarchy around practical use",
        "body": "Automation, data insights and adaptive AI establish the high-level offer. More detailed sections then introduce chat, scheduling and transcription, giving visitors concrete examples to connect with the broader promise."
      },
      {
        "heading": "Balancing expression and clarity",
        "body": "Dark surfaces and an iridescent hero visual establish the identity. Feature cards, product-interface imagery and consistent calls to action give the rest of the page a repeatable structure, keeping the product story legible as the content expands."
      },
      {
        "heading": "What the concept demonstrates",
        "body": "The deliverable is a live Webflow marketing-site concept with a complete visual direction and feature narrative. The brand, customer examples and figures displayed in the concept are illustrative. This project demonstrates design and implementation craft; it has no measured commercial results."
      }
    ],
    "gallery": []
  },
  {
    "slug": "cameron-gawley",
    "title": "Cameron Gawley",
    "summary": "An editorial Webflow site connecting advisory, systems and ventures with a structured CMS and newsletter journey.",
    "liveUrl": "https://www.camerongawley.com/",
    "meta": [
      {
        "label": "Role",
        "value": "UI/UX design, brand strategy & Webflow build"
      },
      {
        "label": "Deliverables",
        "value": "Website, design system, CMS, lead gen"
      },
      {
        "label": "Tools",
        "value": "Figma, Webflow, Relume, JavaScript"
      },
      {
        "label": "Year",
        "value": "2026"
      }
    ],
    "hero": "/projects/cameron-gawley.jpg",
    "sections": [
      {
        "heading": "The business need",
        "body": "Cameron needed a central home for his frameworks, case studies and business lines. The brief combined authority, content publishing and lead generation, with a reading experience that could support both discovery and deeper evaluation."
      },
      {
        "heading": "My contribution",
        "body": "I worked across UI/UX design, brand strategy and Webflow implementation, including the design system, CMS and lead-generation components. The engagement extended into training so the team could maintain the site in-house."
      },
      {
        "heading": "From identity to reusable components",
        "body": "I established Figma variables and mapped the visual system into Webflow global classes. Editorial typography and cream surfaces support long-form reading, while forest green, charcoal and lime establish recognisable moments of emphasis across the site."
      },
      {
        "heading": "A publishing model with a clear purpose",
        "body": "Case studies use Problem, Decision and Outcome fields in the CMS. That structure gives future articles an editorial framework and keeps the reading experience consistent as the content library grows. Newsletter entry points connect the content experience with an ongoing audience relationship."
      },
      {
        "heading": "The handoff",
        "body": "A Client-First Webflow structure and a library of CMS training videos support continued publishing. The result is a content hub that brings the business lines together and gives the team a repeatable way to maintain and extend the site."
      }
    ],
    "gallery": [
      {
        "src": "https://media.contra.com/video/upload/fl_progressive/q_auto:best,w_1500/xcghak37bkbhgq5f8qud.mp4",
        "caption": "Cameron Gawley — project presentation and design detail."
      },
      {
        "src": "https://media.contra.com/image/upload/fl_progressive/q_auto:best/aqtzye2sqawhtvbqvclu.webp",
        "caption": "Cameron Gawley — project presentation and design detail."
      }
    ],
    "headline": "A personal brand website built to support an ongoing publishing operation.",
    "currentCapture": "/case-studies/cameron-gawley.jpg"
  },
  {
    "slug": "haven-oaks",
    "title": "Haven Oaks",
    "summary": "A responsive Webflow website for a family-run home-care provider, delivered in one week.",
    "liveUrl": "https://www.havenoakscareservices.com/",
    "meta": [
      {
        "label": "Role",
        "value": "Web design & Webflow build"
      },
      {
        "label": "Timeline",
        "value": "1 week"
      },
      {
        "label": "Tools",
        "value": "Figma, Webflow"
      },
      {
        "label": "Year",
        "value": "2025"
      }
    ],
    "hero": "/projects/haven-oaks.jpg",
    "sections": [
      {
        "heading": "The business need",
        "body": "Families arranging care may be making a difficult decision under time pressure. Haven Oaks needed a website that communicated warmth, explained the available services and made the first step towards support clear."
      },
      {
        "heading": "My contribution",
        "body": "I handled the web design and Webflow build within a one-week delivery window. The work centred on service clarity, readable layouts and a straightforward route to an initial conversation."
      },
      {
        "heading": "Reducing the effort to understand care",
        "body": "The service structure brings Nursing Care, Domiciliary Care, Live-In Support and Semi-Independent Living into a clear overview. Calm blue-and-white styling and photography of people at home help connect the information to the situations families are considering."
      },
      {
        "heading": "A visible path to support",
        "body": "Starting care is explained through three steps: an initial visit, a free home assessment and the beginning of support. Client and family testimonials sit alongside that journey to provide reassurance as visitors evaluate the provider."
      },
      {
        "heading": "The delivery",
        "body": "A responsive Webflow site that brings services, reassurance and contact into one reading journey. The project illustrates how I use hierarchy and plain-language structure to support a high-consideration service decision within a short delivery window."
      }
    ],
    "gallery": [
      {
        "src": "https://media.contra.com/image/upload/fl_progressive/q_auto:best/qysdrqeb27kujegck4oy.webp",
        "caption": "Haven Oaks — project presentation and design detail."
      },
      {
        "src": "https://media.contra.com/image/upload/fl_progressive/q_auto:best/ch1emjqgi9qodhsrptuf.webp",
        "caption": "Haven Oaks — project presentation and design detail."
      }
    ],
    "headline": "Making a complex care decision easier to navigate.",
    "currentCapture": "/case-studies/haven-oaks.jpg"
  }
];

export const getCaseStudy = (slug: string) => CASE_STUDIES.find((study) => study.slug === slug);
