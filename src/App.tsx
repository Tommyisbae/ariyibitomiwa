import { ArrowUpRight, X } from 'lucide-react';
import { useState } from 'react';

const PROJECTS = [
  {
    id: 1,
    title: 'Voiceflow',
    description: 'Web design and Webflow build for an AI agent platform.',
    tags: ['Webflow', 'UI Design', 'Interactions'],
    coverUrl: "/voiceflowcover.jpeg",
    liveUrl: 'https://www.voiceflow.com/'
  },
  {
    id: 2,
    title: 'Climb',
    description: 'Website design and design system for a Databricks-native AI consultancy.',
    tags: ['UI Design', 'Design System', 'Figma'],
    coverUrl: "/climb-cover.png",
    liveUrl: 'https://climb.ai/'
  },
  {
    id: 3,
    title: 'Intryc AI',
    description: 'Web design and Webflow build for an AI support-QA platform.',
    tags: ['Webflow', 'Web Design', 'Interactions'],
    coverUrl: '/0lG7iLlrMlQuKB1qJ4CddTWzo.mp4.png',
    liveUrl: 'https://www.intryc.com/'
  },
  {
    id: 4,
    title: 'Mono AI',
    description: 'Concept site for an AI productivity platform, built in Webflow.',
    tags: ['Webflow', 'Concept', 'Interactions'],
    coverUrl: '/Y43TDcqsno5M4iq5IHuxI0pTu2Y.mp4.png',
    liveUrl: 'https://mono-ai-e3cdb7.webflow.io/'
  },
  {
    id: 5,
    title: 'Tandem',
    description: 'Web design and Webflow build for a multifamily real-estate firm.',
    tags: ['Webflow', 'Web Design', 'Interactions'],
    coverUrl: '/K33SR12U1IWujvZkbVkYKGAzhI.mp4.png',
    liveUrl: 'https://www.thetandemco.com/'
  },
  {
    id: 6,
    title: 'Cameron Gawley',
    description: 'Personal site and CMS for an operator behind $500M+ in client revenue.',
    tags: ['Webflow', 'UI/UX Design', 'CMS'],
    coverUrl: '/0lG7iLlrMlQuKB1qJ4CddTWzo.mp4 (2).png',
    liveUrl: 'https://www.camerongawley.com/'
  },
  {
    id: 7,
    title: 'Haven Oaks',
    description: 'Web design and Webflow build for a London home-care agency.',
    tags: ['Webflow', 'Web Design', 'Accessibility'],
    coverUrl: '/0lG7iLlrMlQuKB1qJ4CddTWzo.mp4 (1).png',
    liveUrl: 'https://www.havenoakscareservices.com/'
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('Work');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
              src="/3DAqiz7qgEOCNbeL8NOmlMoUg.png (1).png" 
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
            {['Work', 'About', 'Contact'].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`px-6 sm:px-8 py-2.5 rounded-[8px] sm:rounded-[12px] text-base transition-colors ${
                  activeTab === tab 
                    ? 'bg-white text-black font-medium shadow-sm' 
                    : 'text-gray-500 font-normal hover:text-black'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </section>

        {/* Main Content Area */}
        <div className="space-y-16">
          {activeTab === 'Work' && (
            <section className="space-y-16">
              {PROJECTS.map((project) => (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" key={project.id} className="group cursor-pointer block">
                  <div className="relative mb-4 overflow-hidden rounded-none sm:rounded-[24px] bg-gray-100 -mx-6 sm:mx-0">
                    <img 
                      src={project.coverUrl} 
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-auto block object-cover rounded-none sm:rounded-[24px] transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-2 mb-1.5 flex-wrap">
                    <h2 className="text-[15px] font-semibold text-gray-900">{project.title}</h2>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-[11px] text-gray-600 bg-[#F2F2F1] px-2 py-0.5 rounded-[4px] font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-[14px] text-gray-600">{project.description}</p>
                </a>
              ))}
            </section>
          )}

          {activeTab === 'About' && (
            <section className="space-y-12 text-[16px] text-[#4A4A4A] leading-relaxed">
              
              <div className="space-y-4">
                <h3 className="text-[12px] font-medium text-[#A0A0A0] uppercase tracking-wider mb-2">Summary</h3>
                <p>
                  I design and build Webflow websites, from the first Figma file to launch. For 3+ years I've worked with brands across the US, UK and Nigeria, giving them sites that look sharp, load fast and are easy for their teams to run.
                </p>
                <div className="pt-2 flex items-center gap-4">
                  <a href="https://www.linkedin.com/in/ariyibi-tomiwa/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-1.5 bg-[#F2F2F1] hover:bg-[#E5E5E4] transition-colors rounded-[8px] text-[14px] text-black font-medium">
                    <span className="text-white bg-[#0A66C2] px-1 py-0.5 rounded-[4px] text-[10px] font-bold leading-none flex items-center shrink-0">IN</span>
                    View my LinkedIn
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-[12px] font-medium text-[#A0A0A0] uppercase tracking-wider mb-2">Skills</h3>
                <div className="space-y-2">
                  {[
                    { area: 'Webflow', items: 'Client-First, CMS, components' },
                    { area: 'Design', items: 'Figma, design systems, prototypes' },
                    { area: 'Motion', items: 'Webflow Interactions, GSAP' },
                    { area: 'Integrations', items: 'Wized, Memberstack, Xano, Shopify' },
                  ].map((skill) => (
                    <div key={skill.area} className="flex items-baseline justify-between gap-3">
                      <p className="text-[15px] text-gray-900">{skill.area}</p>
                      <span className="text-[13px] text-gray-400 text-right">{skill.items}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-[12px] font-medium text-[#A0A0A0] uppercase tracking-wider mb-2">Experience</h3>
                <div className="space-y-2">
                  {[
                    { role: 'Web Designer & Webflow Developer', org: 'Freelance', dates: '2026 – Now' },
                    { role: 'Webflow Engineer', org: 'AssetIntel', dates: '2026' },
                    { role: 'Web Designer', org: 'Brandsmits', dates: '2025' },
                    { role: 'Design Engineer', org: 'Murals.ng', dates: '2023 – 2025' },
                    { role: 'Webflow Intern', org: 'Tradespace', dates: '2023' },
                  ].map((job) => (
                    <div key={job.org} className="flex items-baseline justify-between gap-3">
                      <p className="text-[15px] text-gray-900">{job.role} <span className="text-gray-500">· {job.org}</span></p>
                      <span className="text-[13px] text-gray-400 shrink-0">{job.dates}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-[12px] font-medium text-[#A0A0A0] uppercase tracking-wider mb-2">Kind words</h3>
                <div className="space-y-6">
                  {[
                    { quote: 'Clean, professional build, handled a complex CMS restructure well and took feedback on board.', name: 'Ed Perez, Max Performance' },
                    { quote: 'Professional, ethical Webflow designer that can deliver. Fast and pragmatic.', name: 'Paulo C. Graça Moura, Quinta do Rapozinho' },
                    { quote: 'His attention to detail and deep understanding of Webflow made the entire process seamless.', name: 'Octavian, design collaborator' },
                  ].map((t) => (
                    <div key={t.name}>
                      <p className="text-[15px] text-gray-900">"{t.quote}"</p>
                      <span className="text-[13px] text-gray-400">{t.name}</span>
                    </div>
                  ))}
                </div>
              </div>


            </section>
          )}

          {activeTab === 'Contact' && (
            <section className="animate-in fade-in slide-in-from-bottom-2 duration-500">
              <h3 className="text-[12px] font-medium text-[#A0A0A0] uppercase tracking-wider mb-6">Contact</h3>
              <div className="flex flex-col gap-4">
                <a href="mailto:ariyibitomiwa611@gmail.com" className="flex items-center gap-3 text-[#0066CC] hover:text-black transition-colors text-[15px] sm:text-[18px] w-fit break-all">
                  <span className="w-6 h-6 border-[1.5px] border-current rounded-[6px] flex items-center justify-center shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                  </span>
                  ariyibitomiwa611@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/ariyibi-tomiwa/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-[#0066CC] hover:text-black transition-colors text-[15px] sm:text-[18px] w-fit break-all">
                  <span className="w-6 h-6 border-[1.5px] border-current rounded-[6px] flex items-center justify-center shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                  </span>
                  linkedin.com/in/ariyibi-tomiwa
                </a>
                <a href="https://contra.com/ariyibi_tomiwa/work" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-[#0066CC] hover:text-black transition-colors text-[15px] sm:text-[18px] w-fit break-all">
                  <span className="w-6 h-6 border-[1.5px] border-current rounded-[6px] flex items-center justify-center shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                  </span>
                  contra.com/ariyibi_tomiwa
                </a>
                <a href="https://x.com/tommy_is_bae" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-[#0066CC] hover:text-black transition-colors text-[15px] sm:text-[18px] w-fit break-all">
                  <span className="w-6 h-6 border-[1.5px] border-current rounded-[6px] flex items-center justify-center shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                  </span>
                  x.com/tommy_is_bae
                </a>
              </div>
            </section>
          )}

          {/* Dynamic CTA Section */}
          <section className="grid sm:grid-cols-2 gap-6 pt-16">
            {(activeTab === 'Work' || activeTab === 'About') && (
              <div 
                onClick={() => handleTabChange('Contact')}
                className="bg-[#F2F2F1] rounded-[16px] sm:rounded-[24px] p-6 sm:p-8 relative min-h-[200px] flex flex-col group cursor-pointer hover:bg-[#E5E5E4] transition-colors"
              >
                <span className="text-[14px] text-gray-500 mb-2 font-normal">Get In Touch</span>
                <h3 className="text-2xl font-semibold">Contact Me</h3>
                <div className="absolute bottom-6 right-6">
                  <ArrowUpRight className="w-8 h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            )}
            
            {(activeTab === 'Work' || activeTab === 'Contact') && (
              <div 
                onClick={() => handleTabChange('About')}
                className="bg-[#F2F2F1] rounded-[16px] sm:rounded-[24px] p-6 sm:p-8 relative min-h-[200px] flex flex-col group cursor-pointer hover:bg-[#E5E5E4] transition-colors"
              >
                <span className="text-[14px] text-gray-500 mb-2 font-normal">My Story</span>
                <h3 className="text-2xl font-semibold">Read about me</h3>
                <div className="absolute bottom-6 right-6">
                  <ArrowUpRight className="w-8 h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            )}

            {(activeTab === 'About' || activeTab === 'Contact') && (
              <div 
                onClick={() => handleTabChange('Work')}
                className="bg-[#F2F2F1] rounded-[16px] sm:rounded-[24px] p-6 sm:p-8 relative min-h-[200px] flex flex-col group cursor-pointer hover:bg-[#E5E5E4] transition-colors"
              >
                <span className="text-[14px] text-gray-500 mb-2 font-normal">Portfolio</span>
                <h3 className="text-2xl font-semibold">View my work</h3>
                <div className="absolute bottom-6 right-6">
                  <ArrowUpRight className="w-8 h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            )}
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500 relative z-10">
          <p>Ariyibi Tomiwa &copy; 2026</p>
          <a href="mailto:ariyibitomiwa611@gmail.com" className="hover:text-black mt-2 sm:mt-0 transition-colors">
            ariyibitomiwa611@gmail.com
          </a>
        </footer>

      </main>

      {/* Lightbox Overlay */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-[#161616] flex items-center justify-center p-6 animate-in fade-in duration-200"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div className="relative w-full max-w-sm" onClick={e => e.stopPropagation()}>
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
                src="/3DAqiz7qgEOCNbeL8NOmlMoUg.png (1).png" 
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
