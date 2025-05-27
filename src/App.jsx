import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Certifications from './components/Certifications'

function App() {
  return (
    <div className="relative">
      <Header />
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
  )
}

export default App
