import { ArrowUpRight, X, ArrowLeft } from 'lucide-react';
import { useState } from 'react';

const PROJECTS = [
  {
    id: 1,
    title: 'Intryc AI',
    description: 'A strategic brand identity and high-performance Webflow redesign driving user engagement.',
    coverUrl: '/0lG7iLlrMlQuKB1qJ4CddTWzo.mp4.png',
    liveUrl: 'https://www.intryc.com/'
  },
  {
    id: 2,
    title: 'Mono AI',
    description: 'A refined digital storefront for an AI layer, bringing clarity and precision to complex workflows.',
    coverUrl: '/Y43TDcqsno5M4iq5IHuxI0pTu2Y.mp4.png',
    liveUrl: 'https://mono-ai-e3cdb7.webflow.io/'
  },
  {
    id: 3,
    title: 'Tandem',
    description: 'A custom, pixel-perfect Webflow experience bridging ambitious brand vision with flawless execution.',
    coverUrl: '/K33SR12U1IWujvZkbVkYKGAzhI.mp4.png',
    liveUrl: 'https://www.thetandemco.com/'
  },
  {
    id: 4,
    title: 'Cameron Gawley',
    description: 'A scalable digital portfolio transitioning a DTC consultant into a strategic institution.',
    coverUrl: '/0lG7iLlrMlQuKB1qJ4CddTWzo.mp4 (2).png',
    liveUrl: 'https://www.camerongawley.com/'
  },
  {
    id: 5,
    title: 'Haven Oaks',
    description: 'An accessible, user-centric care platform designed to convey deep trust, warmth, and professionalism.',
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
    <div className="min-h-screen bg-white">
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
            <span>Certified Webflow Partner</span>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1.5 flex-shrink-0">
              <path fillRule="evenodd" clipRule="evenodd" d="M13.3265 3.84956L11.0025 1.60156L8.6785 3.84956L5.4775 3.39656L4.9185 6.58056L2.0625 8.09656L3.4825 11.0016L2.0625 13.9056L4.9185 15.4216L5.4775 18.6056L8.6785 18.1536L11.0025 20.4016L13.3265 18.1536L16.5275 18.6056L17.0865 15.4216L19.9425 13.9056L18.5225 11.0016L19.9425 8.09656L17.0865 6.58056L16.5275 3.39656L13.3265 3.84956ZM6.2365 11.4246L9.6645 14.8526L15.3475 8.64656L14.0005 7.39956L9.6005 12.1946L7.5285 10.1226L6.2365 11.4246Z" fill="#146EF5"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M13.099 4.533L10.998 2.5L8.89706 4.533L6.00206 4.123L5.49706 7.003L2.91406 8.373L4.19806 11L2.91406 13.627L5.49706 14.997L6.00206 17.877L8.89706 17.467L10.998 19.5L13.099 17.467L15.994 17.877L16.499 14.997L19.082 13.627L17.798 11L19.082 8.373L16.499 7.003L15.994 4.123L13.099 4.533ZM6.23106 11.423L9.66006 14.851L15.343 8.645L13.996 7.398L9.59606 12.193L7.52406 10.121L6.23106 11.423Z" fill="#146EF5"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M6.22956 11.4234L9.65856 14.8514L15.3086 8.68144L15.3466 8.64844L15.3416 10.0464L9.65856 16.2524L6.22956 12.8234L6.22656 11.4184L6.23156 11.4214L6.22956 11.4234Z" fill="#146EF5"/>
            </svg>
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
                  <h2 className="text-[15px] font-semibold text-gray-900 mb-1">{project.title}</h2>
                  <p className="text-[14px] text-gray-600">{project.description}</p>
                </a>
              ))}
            </section>
          )}

          {activeTab === 'About' && (
            <section className="space-y-16 text-[16px] text-[#4A4A4A] leading-relaxed">
              
              <div className="space-y-4">
                <h3 className="text-[12px] font-medium text-[#A0A0A0] uppercase tracking-wider mb-2">Summary</h3>
                <p>
                  For the last 3+ years, I've been obsessed with one thing: building high-performance Webflow sites that win you business. I bridge the gap between stunning design (Figma) and flawless technical execution (Webflow). I specialize in turning slow, clunky brochure sites into strategic digital experiences that turn clicks into customers. I work fully remotely, partnering with ambitious brands worldwide.
                </p>
                <div className="pt-2 flex items-center gap-4">
                  <a href="https://www.linkedin.com/in/ariyibi-tomiwa-668219212" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-1.5 bg-[#F2F2F1] hover:bg-[#E5E5E4] transition-colors rounded-[8px] text-[14px] text-black font-medium">
                    <span className="text-white bg-[#0A66C2] px-1 py-0.5 rounded-[4px] text-[10px] font-bold leading-none flex items-center shrink-0">IN</span>
                    LinkedIn CV
                  </a>
                  <span className="text-gray-500 text-[14px] flex items-center gap-1.5 cursor-pointer hover:text-black transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Click to view
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-[12px] font-medium text-[#A0A0A0] uppercase tracking-wider mb-2">Experience</h3>
                <p>
                  I recently worked with AssetIntel, a US-based infrastructure asset management firm, to engineer robust and scalable web solutions. Prior to that, as a Web Developer at Brandsmits and Murals.ng, I designed and developed high-performance Webflow sites across diverse industries. Throughout my workflow, I specialize in converting complex Figma designs into pixel-perfect architecture using Finsweet's Client First system.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-[12px] font-medium text-[#A0A0A0] uppercase tracking-wider mb-2">Skills & Certifications</h3>
                <p>
                  I'm a Webflow Certified Partner and Framer Expert. My technical stack focuses heavily on JavaScript, Framer Motion, and the GreenSock Animation Platform (GSAP). I regularly develop custom solutions integrating third-party robust setups like Wized, Xano, and Memberstack to meet and surpass ambitious client expectations.
                </p>
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
                <a href="https://www.linkedin.com/in/ariyibi-tomiwa-668219212" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-[#0066CC] hover:text-black transition-colors text-[15px] sm:text-[18px] w-fit break-all">
                  <span className="w-6 h-6 border-[1.5px] border-current rounded-[6px] flex items-center justify-center shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                  </span>
                  Linkedin.com/in/ariyibi-tomiwa
                </a>
                <a href="https://contra.com/ariyibi_tomiwa/work" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-[#0066CC] hover:text-black transition-colors text-[15px] sm:text-[18px] w-fit break-all">
                  <span className="w-6 h-6 border-[1.5px] border-current rounded-[6px] flex items-center justify-center shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                  </span>
                  Contra.com/ariyibi_tomiwa
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
