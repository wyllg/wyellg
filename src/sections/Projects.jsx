import React from 'react';

// 1. Define your projects here! 
// To add a new project, just add another object to this array.
const standardProjects = [
    {
    link: 'https://powercast.streamlit.app/',
    id: 'powercast',
    title: 'Powercast',
    image: '/images/powercast.png',
    stack: 'Python • Streamlit • Plotly',
    description: 'An interactive analytics tool utilizing Lagrange interpolation for electricity generation forecasting.',
    label: 'Forecasting Tool',
    rotationClass: 'hover:rotate-[-1deg]',
    extraClasses: '', // Pushes this item to the middle column on large screens
  },
  {
    link: 'https://github.com/wyllg/spartan-space',
    id: 'spartan-space',
    title: 'Spartan Space',
    image: '/images/spartanspace.png',
    stack: 'Python • Django • SQLite',
    description: 'Django-based management system featuring automated profile generation and task tracking.',
    label: 'Management System',
    rotationClass: 'hover:rotate-[1deg]',
    extraClasses: '',
  },
  {
    id: 'portfolio',
    title: 'Digital Portfolio',
    image: '/images/portfolio.png',
    stack: 'React • Tailwind • Vite',
    description: 'A high-performance, component-driven UI utilizing utility-first styling and CI/CD workflows.',
    label: 'Frontend UI',
    rotationClass: 'hover:rotate-[2deg]',
    extraClasses: 'lg:col-start-2',
  },
  {
    link: 'https://github.com/wyllg/oop_web',
    id: 'career-up',
    title: 'Career Up',
    image: '/images/careerup.png',
    stack: 'Java • Spring Boot • MySQL',
    description: 'A full-stack platform centralizing academic opportunities with role-based access control.',
    label: 'Academic Platform',
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
              target={project.link ? "_blank" : "_self"}
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