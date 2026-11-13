import React from 'react';

// 1. Define your projects here! 
// Updated to reflect your resume projects while keeping the aesthetic properties
const standardProjects = [
  {
    link: '/nexus',
    id: 'raspberry-pi-homelab',
    title: 'Raspberry Pi Homelab',
    image: '/images/rpi.jpg',
    stack: 'Raspberry Pi • Docker • Tailscale',
    description: 'Provisioned a self-hosted Linux server deploying containerized services and a mesh VPN[cite: 2].',
    label: 'Infrastructure',
    rotationClass: 'hover:rotate-[-1deg]',
    extraClasses: '', 
  },
  {
    link: 'https://github.com/wyllg/visionpark', 
    id: 'vision-park',
    title: 'Vision Park',
    image: '/images/visionpark.png', // Placeholder
    stack: 'Next.js • FastAPI • YOLOv8',
    description: 'Automated license plate recognition system with real-time tracking and a web dashboard[cite: 2].',
    label: 'Computer Vision',
    rotationClass: 'hover:rotate-[1deg]',
    extraClasses: '',
  },
  {
    link: 'https://powercast.streamlit.app/',
    id: 'powercast',
    title: 'Powercast',
    image: '/images/powercast.png',
    stack: 'Python • Streamlit • Plotly',
    description: 'An interactive analytics tool utilizing Lagrange interpolation for electricity generation forecasting[cite: 2].',
    label: 'Forecasting Tool',
    rotationClass: 'hover:rotate-[2deg]',
    extraClasses: '', // Removed the col-start class since you now have 4 projects that perfectly fill the grid
  },
  {
    link: 'https://github.com/wyllg/spartan-space',
    id: 'spartan-space',
    title: 'Spartan Space',
    image: '/images/spartanspace.png',
    stack: 'Python • Django • SQLite',
    description: 'Django-based management system featuring automated profile generation and task tracking[cite: 2].',
    label: 'Management System',
    rotationClass: 'hover:rotate-[-2deg]',
    extraClasses: '', 
  },
];

const Projects = () => {
  return (
    <section className='animate-fade-in animation-delay-200'>
      <div className="flex items-center gap-4 mb-8">
        <span className="bg-ink text-white font-mono text-xs px-2 py-1 uppercase tracking-widest">02 // Archives</span>
        <h2 className="font-bold text-3xl md:text-4xl">Selected Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* =========================================
            FEATURED THESIS (Unique Layout)
        ========================================= */}
        <div className="lg:col-span-2 bg-white p-6 shadow-md border border-ink/10 relative group hover:shadow-xl transition-shadow">
          <div className="w-full h-48 bg-paper border border-ink/5 mb-6 flex items-center justify-center relative overflow-hidden">
            <img 
              src="/images/taal.jpg" 
              alt="Taal Lake" 
              className="w-full h-full object-cover contrast-125 group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="absolute top-4 right-4 bg-brightRed text-white font-mono text-[10px] px-2 py-1 uppercase font-bold rotate-[5deg] z-10">WORK IN PROGRESS</div>
          <h3 className="font-bold text-2xl mb-2">Taal Lake Monitoring Network</h3>
          <p className="text-inkLight text-sm mb-6 max-w-xl">Ongoing research rehabilitating a web-based effluent flow forecasting and rain gauge monitoring system. Bridging hardware sensors with complex data forecasting.</p>
          <div className="flex flex-wrap gap-2 font-mono text-[10px] uppercase">
            <span className="border border-ink/20 rounded px-2 py-1">Hardware / IoT</span>
            <span className="border border-ink/20 rounded px-2 py-1">Data Forecasting</span>
          </div>
        </div>

        {/* =========================================
            STANDARD PROJECTS (Mapped from Array)
        ========================================= */}
        {standardProjects.map((project) => (
          <div 
            key={project.id} 
            className={`bg-white p-4 pb-14 shadow-md border border-ink/10 relative group transition-transform ${project.rotationClass} ${project.extraClasses}`}
          >
            <a
              href={project.link || '#'} 
              target={project.link && project.link !== '#' ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="w-full aspect-square bg-paper border border-ink/5 mb-4 relative overflow-hidden block cursor-pointer"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover contrast-125 group-hover:grayscale-0 transition-all duration-500"
              />
            </a>
            
            <div className="mb-3 text-center">
              <h3 className="font-serif text-xl font-bold text-ink leading-tight">{project.title}</h3>
              <span className="font-mono text-[10px] text-inkLight mt-1 block tracking-tight">{project.stack}</span>
            </div>
            
            <p className="text-xs text-inkLight leading-relaxed text-center px-2">{project.description}</p>
            
            <div className="absolute bottom-4 left-0 w-full text-center font-hand text-2xl text-ink pointer-events-none">
              {project.label}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Projects;