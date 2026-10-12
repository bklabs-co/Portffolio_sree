import { useRef, useState } from 'react'
import { ArrowUpRight, RotateCcw } from 'lucide-react'
import Tilt from './Tilt'
import { useMediaViewer } from './MediaViewer'

export default function ProjectCard({ project, index = 0 }) {
  const [pinned, setPinned] = useState(false)
  const [hovered, setHovered] = useState(false)
  const flipped = pinned || hovered
  const open = useMediaViewer()
  const frontButton = useRef(null)
  const viewButton = useRef(null)
  const showDetails = () => {
    setPinned(true)
    requestAnimationFrame(() => viewButton.current?.focus({ preventScroll: true }))
  }
  const showArtwork = () => {
    setPinned(false)
    setHovered(false)
    requestAnimationFrame(() => frontButton.current?.focus({ preventScroll: true }))
  }
  return <article className={`project-card ${flipped ? 'is-flipped' : ''}`}
    onPointerEnter={event => { if (event.pointerType === 'mouse') setHovered(true) }}
    onPointerLeave={() => setHovered(false)}>
    <Tilt className="project-tilt" intensity={3}>
      <div className="flip-inner">
        <div className="card-face card-front" aria-hidden={flipped} {...(flipped ? { inert: '' } : {})}>
          <img src={project.images[0].src} srcSet={project.images[0].srcSet} sizes="(max-width: 639px) 90vw, 50vw" alt={project.images[0].alt} loading="lazy" decoding="async" />
          <div className="card-front-copy"><span className="eyebrow">{project.category} - {String(index + 1).padStart(2, '0')}</span><h3>{project.title}</h3></div>
          <button ref={frontButton} type="button" className="card-flip-trigger" aria-label={`Show details for ${project.title}`} onClick={showDetails}><span className="card-hint">Explore <ArrowUpRight size={16}/></span></button>
        </div>
        <div className="card-face card-back" aria-hidden={!flipped} {...(!flipped ? { inert: '' } : {})} onFocusCapture={() => setPinned(true)}>
          <p className="eyebrow">Behind the work</p><h3>{project.title}</h3><p className="card-summary">{project.summary}</p>
          <div className="card-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
          <div className="card-back-actions"><button ref={viewButton} type="button" className="button button-accent" onClick={() => open(project)}>View project <ArrowUpRight size={17}/></button>
            <button type="button" className="icon-button" aria-label={`Back to artwork for ${project.title}`} onClick={showArtwork}><RotateCcw size={18}/></button></div>
        </div>
      </div>
    </Tilt>
  </article>
}
