import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'

/** Thin gradient progress bar pinned to the top of the viewport. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 220, damping: 34, restDelta: 0.001 })
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[55] h-[2px] origin-left grad-btn"
    />
  )
}

/** Soft accent glow that trails the cursor. Pointer-fine devices only. */
export function CursorGlow() {
  const reduce = useReducedMotion()
  const [pos, setPos] = useState({ x: -400, y: -400 })
  const [fine, setFine] = useState(false)

  useEffect(() => {
    setFine(window.matchMedia('(pointer: fine)').matches)
  }, [])

  useEffect(() => {
    if (!fine || reduce) return
    let frame = 0
    const onMove = (e) => {
      if (frame) return
      frame = requestAnimationFrame(() => { setPos({ x: e.clientX, y: e.clientY }); frame = 0 })
    }
    window.addEventListener('pointermove', onMove)
    return () => { window.removeEventListener('pointermove', onMove); cancelAnimationFrame(frame) }
  }, [fine, reduce])

  if (!fine || reduce) return null
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-[5] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 blur-[70px] transition-transform duration-[450ms] ease-out"
      style={{
        left: 0, top: 0,
        transform: `translate3d(${pos.x - 210}px, ${pos.y - 210}px, 0)`,
        background: 'radial-gradient(circle, rgba(99,102,241,0.16), transparent 62%)',
      }}
    />
  )
}

/** One-time page-load curtain: name wipes in, panel lifts away. */
export function Intro() {
  const reduce = useReducedMotion()
  const [done, setDone] = useState(reduce)

  useEffect(() => {
    if (reduce) return
    const t = setTimeout(() => setDone(true), 1500)
    return () => clearTimeout(t)
  }, [reduce])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          aria-hidden
          className="fixed inset-0 z-[70] grid place-items-center bg-void"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="overflow-hidden">
            <motion.span
              className="block font-display text-[clamp(1.6rem,6vw,3rem)] font-extrabold tracking-tight"
              initial={{ y: '110%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              Sree <span className="grad-text">Ruban</span>
            </motion.span>
          </div>
          <motion.div
            className="mt-6 h-px w-40 origin-left grad-btn"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
