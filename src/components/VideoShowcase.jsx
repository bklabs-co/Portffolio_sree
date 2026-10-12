import { useState } from 'react'
import { ArrowUpRight, Play } from 'lucide-react'
import { Section, Reveal } from './Primitives'
import { videoProjects } from '../data/portfolio'
import { useMediaViewer } from './MediaViewer'

export default function VideoShowcase() {
  const [selected, setSelected] = useState(5)
  const open = useMediaViewer()
  const project = videoProjects[selected]
  return <Section id="films" label="04 - Video & motion" title={<>Stories, with<br/><span className="accent-text">a sense of movement.</span></>} lead="Editing, pacing and visual storytelling. Press play to step into the work." className="film-section">
    <Reveal className="cinema"><button type="button" className="cinema-screen" onClick={() => open(project)} aria-label={`Play ${project.title}`}>
      <img src={project.images[0].src} alt={project.images[0].alt} loading="lazy" decoding="async"/><span className="cinema-topline"><span><i/> {project.category}</span><span>{project.duration}</span></span><span className="play-button"><Play size={25} fill="currentColor"/><span>Play film</span></span><span className="cinema-title">{project.title}<ArrowUpRight size={24}/></span>
    </button><div className="film-strip" role="group" aria-label="Select a film">{videoProjects.map((film, i) => <button type="button" key={film.id} aria-pressed={selected === i} onClick={() => setSelected(i)}><img src={film.images[0].src} alt="" loading="lazy" decoding="async"/><span>{film.title}<small>{film.duration} - {film.category}</small></span></button>)}</div></Reveal>
  </Section>
}
