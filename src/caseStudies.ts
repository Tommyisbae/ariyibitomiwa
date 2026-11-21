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
        "heading": "Overview",
        "body": "I worked on the brand system and website design for Riverlight, a firm that builds and scales service businesses. The project involved translating its people-first investment approach into a cohesive visual identity and website, helping prospective partners understand the company, explore its work and start a conversation."
      },
      {
        "heading": "My Role & Responsibilities",
        "bullets": [
          "Brand System: Developed a visual direction that reflects Riverlight’s focus on people and long-term partnerships, creating a consistent foundation for the website.",
          "Website Design: Brought the identity into the page layouts through editorial typography, a restrained colour palette and generous spacing, giving the company’s message a clear hierarchy.",
          "Information Architecture: Organised the approach, portfolio and team into distinct areas, making it easier for visitors to understand the firm and find relevant information.",
          "Visual Storytelling: Used atmospheric imagery alongside the investment thesis to create a considered, human presentation that supports the company’s positioning.",
          "Brand Consistency: Connected the identity and website design so that typography, imagery and page composition work together across the main marketing touchpoints."
        ]
      },
      {
        "heading": "Impact & Outcome",
        "body": "The project brought Riverlight’s brand and website into one coherent direction. The resulting design gives the firm a clear way to present its investment approach and supporting work, with a consistent visual language that can guide future marketing materials."
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
        "heading": "Overview",
        "body": "I designed a complete marketing website for Climb, a Databricks-native data and AI consultancy. The project involved turning existing brand guidelines and early wireframes into more than 10 high-fidelity page designs, delivering a consistent desktop and mobile experience within a tight, launch-driven schedule."
      },
      {
        "heading": "My Role & Responsibilities",
        "bullets": [
          "Website Design: Designed Home, Case Studies, Solutions, Capabilities, Basecamps and Insights pages, translating the established brand direction into a complete marketing experience.",
          "Scalable Design System: Built a Figma system with a defined type scale, structured colour library and reusable components to keep the page set consistent.",
          "Responsive Layouts: Developed desktop and mobile designs across the full site, adapting content hierarchy and layouts to different screen sizes.",
          "Feedback & Collaboration: Managed rapid iterations and same-day feedback cycles, keeping the client aligned as the designs developed towards the launch deadline.",
          "Developer Handoff: Prepared high-fidelity layouts and reusable components for implementation, giving the development team a clear reference for building the site."
        ]
      },
      {
        "heading": "Impact & Outcome",
        "body": "I delivered a complete set of responsive designs and a supporting Figma design system. The work gave Climb a consistent foundation for its marketing website, with reusable patterns that support future pages and a structured handoff that carries the design direction into development."
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
    "slug": "unmind",
    "title": "Unmind",
    "headline": "A scalable Webflow foundation for a 50+ page wellbeing website.",
    "summary": "Webflow development for a workplace wellbeing platform, translating 50+ page designs into a responsive, CMS-driven website.",
    "liveUrl": "https://unmind.com/",
    "meta": [
      {
        "label": "Role",
        "value": "Lead Webflow development"
      },
      {
        "label": "Scope",
        "value": "50+ unique page designs"
      },
      {
        "label": "Tools",
        "value": "Figma, Webflow, JavaScript, CSS"
      },
      {
        "label": "Focus",
        "value": "CMS, components & integrations"
      }
    ],
    "hero": "/projects/unmind.avif",
    "currentCapture": "/case-studies/unmind.jpg",
    "sections": [
      {
        "heading": "Overview",
        "body": "I had the opportunity to lead the development of a complex Webflow website for Unmind, a platform dedicated to workplace mental well-being. The project involved translating over 50 unique page designs into a fully functional, responsive, and scalable website while maintaining design consistency and performance efficiency."
      },
      {
        "heading": "My Role & Responsibilities",
        "bullets": [
          "Webflow Development: Transformed Figma designs into a pixel-perfect Webflow website, ensuring responsiveness across all devices.",
          "Custom Code & Integrations: Implemented custom JavaScript, CSS, and third-party integrations to enhance interactivity, streamline forms, and improve overall user experience.",
          "Scalable Design System: Developed a CMS-driven structure and reusable components to maintain consistency and simplify future updates.",
          "SEO & Performance Optimization: Worked on load speeds, clean semantic HTML structure, and SEO best practices throughout the build.",
          "Cross-Browser & Accessibility Testing: Tested compatibility across browsers and reviewed accessibility against WCAG standards."
        ]
      },
      {
        "heading": "Impact & Outcome",
        "body": "Through meticulous planning and execution, I delivered a responsive website that brought the supplied designs into a consistent Webflow build. The scalable component system and CMS structure supported future content updates, while the implementation brought together custom functionality, responsive layouts and a clear foundation for ongoing maintenance."
      }
    ],
    "gallery": []
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
        "heading": "Overview",
        "body": "I worked on a brand refresh and Webflow website for Intryc, a YC-backed AI support-quality platform. Over eight weeks, the project brought together visual identity, website design and development, replacing a template-based presentation with a distinctive, modular site the team could continue to manage and extend."
      },
      {
        "heading": "My Role & Responsibilities",
        "bullets": [
          "Brand Refresh: Introduced a gradient system that connects the brand’s secondary colours, creating a cohesive visual direction across the website.",
          "Typography & UI Design: Paired Suisse Intl headings with Inter body copy to balance a distinctive brand presence with readable product information.",
          "Webflow Development: Built responsive pages with a clear class-naming system and reusable components, keeping the implementation consistent across the site.",
          "Modular Page Structure: Organised the build around repeatable sections, giving the team a practical foundation for updating content and creating additional pages.",
          "Training & Handoff: Ran hands-on training calls and recorded Loom tutorials covering content updates and page creation, helping the team take ownership of the website."
        ]
      },
      {
        "heading": "Impact & Outcome",
        "body": "The project delivered a refreshed identity and a modular Webflow website, supported by practical team training. Intryc received a consistent digital presence and a maintainable structure for ongoing marketing work, with reusable components and walkthroughs to support future updates."
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
        "heading": "Overview",
        "body": "I worked on the website design and Webflow build for Tandem, a real-estate firm spanning development, construction and property management. The project brought the company’s capabilities, leadership and property portfolio into a connected website, giving prospective partners a clear way to understand the business and explore its work."
      },
      {
        "heading": "My Role & Responsibilities",
        "bullets": [
          "Website Design: Developed an editorial presentation with generous typography and spacing, allowing the company’s perspective and property imagery to carry the story.",
          "Webflow Development: Translated the website design into a working Webflow experience, bringing the main company and project pages together.",
          "Information Architecture: Gave capabilities, portfolio, team and contact dedicated destinations, helping visitors move through the business at different stages of evaluation.",
          "Portfolio Presentation: Used large architectural imagery to give the properties prominence and connect the company’s claims with visible examples of its work.",
          "Content Hierarchy: Organised the firm’s principles, operating approach and contact points into a clear reading journey, supporting both an initial introduction and deeper exploration."
        ]
      },
      {
        "heading": "Impact & Outcome",
        "body": "The website gives Tandem a cohesive destination for presenting the business to prospective partners. Its capabilities, people and properties sit within one consistent experience, supporting the conversations that take place around a considered real-estate partnership."
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
        "heading": "Overview",
        "body": "I designed and developed a CMS-driven Webflow website for TRACKSIDE, a motorsport hospitality brand offering curated race weekends. The project combined an immersive visual experience with event discovery, package presentation and consultation booking, with lead capture prioritised ahead of a major race deadline."
      },
      {
        "heading": "My Role & Responsibilities",
        "bullets": [
          "Web Design & Motion: Created bento layouts, animated racing-series cards and illustrated components to bring the brand’s energy into the website.",
          "CMS Architecture: Modelled racing series, events and packages as linked collections, allowing the team to publish new race weekends through the CMS.",
          "Package Logic: Built Select and Signature package presentation with occupancy-based pricing and conditional display, showing the relevant options for each event.",
          "Event Discovery: Developed a calendar with series and country filters, helping visitors explore the international schedule and find suitable experiences.",
          "Booking Integration: Connected the inquiry journey to Zoho Bookings so visitors could arrange a consultation directly, alongside capture of event preferences and group sizes."
        ]
      },
      {
        "heading": "Impact & Outcome",
        "body": "The site launched on its custom domain ahead of the race deadline and began capturing qualified inquiries from day one. Motion and CRM work followed in later phases, while the linked CMS structure gave the team a repeatable way to maintain events and packages."
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
        "heading": "Overview",
        "body": "I designed and built Mono AI as an independent Webflow concept for an AI productivity platform. The project explored how to present a broad set of AI capabilities through a clear marketing website, combining a distinctive visual direction with structured feature sections, product imagery and interactions."
      },
      {
        "heading": "My Role & Responsibilities",
        "bullets": [
          "Visual Direction: Developed a dark interface with an iridescent hero visual, establishing a consistent identity across the concept.",
          "Website Design: Organised automation, data insights and adaptive AI into a clear hierarchy, followed by practical examples of chat, scheduling and transcription.",
          "Webflow Development: Built the concept as a live Webflow site, translating the layouts and visual direction into a working browser experience.",
          "Feature Presentation: Used repeatable cards and product-interface imagery to make the individual capabilities easier to explore and compare.",
          "Interactions & Page Flow: Connected the feature narrative with consistent calls to action and interactive sections, carrying the visual system through the full page."
        ]
      },
      {
        "heading": "Impact & Outcome",
        "body": "The result is a complete marketing-site concept that demonstrates my approach to visual design, product storytelling and Webflow implementation. Mono AI is an independent project, and the customer examples and figures shown within the concept are illustrative. Its outcome is the finished design and build, with no measured commercial results."
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
        "heading": "Overview",
        "body": "I designed and developed a Webflow website and content hub for Cameron Gawley, an operator helping founders scale DTC brands. The project brought his systems, advisory and ventures into one digital presence, combining an editorial identity with structured publishing and newsletter lead generation."
      },
      {
        "heading": "My Role & Responsibilities",
        "bullets": [
          "Design System: Established Figma variables and mapped the visual system to Webflow global classes, keeping the design and implementation aligned.",
          "Visual Identity: Combined serif headings and cream surfaces with forest green, charcoal and lime, creating a consistent presentation for articles, resources and conversion points.",
          "CMS Architecture: Structured case studies around Problem, Decision and Outcome fields, giving the team a repeatable framework for publishing new content.",
          "Lead Generation: Added newsletter entry points, including a scroll- and time-triggered modal, connecting the reading experience with an ongoing audience relationship.",
          "Webflow Build & Handoff: Built with a Client-First structure, semantic HTML and WebP imagery, then recorded CMS training videos so the team could manage the site in-house."
        ]
      },
      {
        "heading": "Impact & Outcome",
        "body": "The project delivered a client-maintainable content hub that brings the business lines into one lead-generation system. Reusable components, structured CMS fields and recorded training give the team a consistent way to publish new material and extend the site."
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
        "heading": "Overview",
        "body": "I designed and developed a Webflow website for Haven Oaks, a family-run home-care provider, within a one-week delivery window. The project focused on creating a clear, welcoming online presence that explains the available services, builds confidence and helps families take the first step towards arranging care."
      },
      {
        "heading": "My Role & Responsibilities",
        "bullets": [
          "Website Design: Created calm layouts with a blue-and-white palette and a clear hierarchy, making the service information approachable and easy to read.",
          "Photography & Presentation: Selected imagery of diverse people in comfortable home settings to help visitors connect the care offer with their own circumstances.",
          "Service Structure: Brought Nursing Care, Domiciliary Care, Live-In Support and Semi-Independent Living into a clear overview of the available support.",
          "Enquiry Journey: Explained starting care through three steps: an initial visit, a free home assessment and the beginning of support.",
          "Webflow Development: Built responsive pages and incorporated client and family testimonials, bringing service information, reassurance and contact into one experience."
        ]
      },
      {
        "heading": "Impact & Outcome",
        "body": "The finished website gives Haven Oaks a clear digital presence and a straightforward way for families to understand its services. Delivered within one week, it connects the provider’s offer with a visible path to an initial conversation and a consistent experience across screen sizes."
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
