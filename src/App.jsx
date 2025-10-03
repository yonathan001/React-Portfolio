import React from 'react';
import './index.css';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Testimonials />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}

export default React.memo(App);
