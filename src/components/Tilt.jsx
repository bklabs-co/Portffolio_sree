import { useRef } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'

export default function Tilt({ children, className = '', intensity = 5 }) {
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(x, { stiffness: 230, damping: 26 })
  const rotateY = useSpring(y, { stiffness: 230, damping: 26 })
  const move = event => {
    if (reduce || event.pointerType !== 'mouse') return
    const rect = ref.current.getBoundingClientRect()
    x.set(-((event.clientY - rect.top) / rect.height - 0.5) * intensity * 2)
    y.set(((event.clientX - rect.left) / rect.width - 0.5) * intensity * 2)
  }
  const reset = () => { x.set(0); y.set(0) }
  return <motion.div ref={ref} className={className} onPointerMove={move} onPointerLeave={reset}
    style={reduce ? undefined : { rotateX, rotateY, transformPerspective: 1200 }}>{children}</motion.div>
}
