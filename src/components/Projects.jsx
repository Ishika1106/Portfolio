import { useRef } from 'react'
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion'
import { projects } from '../data.js'
import Reveal from './Reveal.jsx'

// Each project is a full-width card that pins to the top and gets layered over
// by the next one as you scroll.
function Showcase({ p, index, total }) {
  const wrap = useRef(null)
  const frame = useRef(null)

  const { scrollYProgress } = useScroll({ target: wrap, offset: ['start start', 'end start'] })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92])
  const dim = useTransform(scrollYProgress, [0, 1], [0, 0.55])

  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 160, damping: 18 })
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 160, damping: 18 })

  const onMove = (e) => {
    const r = frame.current.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }
  const reset = () => { mx.set(0); my.set(0) }

  return (
    <div
      ref={wrap}
      className="show-wrap"
      style={{ '--accent': p.accent, '--i': index, zIndex: index + 1 }}
    >
      <motion.article className="show" style={{ scale }}>
        <motion.div className="show__dim" style={{ opacity: dim }} />
        <span className="show__glow" aria-hidden="true" />
        <span className="show__ghost" aria-hidden="true">0{index + 1}</span>

        <div className="show__info">
          <div className="show__meta">
            <span className="show__num">0{index + 1} / 0{total}</span>
            <span className="show__tag">{p.tag}</span>
            <span className="show__year">{p.year}</span>
          </div>
          <h3 className="show__title">{p.title}</h3>
          <p className="show__blurb">{p.blurb}</p>
          <ul className="show__stack">
            {p.stack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <div className="show__links">
            {p.live && (
              <a href={p.live} target="_blank" rel="noreferrer" className="show__btn">
                View live site <span>↗</span>
              </a>
            )}
            {p.code && (
              <a href={p.code} target="_blank" rel="noreferrer" className="show__btn show__btn--ghost">
                &lt;/&gt; Source code
              </a>
            )}
          </div>
        </div>

        <div className="show__visual" onMouseMove={onMove} onMouseLeave={reset} data-hover>
          <motion.div ref={frame} className="show__frame" style={{ rotateX: rx, rotateY: ry }}>
            <div className="show__bar">
              <i /><i /><i />
              <span>{p.live ? p.live.replace(/^https?:\/\//, '') : `${p.id}.local`}</span>
            </div>
            <div className="show__shot">
              <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" />
              <span className="show__shine" />
            </div>
          </motion.div>
          <span className="show__chip show__chip--a">{p.stack[0]}</span>
          <span className="show__chip show__chip--b">{p.stack[1]}</span>
        </div>
      </motion.article>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section section--dark projects">
      <div className="container">
        <Reveal>
          <p className="label label--light">// selected work</p>
          <h2 className="h2 h2--light">
            Things I've <mark>built</mark>.
          </h2>
          <p className="projects__sub">
            Four stories, from helping survivors speak up to helping farmers save a crop.
          </p>
        </Reveal>
        <div className="show-list">
          {projects.map((p, i) => (
            <Showcase key={p.id} p={p} index={i} total={projects.length} />
          ))}
        </div>
      </div>
    </section>
  )
}
