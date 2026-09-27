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
        <span key={`${w}-${i}`} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className={`inline-block ${accentFrom >= 0 && i >= accentFrom ? 'grad-text' : ''}`}
            initial={{ y: '110%', rotate: 2 }}
            animate={{ y: '0%', rotate: 0 }}
            transition={{ duration: 0.75, delay: delay + i * 0.055, ease: EASE }}
          >
            {w}
            {i < words.length - 1 && '\u00A0'}
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
    <section id={id} aria-labelledby={`${id}-t`} className={`py-20 sm:py-28 lg:py-36 ${className}`}>
      <div className="shell">
        <Reveal className="mb-12 max-w-3xl sm:mb-16">
          {label && <p className="eyebrow mb-4">{label}</p>}
          <h2 id={`${id}-t`} className="text-[clamp(1.95rem,5.2vw,3.4rem)] font-bold">{title}</h2>
          {lead && <p className="mt-5 max-w-[62ch] text-[clamp(0.975rem,1.6vw,1.075rem)] text-slate">{lead}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  )
}

export function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-white/[0.02] px-3.5 py-1.5 text-[13px] text-slate transition-colors duration-300 hover:border-violet-accent/50 hover:text-ink">
      {children}
    </span>
  )
}
