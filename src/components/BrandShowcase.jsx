import { ArrowUpRight } from 'lucide-react'
import { Section, Reveal } from './Primitives'
import { brandProjects } from '../data/portfolio'
import { useMediaViewer } from './MediaViewer'
import Tilt from './Tilt'
export default function BrandShowcase() {
  const open = useMediaViewer()
  return <Section id="branding" label="05 - Logo & identity" title={<>Small marks.<br/><span className="accent-text">Lasting impressions.</span></>} lead="Identity work that carries a clear idea, from the first mark to its real-world applications.">
    <div className="brand-layout">{brandProjects.map((project, i) => <Reveal key={project.id} delay={i * 0.1} className="brand-project"><Tilt intensity={3}><button type="button" className="brand-mark" aria-label={`View ${project.title}`} onClick={() => open(project)}><img src={project.images[0].src} srcSet={project.images[0].srcSet} sizes="(max-width: 639px) 90vw, 50vw" alt={project.images[0].alt} loading="lazy" decoding="async"/><span className="brand-mark-index">Identity - {String(i + 1).padStart(2, '0')}</span><ArrowUpRight className="brand-mark-arrow" size={22}/></button></Tilt>
      <div className="brand-caption"><h3>{project.title}</h3><p>{project.summary}</p><button type="button" className="text-link" onClick={() => open(project, 1)}>See the applications <ArrowUpRight size={16}/></button></div>
      {i === 0 && <button type="button" className="brand-application" onClick={() => open(project, 1)} aria-label="View agricultural brand mug mockup"><img src={project.images[1].src} srcSet={project.images[1].srcSet} sizes="(max-width: 639px) 90vw, 50vw" alt={project.images[1].alt} loading="lazy" decoding="async"/></button>}
    </Reveal>)}</div>
  </Section>
}
