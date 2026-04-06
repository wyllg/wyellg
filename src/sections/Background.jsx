import React from 'react';

const Background = () => {
  return (
    <section className='animate-fade-in animation-delay-400'>
      <div className="flex items-center gap-4 mb-8">
        <span className="bg-ink text-white font-mono text-xs px-2 py-1 uppercase tracking-widest">04 // Background</span>
        <h2 className="font-bold text-3xl md:text-4xl">Logbook & Education</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Leadership Experience */}
        <div className="bg-[#F9F6E8] p-8 shadow-md border border-ink/20 font-mono text-sm relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 tape rotate-[-2deg]"></div>
          
          <div className="flex justify-between items-end border-b-2 border-ink pb-4 mb-6">
            <h3 className="font-sans font-bold text-xl tracking-wide uppercase">Leadership Log</h3>
            <span className="text-[10px] bg-electricBlue text-white px-2 py-1">FORM 4B</span>
          </div>
          
          <div className="space-y-6">
            <div className="flex gap-4 border-b border-ink/10 pb-4">
              <span className="text-inkLight w-24">2022 - 2023</span>
              <div>
                <a href='https://www.facebook.com/share/1GweDfga2y/' target="_blank" className="block text-ink hover:text-neonGreen font-bold text-base font-sans">Auditor</a>
                <span className="text-xs font-bold block mb-1">Student Council (IS SHS)</span>
                <span className="text-xs text-inkLight">Audited financial records, evaluated budget proposals, and oversaw resource allocation for student initiatives.</span>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-inkLight w-24">2021 - 2022</span>
              <div>
                <a href='https://www.facebook.com/share/1CCrwekFfV/' target="_blank" className="block text-ink hover:text-neonGreen font-bold text-base font-sans">Creative Committee</a>
                <span className="text-xs font-bold block mb-1">Student Council (IS SHS)</span>
                <span className="text-xs text-inkLight">Designed digital promotional materials, posters, and conceptualized creative themes for campus events.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="bg-white p-8 shadow-md border border-ink/20 font-mono relative overflow-hidden">
          <div className="absolute top-16 right-4 border-4 border-brightRed text-brightRed font-sans font-bold text-xl uppercase tracking-widest px-3 py-1 rotate-[15deg] opacity-90 z-10 pointer-events-none">
            DEAN'S LIST
          </div>
          
          <div className="text-center border-b-2 border-ink pb-4 mb-6">
            <h3 className="font-sans font-bold text-xl tracking-wide uppercase">Academic Record</h3>
          </div>
          
          <div className="bg-lined-paper h-[18rem] pt-[30px] px-4 text-sm leading-[32px]">
            <div className="flex justify-between border-b border-ink/5">
              <span className="text-inkLight">Institution:</span>
              <strong className="font-sans text-ink">BatStateU</strong>
            </div>
            <div className="flex justify-between border-b border-ink/5">
              <span className="text-inkLight">Degree:</span>
              <strong className="font-sans text-ink">BS Computer Eng.</strong>
            </div>
            <div className="flex justify-between border-b border-ink/5">
              <span className="text-inkLight">Expected:</span>
              <strong className="font-sans text-ink">May 2027</strong>
            </div>
            <div className="flex justify-between border-b border-ink/5">
              <span className="text-inkLight">Standing:</span>
              <strong className="font-sans text-ink">Current GWA: 1.504</strong>
            </div>
            <div className="flex justify-between border-b border-ink/5">
              <span className="text-inkLight">High School:</span>
              <strong className="font-sans text-ink">BatStateU</strong>
            </div>
            <div className="flex justify-between border-b border-ink/5">
              <span className="text-inkLight">Years:</span>
              <strong className="font-sans text-ink">2017-2021 / With Honors</strong>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Background;