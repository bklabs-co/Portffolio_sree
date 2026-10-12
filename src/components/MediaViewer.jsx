import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, ExternalLink, ZoomIn, ZoomOut } from 'lucide-react'
import Modal from './Modal'

const MediaContext = createContext(null)
export const useMediaViewer = () => useContext(MediaContext)
function Gallery({ project, startIndex, onClose }) {
  const [index, setIndex] = useState(startIndex)
  const [zoomed, setZoomed] = useState(false)
  const count = project.images.length
  const navigate = useCallback(direction => setIndex(i => (i + direction + count) % count), [count])
  useEffect(() => {
    if (project.video || count < 2) return
    const key = event => {
      if (event.target instanceof HTMLInputElement) return
      if (event.key === 'ArrowLeft') { event.preventDefault(); navigate(-1) }
      if (event.key === 'ArrowRight') { event.preventDefault(); navigate(1) }
    }
    window.addEventListener('keydown', key)
    return () => window.removeEventListener('keydown', key)
  }, [navigate, project.video, count])
  return <Modal onClose={onClose} labelId="preview-title" className={project.video ? 'video-modal' : ''}>
    <div className="viewer-heading"><p className="eyebrow">{project.category}</p><h2 id="preview-title">{project.title}</h2><p>{project.summary}</p></div>
    <div className={`viewer-media ${zoomed || project.images[index].aspect > 3 ? 'is-zoomed' : ''}`}>
      {project.video ? <video controls playsInline preload="metadata" poster={project.images[0].src} src={project.video} aria-label={project.title} />
        : <img src={project.images[index].src} alt={project.images[index].alt} decoding="async" />}
    </div>
    {!project.video && <div className="viewer-controls">
      <p aria-live="polite">{project.images[index].alt}<span>{String(index + 1).padStart(2, '0')} - {String(count).padStart(2, '0')}</span></p>
      {count > 1 && <div className="flex gap-2"><button type="button" className="icon-button" onClick={() => navigate(-1)} aria-label="Previous image"><ChevronLeft size={20}/></button><button type="button" className="icon-button" onClick={() => navigate(1)} aria-label="Next image"><ChevronRight size={20}/></button></div>}
      {project.images[index].aspect <= 3 && <button type="button" className="icon-button" aria-label={zoomed ? 'Fit image' : 'Zoom image'} aria-pressed={zoomed} onClick={() => setZoomed(value => !value)}>{zoomed ? <ZoomOut size={18}/> : <ZoomIn size={18}/>}</button>}
      <a className="text-link" href={project.images[index].original || project.images[index].src} target="_blank" rel="noreferrer">Original image <ExternalLink size={14} /></a>
    </div>}
    {count > 1 && !project.video && <div className="viewer-thumbnails" aria-label="Images in this collection">
      {project.images.map((img, i) => <button type="button" key={img.src} onClick={() => setIndex(i)} aria-label={`View image ${i + 1}: ${img.alt}`} aria-pressed={index === i}>
        <img src={img.thumbnail || img.src} alt="" loading="lazy" decoding="async" />
      </button>)}
    </div>}
  </Modal>
}
export function MediaProvider({ children }) {
  const [selection, setSelection] = useState(null)
  const open = useCallback((project, index = 0) => setSelection({ project, index }), [])
  return <MediaContext.Provider value={open}>{children}
    {selection && <Gallery key={selection.project.id} project={selection.project} startIndex={selection.index} onClose={() => setSelection(null)} />}
  </MediaContext.Provider>
}
