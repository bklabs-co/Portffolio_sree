import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Asterisk } from 'lucide-react'
import { profile } from '../data/site'
import { heroArt, interfaceProjects, visualCollections } from '../data/portfolio'
import { Magnetic, SplitText } from './Primitives'
import Tilt from './Tilt'
import { useMediaViewer } from './MediaViewer'

export default function Hero() {
  const reduce = useReducedMotion()
  const open = useMediaViewer()
  const entrance = delay => ({ initial: reduce ? false : { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] } })
  return <section id="home" className="hero" aria-labelledby="hero-title">
    <div className="shell">
      <motion.div {...entrance(0.05)} className="hero-topline"><p className="eyebrow"><span className="status-dot"/> {profile.availability}</p><span className="hero-edition">DESIGN - CODE - MOTION</span></motion.div>
      <div className="hero-layout">
        <div className="hero-copy">
          <motion.p {...entrance(0.1)} className="hero-introduction">Hello, I'm {profile.name} <span aria-hidden>↗</span></motion.p>
          <h1 id="hero-title">{profile.headline.map((line, i) => <SplitText key={line} text={line} className={`hero-line ${i === 2 ? 'accent-text' : ''}`} delay={0.15 + i * 0.13}/>)}</h1>
          <motion.p {...entrance(0.6)} className="hero-description">{profile.intro}</motion.p>
          <motion.div {...entrance(0.7)} className="hero-actions"><Magnetic strength={0.15}><a className="button button-accent" href="#work">Explore my work <ArrowUpRight size={19}/></a></Magnetic><a className="button button-outline" href="#experience">View experience</a></motion.div>
        </div>
        <motion.div {...entrance(0.35)} className="hero-art">
          <div className="art-orbit" aria-hidden/><span className="art-coordinate" aria-hidden>VISUAL EXPLORATIONS — 01</span>
          <Tilt className="art-stage" intensity={4}>
            <button type="button" className="art-piece art-product" aria-label="View product image editing work" onClick={() => open(visualCollections[0])}><img src={heroArt.product.src} srcSet={heroArt.product.srcSet} sizes="(max-width: 639px) 90vw, 50vw" alt={heroArt.product.alt} fetchpriority="high" decoding="async"/><span>Image - Composition</span></button>
            <button type="button" className="art-piece art-watch" aria-label="View watch campaign" onClick={() => open(visualCollections[1])}><img src={heroArt.watch.src} srcSet={heroArt.watch.srcSet} sizes="(max-width: 639px) 90vw, 50vw" alt={heroArt.watch.alt} decoding="async"/></button>
            <button type="button" className="art-piece art-interface" aria-label="View Apex interface design" onClick={() => open(interfaceProjects[0])}><div className="mini-browser" aria-hidden><i/><i/><i/><span>apex - interface study</span></div><img src={heroArt.interface.src} srcSet={heroArt.interface.srcSet} sizes="(max-width: 639px) 90vw, 50vw" alt={heroArt.interface.alt} decoding="async"/></button>
          </Tilt>
          <div className="art-stamp" aria-hidden><Asterisk size={32}/><span>Ideas into<br/>experiences.</span></div>
        </motion.div>
      </div>
      <motion.div {...entrance(0.8)} className="hero-bottom"><a href="#work" className="text-link"><ArrowDown size={16}/> Scroll to explore</a><p>Based in <span>Coimbatore, India</span></p><span className="hero-disciplines">Visual design · Video · Digital experiences</span></motion.div>
    </div>
  </section>
}
