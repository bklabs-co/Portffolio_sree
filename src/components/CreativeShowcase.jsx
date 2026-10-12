import { useRef } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight, Maximize2 } from 'lucide-react'
import { Section, Reveal } from './Primitives'
import { visualCollections } from '../data/portfolio'
import { useMediaViewer } from './MediaViewer'

export default function CreativeShowcase() {
  const open = useMediaViewer()
  const rail = useRef(null)
  const product = visualCollections[0]
  const food = visualCollections[2]
  const campaigns = visualCollections[3]
  const shift = direction => rail.current.scrollBy({ left: rail.current.clientWidth * 0.8 * direction, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })
  return <Section id="visuals" label="03 - Image editing & graphic design" title={<>Visuals that<br/><span className="accent-text">hold your attention.</span></>} lead="A little colour. A lot of intention. Product compositions and campaign creatives, presented in their original form." className="creative-section">
    <div className="visual-editorial"><Reveal className="visual-large"><button type="button" onClick={() => open(product)} aria-label="Preview skincare product composition"><img src={product.images[0].src} srcSet={product.images[0].srcSet} sizes="(max-width: 639px) 90vw, 50vw" alt={product.images[0].alt} loading="lazy" decoding="async"/><span className="preview-corner"><Maximize2 size={19}/></span></button></Reveal>
      <Reveal className="visual-side" delay={0.1}><p className="eyebrow">Product - Composition - Colour</p><h3>A different<br/>kind of <em>glow.</em></h3><p>{product.summary}</p><button type="button" className="text-link" onClick={() => open(product)}>View the compositions <ArrowUpRight size={17}/></button><button type="button" className="visual-secondary" onClick={() => open(product, 1)} aria-label="Preview botanical product composition"><img src={product.images[1].src} srcSet={product.images[1].srcSet} sizes="(max-width: 639px) 90vw, 50vw" alt={product.images[1].alt} loading="lazy" decoding="async"/></button></Reveal>
    </div>
    <Reveal className="rail-heading"><div><p className="eyebrow">The creative collection</p><h3>Made to make you look.</h3></div><div className="rail-controls"><button type="button" className="icon-button" onClick={() => shift(-1)} aria-label="Scroll creative collection left"><ArrowLeft size={18}/></button><button type="button" className="icon-button" onClick={() => shift(1)} aria-label="Scroll creative collection right"><ArrowRight size={18}/></button></div></Reveal>
    <div ref={rail} className="creative-rail" role="region" aria-label="Food and beverage creative previews" tabIndex={0}>{[0, 3, 4, 10, 16, 19].map((i, position) => <button type="button" key={food.images[i].src} className="creative-rail-item" onClick={() => open(food, i)} aria-label={`Preview ${food.images[i].alt}`}><img src={food.images[i].src} srcSet={food.images[i].srcSet} sizes="(max-width: 639px) 90vw, 50vw" alt={food.images[i].alt} loading="lazy" decoding="async"/><span>{String(position + 1).padStart(2, '0')} - Campaign creative <ArrowUpRight size={16}/></span></button>)}</div>
    <div className="collection-links"><button type="button" className="text-link" onClick={() => open(food)}>View all {food.images.length} food & beverage creatives <ArrowUpRight size={17}/></button><button type="button" className="text-link" onClick={() => open(campaigns)}>Explore automotive, agriculture & more <ArrowUpRight size={17}/></button></div>
  </Section>
}
