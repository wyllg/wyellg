import React from 'react';

const Skills = () => {
  return (
    <section className='animate-fade-in animation-delay-300'>
      <div className="flex items-center gap-4 mb-8">
        <span className="bg-ink text-white font-mono text-xs px-2 py-1 uppercase tracking-widest">03 // Toolset</span>
        <h2 className="font-bold text-3xl md:text-4xl">Technical Inventory</h2>
      </div>

      <div className="bg-ink text-paper p-8 md:p-12 shadow-xl border border-inkLight relative overflow-hidden">
        <div className="absolute -bottom-2 -right-4 w-24 h-8 tape rotate-[-5deg] z-10 opacity-70"></div>
        <div className="absolute top-8 right-8 bg-safetyYellow text-ink font-mono font-bold text-[10px] px-2 py-1 rotate-[3deg] shadow-sm">SYS. CHECKED</div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Languages */}
          <div>
            <div className="border-b border-paper/20 pb-2 mb-4">
              <span className="font-mono text-xs uppercase tracking-widest text-paper/50">01. Languages</span>
            </div>
            <ul className="space-y-3 font-mono text-sm">
              <li className="flex justify-between items-center"><strong className="font-sans text-lg">Python</strong></li>
              <li className="flex justify-between items-center"><strong className="font-sans text-lg">Java</strong></li>
              <li className="flex justify-between items-center"><strong className="font-sans text-lg">JavaScript</strong></li>
              <li className="flex justify-between items-center"><strong className="font-sans text-lg">C++</strong></li>
              <li className="flex justify-between items-center"><strong className="font-sans text-lg">SQL</strong></li>
              <li className="flex justify-between items-center text-paper/70"><strong className="font-sans text-lg">HTML / CSS</strong></li>
            </ul>
          </div>

          {/* Frameworks */}
          <div>
            <div className="border-b border-paper/20 pb-2 mb-4">
              <span className="font-mono text-xs uppercase tracking-widest text-paper/50">02. Frameworks</span>
            </div>
            <div className="flex flex-wrap gap-3 mt-4">
              <span className="bg-electricBlue text-white px-3 py-1 font-bold shadow-sm rotate-[-2deg] hover:rotate-1 transition-transform">Spring Boot</span>
              <span className="bg-electricBlue text-white px-3 py-1 font-bold shadow-sm rotate-[1deg] hover:rotate-[-1deg] transition-transform">Django</span>
              <span className="bg-electricBlue text-white px-3 py-1 font-bold shadow-sm rotate-[-1deg] hover:rotate-1 transition-transform">React</span>
              <span className="bg-paper text-ink px-3 py-1 font-bold shadow-sm rotate-[2deg] hover:rotate-[-1deg] transition-transform">Tailwind CSS</span>
              <span className="bg-paper text-ink px-3 py-1 font-bold shadow-sm rotate-[-1deg] hover:rotate-1 transition-transform">Streamlit</span>
              <span className="bg-paper text-ink px-3 py-1 font-bold shadow-sm rotate-[1deg] hover:rotate-[-1deg] transition-transform">Flask</span>
            </div>
          </div>

          {/* Hardware & Tools */}
          <div>
            <div className="border-b border-paper/20 pb-2 mb-4">
              <span className="font-mono text-xs uppercase tracking-widest text-paper/50">03. Systems & Tools</span>
            </div>
            <ul className="space-y-4 font-mono text-sm">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-neonGreen"></div>
                <div><strong className="font-sans text-base block">Embedded / IoT</strong><span className="text-xs text-paper/60">Arduino, ESP32, Raspberry Pi</span></div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-neonGreen"></div>
                <div><strong className="font-sans text-base block">DevOps / Cloud</strong><span className="text-xs text-paper/60">Git, GitHub, Vercel, Aiven</span></div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-neonGreen"></div>
                <div><strong className="font-sans text-base block">Software</strong><span className="text-xs text-paper/60">Linux, LaTeX, AutoCAD, Photoshop</span></div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-4 border-t border-paper/10 flex justify-between items-end opacity-40">
          <div className="font-mono text-5xl">INVENTORY-26</div>
          <span className="font-mono text-[10px] uppercase">Admin: W. Garay</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;