import { CursorGlow, Intro, ScrollProgress } from './components/Chrome'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Services from './components/Services'
import Work from './components/Work'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-raised focus:px-4 focus:py-3">
        Skip to content
      </a>
      <Intro />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Work />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
