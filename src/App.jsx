import React from 'react'
import Navbar from "./components/Navbar.jsx";
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Technologies from './components/Technologies.jsx';
import './index.css';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      <div className='fixed top-0 -z-10 h-full w-full'>
      <div class="relative h-full w-full bg-slate-950">
        <div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]">
          </div>
        </div>
      </div>
      <div className='container mx-auto px-8'>
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;