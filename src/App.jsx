import { MotionConfig } from 'framer-motion'
import { ScrollProgress } from './components/Chrome'
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
import CreativeShowcase from './components/CreativeShowcase'
import VideoShowcase from './components/VideoShowcase'
import BrandShowcase from './components/BrandShowcase'
import { MediaProvider } from './components/MediaViewer'

export default function App() {
  return (
    <MotionConfig reducedMotion="user"><MediaProvider>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-raised focus:px-4 focus:py-3">
        Skip to content
      </a>
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Work />
        <CreativeShowcase />
        <VideoShowcase />
        <BrandShowcase />
        <Services />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </MediaProvider></MotionConfig>
  )
}
