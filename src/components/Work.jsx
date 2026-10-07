import { useState } from 'react'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { Reveal, Section, Stagger } from './Primitives'
import { interfaceProjects, visualCollections, brandProjects, portfolioProjects, portfolioCategories } from '../data/portfolio'
import { useMediaViewer } from './MediaViewer'
import ProjectCard from './ProjectCard'
import Tilt from './Tilt'

export default function Work() {
  const [filter, setFilter] = useState('All')
  const open = useMediaViewer()
  const featured = interfaceProjects[0]
  const visible = filter === 'All' ? portfolioProjects : portfolioProjects.filter(project => project.category === filter)
  return <Section id="work" label="02 / Selected work" title={<>Different mediums.<br/><span className="accent-text">Same attention to detail.</span></>} lead="A selection of interfaces, brand identities, visual campaigns and stories in motion.">
    <Reveal><button type="button" className="featured-project" onClick={() => open(featured)} aria-label="View Apex interface design">
      <div className="featured-copy"><span className="eyebrow">Featured / UI & digital experiences</span><h3>{featured.title}<span>Turning ideas<br/>into interfaces.</span></h3><p>{featured.summary}</p><span className="text-link">Explore the design <ArrowUpRight size={18}/></span><span className="featured-index" aria-hidden>01—05</span></div>
      <Tilt className="featured-image" intensity={2}><div className="browser-bar" aria-hidden><span/><span/><span/><small>Apex / Landing page</small><ArrowUpRight size={13}/></div><img src={featured.images[0].src} srcSet={featured.images[0].srcSet} sizes="(max-width: 639px) 90vw, 50vw" alt={featured.images[0].alt} loading="lazy" decoding="async"/></Tilt>
    </button></Reveal>
    <Reveal className="work-subheading"><h3>A closer look.</h3><p>Hover to turn. Tap to explore.</p></Reveal>
    <Stagger className="rotating-cards">{[visualCollections[1], interfaceProjects[1], brandProjects[0]].map((project, i) => <Stagger.Item key={project.id}><ProjectCard project={project} index={i}/></Stagger.Item>)}</Stagger>
    <div className="work-index">
      <Reveal className="work-subheading"><h3>The work index.</h3><span className="section-note">Find your perspective</span></Reveal>
      <div className="filter-list" role="group" aria-label="Filter portfolio by discipline">{portfolioCategories.map(category => <button key={category} type="button" aria-pressed={filter === category} onClick={() => setFilter(category)}>{category}<span>{category === 'All' ? portfolioProjects.length : portfolioProjects.filter(project => project.category === category).length}</span></button>)}</div>
      <p className="sr-only" role="status">{visible.length} projects shown for {filter}</p>
      <div className="project-index-list">{visible.map((project, i) => <button type="button" key={project.id} onClick={() => open(project)} className="project-index-row"><span className="index-number">{String(i + 1).padStart(2, '0')}</span><img src={project.images[0].thumbnail || project.images[0].src} alt="" loading="lazy" decoding="async"/><h4>{project.title}</h4><span className="index-category">{project.category}</span><ArrowRight size={21}/></button>)}</div>
    </div>
  </Section>
}
