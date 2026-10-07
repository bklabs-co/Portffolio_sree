import { useRef } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1]

/** Scroll-triggered entrance. Transform + opacity only. */
export function Reveal({ children, delay = 0, y = 26, className = '', as = 'div' }) {
  const reduce = useReducedMotion()
  const M = motion[as] || motion.div
  return (
    <M
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.65, delay, ease: EASE }}
    >
      {children}
    </M>
  )
}

/** Staggered children container — pair with <Stagger.Item>. */
export function Stagger({ children, className = '', gap = 0.07, as = 'div' }) {
  const reduce = useReducedMotion()
  const M = motion[as] || motion.div
  return (
    <M
      className={className}
      initial={reduce ? false : 'hidden'}
      whileInView="show"
      viewport={{ once: true, margin: '-70px' }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap } } }}
    >
      {children}
    </M>
  )
}
Stagger.Item = function Item({ children, className = '', as = 'div', y = 22 }) {
  const M = motion[as] || motion.div
  return (
    <M
      className={className}
      variants={{ hidden: { opacity: 0, y }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } } }}
    >
      {children}
    </M>
  )
}

/** Headline that reveals word by word from below a mask. */
export function SplitText({ text, className = '', delay = 0, accentFrom = -1 }) {
  const reduce = useReducedMotion()
  const words = text.split(' ')
  if (reduce) return <span className={className}>{text}</span>
  return (
    <span className={className}>
      {words.map((w, i) => (
        <span key={`${w}-${i}`} className="inline-block overflow-hidden align-bottom" style={{ marginRight: i < words.length - 1 ? '0.18em' : undefined }}>
          <motion.span
            className={`inline-block ${accentFrom >= 0 && i >= accentFrom ? 'grad-text' : ''}`}
            initial={{ y: '110%', rotate: 2 }}
            animate={{ y: '0%', rotate: 0 }}
            transition={{ duration: 0.75, delay: delay + i * 0.055, ease: EASE }}
          >
            {w}
            {i < words.length - 1 && ' '}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

/** Button/element that leans toward the cursor. Desktop only, disabled for reduced motion. */
export function Magnetic({ children, strength = 0.3, className = '' }) {
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const x = useSpring(useMotionValue(0), { stiffness: 260, damping: 18 })
  const y = useSpring(useMotionValue(0), { stiffness: 260, damping: 18 })

  if (reduce) return <div className={className}>{children}</div>

  const onMove = (e) => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * strength)
    y.set((e.clientY - (r.top + r.height / 2)) * strength)
  }
  const reset = () => { x.set(0); y.set(0) }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x, y }}
      onMouseMove={onMove}
      onMouseLeave={reset}
    >
      {children}
    </motion.div>
  )
}

export function Section({ id, label, title, lead, children, className = '' }) {
  return (
    <section id={id} aria-labelledby={`${id}-t`} className={`section ${className}`}>
      <div className="shell">
        <Reveal className="section-heading">
          {label && <p className="eyebrow">{label}</p>}
          <h2 id={`${id}-t`}>{title}</h2>
          {lead && <p className="section-lead">{lead}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  )
}

export function Pill({ children }) {
  return (
    <span className="pill">
      {children}
    </span>
  )
}
