import React from 'react';

const Appendix = () => {
  return (
    <section className="mt-12 relative flex flex-col md:flex-row gap-8 justify-center items-center animate-fade-in animation-delay-500">
      
      {/* Index Card (Coursework) */}
      <div className="bg-white p-6 shadow-md border border-ink/20 w-full max-w-sm rotate-[-3deg] relative z-20">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-6 tape rotate-[4deg]"></div>
        <div className="border-b-2 border-brightRed pb-2 mb-4">
          <h3 className="font-mono font-bold text-sm tracking-widest uppercase">Index: Relevant Coursework</h3>
        </div>
        <ul className="font-hand text-xl space-y-2 text-inkLight pl-4 list-disc list-outside marker:text-electricBlue">
          <li>Data Structures and Algorithms</li>
          <li>Object-Oriented Programming</li>
          <li>Software Design & Logic</li>
          <li>Numerical Methods</li>
          <li>Discrete Mathematics</li>
        </ul>
      </div>

      {/* Torn Paper (Interests) */}
      <div className="bg-[#f4f1ea] p-8 shadow-sm border border-ink/5 w-full max-w-sm rotate-[2deg] relative z-10 torn-edge-top">
        <div className="absolute -top-3 right-8 w-12 h-6 tape rotate-[-12deg]"></div>
        <h3 className="font-serif italic text-2xl text-ink mb-4">Personal Interests</h3>
        <p className="font-sans text-sm text-inkLight leading-relaxed">
          Beyond engineering, I spend my time exploring narrative depth in <strong className="text-ink">Classic Literature</strong> and <strong className="text-ink">ARGs</strong>, practicing the art of <strong className="text-ink">Bookbinding</strong>, and enjoying <strong className="text-ink">Anime</strong>, <strong className="text-ink">Word Games</strong>, and <strong className="text-ink">Stardew Valley</strong>.
        </p>
      </div>


    </section>
    
  );
};

export default Appendix;