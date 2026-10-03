import { motion, useScroll, useSpring } from 'framer-motion'

// Thin lime bar at the top that fills as you scroll down the page.
export default function Progress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 })
  return <motion.div className="progress" style={{ scaleX }} aria-hidden="true" />
}
