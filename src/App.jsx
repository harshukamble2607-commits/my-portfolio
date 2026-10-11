import { About } from './components/About.jsx'
import { Contact } from './components/Contact.jsx'
import { Education } from './components/Education.jsx'
import { Experience } from './components/Experience.jsx'
import { Footer } from './components/Footer.jsx'
import { Hero } from './components/Hero.jsx'
import { Navbar } from './components/Navbar.jsx'
import { Projects } from './components/Projects.jsx'
import { ScrollProgress } from './components/ScrollProgress.jsx'
import { Skills } from './components/Skills.jsx'
import { useRevealObserver } from './hooks/useReveal.js'

export default function App() {
  useRevealObserver()

  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus:shadow-raised"
      >
        Skip to content
      </a>

      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
