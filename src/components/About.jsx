import { ArrowUpRight } from 'lucide-react'
import { Reveal, Stagger, Pill } from './Primitives'
import { about, profile } from '../data/site'
import { portrait } from '../data/portfolio'
export default function About() {
  return <section id="about" aria-labelledby="about-t" className="section about-section">
    <div className="shell">
      <Reveal className="section-topline"><p className="eyebrow">01 / The person behind the pixels</p><span className="section-note">A little about me</span></Reveal>
      <div className="about-layout">
        <Reveal className="about-heading"><h2 id="about-t">One creative.<br/>Many <span className="accent-text">perspectives.</span></h2><div className="about-portrait"><img src={portrait.src} srcSet={portrait.srcSet} sizes="(max-width: 639px) 90vw, 50vw" alt={portrait.alt} loading="lazy" decoding="async"/><div><strong>{profile.name}</strong><span>Visual · Video · Motion</span><a className="text-link" href="#experience">{profile.years} years of experience <ArrowUpRight size={16}/></a></div></div></Reveal>
        <div className="about-story"><Stagger>{about.paragraphs.map((text, i) => <Stagger.Item as="p" key={text} className={i === 0 ? 'about-lead' : 'about-paragraph'}>{text}</Stagger.Item>)}</Stagger>
          <Stagger className="about-facts">{about.facts.map(fact => <Stagger.Item key={fact.label}><p className="eyebrow">{fact.label}</p><p>{fact.value}</p></Stagger.Item>)}</Stagger>
          <Reveal className="about-tools">{about.tools.map(tool => <Pill key={tool}>{tool}</Pill>)}</Reveal>
        </div>
      </div>
    </div>
  </section>
}
