import { useRef } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const span = {
  wide: 'lg:col-span-7 aspect-[16/10] sm:aspect-[16/9]',
  tall: 'lg:col-span-5 aspect-[4/5]',
  regular: 'lg:col-span-6 aspect-[3/2]',
}

export default function ProjectCard({ project, index = 0 }) {
  const { title, summary, category, year, tags, image, size, grade } = project
  const reduce = useReducedMotion()
  const ref = useRef(null)

  // Subtle 3D tilt toward the cursor.
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const rotX = useSpring(useTransform(my, [0, 1], [6, -6]), { stiffness: 220, damping: 22 })
  const rotY = useSpring(useTransform(mx, [0, 1], [-7, 7]), { stiffness: 220, damping: 22 })

  const onMove = (e) => {
    if (reduce) return
    const r = ref.current.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    mx.set(px); my.set(py)
    ref.current.style.setProperty('--mx', `${px * 100}%`)
    ref.current.style.setProperty('--my', `${py * 100}%`)
  }
  const reset = () => { mx.set(0.5); my.set(0.5) }

  return (
    <motion.article
      layout
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      style={reduce ? {} : { rotateX: rotX, rotateY: rotY, transformPerspective: 1100 }}
      className={`card-sheen elevate group relative col-span-1 overflow-hidden rounded-xl2 border border-line bg-card ${span[size] || span.regular}`}
    >
      {image ? (
        <img src={image} alt={title} loading="lazy" decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.07]" />
      ) : (
        <div
          aria-hidden
          className="absolute inset-0 transition-transform duration-[1100ms] ease-out group-hover:scale-[1.07]"
          style={{ background: `linear-gradient(150deg, ${grade?.from || '#4f46e5'} 0%, ${grade?.to || '#150826'} 100%)` }}
        />
      )}
      {!image && (
        <div
          aria-hidden
          className="absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(255,255,255,0.09)_1px,transparent_1px)] [background-size:16px_16px]"
        />
      )}

      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-void via-void/60 to-transparent" />

      <div className="relative flex h-full flex-col justify-end p-6 sm:p-7">
        <div className="flex items-center gap-3 text-[12.5px] text-slate-dim">
          <span style={{ color: grade?.tint || '#c4b5fd' }}>{category}</span>
          <span aria-hidden className="h-px w-5 bg-line" />
          <span>{year}</span>
        </div>

        <h3 className="mt-2.5 font-display text-[clamp(1.25rem,2.4vw,1.65rem)] font-semibold transition-transform duration-500 group-hover:-translate-y-1">
          {title}
        </h3>
        <p className="mt-2 max-w-[48ch] text-[14px] leading-relaxed text-slate transition-transform duration-500 group-hover:-translate-y-1">
          {summary}
        </p>

        <div className="mt-5 flex items-center justify-between gap-4">
          <ul className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <li key={t} className="rounded-md border border-line bg-black/25 px-2.5 py-1 text-[12px] text-slate">{t}</li>
            ))}
          </ul>
          <span className="grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-full border border-line text-slate transition-all duration-500 group-hover:border-violet-accent group-hover:bg-violet-accent/15 group-hover:text-ink">
            <ArrowUpRight size={17} className="transition-transform duration-500 group-hover:translate-x-4 group-hover:-translate-y-4" />
            <ArrowUpRight size={17} className="absolute -translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0" />
          </span>
        </div>
      </div>
    </motion.article>
  )
}
