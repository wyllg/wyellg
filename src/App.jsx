import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from '@/sections/Hero';
import Projects from '@/sections/Projects';
import Skills from '@/sections/Skills';
import Background from '@/sections/Background';
import Appendix from '@/sections/Appendix';
import Nexus from './pages/Nexus';

// Extract the main portfolio layout into a Home component
const Home = () => (
  <main className="max-w-5xl mx-auto px-6 py-12 md:py-24 flex flex-col gap-20 relative z-10">
    <Hero />
    <div className="w-full border-b-2 border-dashed border-ink/20"></div>
    
    <Projects />
    <div className="w-full border-b-2 border-dashed border-ink/20"></div>
    
    <Skills />
    <div className="w-full border-b-2 border-dashed border-ink/20"></div>
    
    <Background />
    
    <Appendix />
  </main>
);

function App() {
  return (
    <Router>
      {/* Global wrapper retains your exact styling, grid pattern, and selection colors */}
      <div className="bg-paper bg-grid-pattern text-ink font-sans antialiased overflow-x-hidden min-h-screen selection:bg-electricBlue selection:text-white pb-32">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nexus" element={<Nexus />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;