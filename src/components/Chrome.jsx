import { motion, useScroll, useSpring } from 'framer-motion'
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 220, damping: 34, restDelta: 0.001 })
  return <motion.div aria-hidden style={{ scaleX }} className="scroll-progress"/>
}
