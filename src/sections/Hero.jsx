import { Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center lg:items-start gap-12 animate-fade-in animation-delay-100">

      {/* ID Card */}
      <div className="relative w-full max-w-lg rotate-[-1deg] hover:rotate-0 transition-transform duration-300 shadow-xl bg-safetyYellow rounded-xl p-6 border border-ink/10">
        <div className="absolute -top-4 left-8 w-24 h-8 tape rotate-[3deg] z-30"></div>
        
        <div className="flex justify-between items-start mb-6 border-b border-ink/20 pb-2">
          <h1 className="font-barcode text-xl tracking-tight uppercase">WYELL</h1>
          <span className="font-mono text-[10px] bg-ink text-white px-2 py-1 tracking-widest">ID N° WG'26</span>
        </div>
        
        <div className="flex gap-6">
          <div className="w-32 h-40 bg-paper border-2 border-ink relative overflow-hidden group">
            <img 
              src="/images/profile.jpg" 
              alt="Wyell Garay" 
              className="w-full h-full object-cover contrast-125 group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-safetyYellow opacity-0 group-hover:opacity-30 transition-opacity mix-blend-multiply pointer-events-none"></div>

          </div>
          
          <div className="flex-1 font-mono text-sm space-y-3">
            <div>
              <span className="text-[10px] text-inkLight uppercase block">Name</span>
              <span className="font-hand text-4xl leading-none block mt-1">Wyell Garay</span>
              <div className="h-px w-full bg-ink/20 mt-2"></div>
            </div>
            <div>
              <span className="text-[10px] text-inkLight uppercase block">Designation</span>
              <span className="font-bold text-base leading-tight block">Computer Engineering<br/>Student</span>
            </div>
            <div className="flex gap-4 pt-2">
              <a href="https://app.thestorygraph.com/profile/spiritlost" target="_blank" className="bg-white hover:text-white hover:bg-electricBlue border border-ink/20 px-2 py-1 text-[10px] uppercase">Bookworm</a>
              <a className="bg-white border border-ink/20 px-2 py-1 text-[10px] uppercase">Coder</a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-between items-end">
          <div className="font-mono text-6xl opacity-80">WYELL</div>
          <div className="text-right">
            <span className="text-[10px] uppercase block mb-1">Signature</span>
            <span className="font-hand text-2xl text-electricBlue">W. Garay</span>
          </div>
        </div>
      </div>

      {/* Socials & Intro Details */}
      <div className="flex flex-col gap-6 w-full max-w-md pt-4">
        <div className="bg-white p-6 border border-ink/10 shadow-sm relative">
          <div className="absolute -right-3 -top-3 bg-neonGreen text-ink font-bold text-xs uppercase px-3 py-1 rotate-[10deg] shadow-sm border border-ink">Online</div>
          <p className="text-inkLight leading-relaxed">
            <span className='text-brightRed'>Full-stack developer</span> and <span className='text-electricBlue'>Computer Engineering</span> undergrad at Batangas State University. 
            I build robust and functional systems by day, and decorate my Stardew Valley farm by night.
          </p>
        </div>

        <div className="flex flex-col items-start gap-4 mt-2">
          <a href="https://github.com/wyllg" target="_blank" className="dymo-tape font-mono text-sm rotate-[-1deg] hover:rotate-[1deg] hover:scale-105 transition-all">GITHUB: WYLLG</a>
          <a href="mailto:garaywyell@gmail.com" target="_blank"  className="dymo-tape font-mono text-sm rotate-[-2deg] hover:rotate-[2deg] hover:scale-105 transition-all">GARAYWYELL@GMAIL.COM</a>
          <a href="tel:09471097069" className="dymo-tape font-mono text-sm rotate-[2deg] hover:rotate-[-2deg] hover:scale-105 transition-all">TEL: 0947 109 7069</a>
          <a href="https://drive.google.com/file/d/1ttIK8qAB45VwaGpR8OLNNXn9U-_NfD6J/view" target="_blank" className="dymo-tape !flex !flex-row items-center gap-2 font-mono text-sm rotate-[-1deg] hover:rotate-[1deg] hover:scale-105 transition-all"><Download size={15} />DOWNLOAD RESUME</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;