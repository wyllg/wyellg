import { Navbar } from "@/layout/Navbar"
import { Hero } from "@/sections/Hero"
import { About } from "@/sections/About"
import { Contact } from "@/sections/Contact"
import { Projects } from "@/sections/Projects"
import { Experience } from "@/sections/Experience"


function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      
      {/* BG */}
      <div className="absolute inset-0">
        <div class="uiverse-midnight-sky">
        <div class="sky-canvas">
          <div class="stars stars-1"></div>
          <div class="stars stars-2"></div>
          <div class="stars stars-3"></div>
          <div class="meteor m1"></div>
          <div class="meteor m2"></div>
          <div class="meteor m3"></div>
          {/* <div class="moon"></div> */}
        </div>
      </div>
      </div>

        <Navbar />
        <main>
          <Hero />
          <About />
          <Contact />
          <Projects />
          <Experience />
        </main>
    </div>
  );
}

export default App;
