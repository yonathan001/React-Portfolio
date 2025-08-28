import React from 'react';
import './index.css'; // Ensure Tailwind styles are applied
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-background dark:bg-background-dark">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Testimonials />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;
