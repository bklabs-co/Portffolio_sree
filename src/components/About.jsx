import { ArrowUpRight } from 'lucide-react'
import { Reveal, Stagger } from './Primitives'
import { about, profile } from '../data/site'
import { portrait } from '../data/portfolio'

const logos = import.meta.glob(['../assets/Portfolio Project Assets/Added/Premiere Pro.png', '../assets/Portfolio Project Assets/Added/After Effects logo.png', '../assets/Portfolio Project Assets/Added/Photoshop PNG.png', '../assets/Portfolio Project Assets/Added/Illustrator LOGO.png', '../assets/Portfolio Project Assets/Added/Figma.png', '../assets/Portfolio Project Assets/Added/Davinci Resolve.png'], { eager: true, query: '?url', import: 'default' })
const toolFiles = { 'Premiere Pro': 'Premiere Pro.png', 'After Effects': 'After Effects logo.png', Photoshop: 'Photoshop PNG.png', Illustrator: 'Illustrator LOGO.png', Figma: 'Figma.png', 'DaVinci Resolve': 'Davinci Resolve.png' }
const toolFocus = { 'Premiere Pro': 'Editing & storytelling', 'After Effects': 'Motion & compositing', Photoshop: 'Imagery & composition', Illustrator: 'Identity & illustration', Figma: 'Interfaces & prototypes', 'DaVinci Resolve': 'Colour & finishing' }

export default function About() {
  return <section id="about" aria-labelledby="about-t" className="section about-section">
    <div className="shell">
      <Reveal className="section-topline"><p className="eyebrow">01 / The person behind the pixels</p><span className="section-note">A little about me</span></Reveal>
      <div className="profile-layout">
        <div className="profile-copy">
          <Reveal><p className="eyebrow profile-identity">{profile.name} / Visual designer</p><h2 id="about-t">One creative.<br/>Many <span className="accent-text">perspectives.</span></h2></Reveal>
          <Stagger className="profile-story">{about.paragraphs.map((text, i) => <Stagger.Item as="p" key={text} className={i === 0 ? 'about-lead' : 'about-paragraph'}>{text}</Stagger.Item>)}</Stagger>
          <Stagger className="about-facts">{about.facts.map(fact => <Stagger.Item key={fact.label}><p className="eyebrow">{fact.label}</p><p>{fact.value}</p></Stagger.Item>)}</Stagger>
        </div>
        <Reveal className="profile-visual" delay={0.12}>
          <div className="portrait-frame"><div className="portrait-orbit" aria-hidden/><img src={portrait.src} srcSet={portrait.srcSet} sizes="(max-width: 639px) 80vw, 330px" alt={portrait.alt} loading="lazy" decoding="async" width="940" height="1672"/></div>
          <div className="portrait-caption"><strong>{profile.name}</strong><span>Visual · Video · Motion</span><a className="text-link" href="#experience">{profile.years} years of experience <ArrowUpRight size={16}/></a></div>
        </Reveal>
      </div>
      <Reveal className="tool-heading"><p className="eyebrow">My creative workspace</p><h3>The tools. The craft.</h3><p>From the first idea to the finishing touches.</p></Reveal>
      <Stagger className="software-grid">{about.tools.map(tool => <Stagger.Item key={tool} className="software-card"><img src={logos[`../assets/Portfolio Project Assets/Added/${toolFiles[tool]}`]} alt="" loading="lazy" decoding="async" width="56" height="56"/><h4>{tool}</h4><p>{toolFocus[tool]}</p></Stagger.Item>)}</Stagger>
    </div>
  </section>
}
