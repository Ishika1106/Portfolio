import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data.js'

const lines = [
  '$ npm run build:ideas',
  '> compiling creativity...',
  '> shipping to production ✓',
]

function Terminal() {
  const [count, setCount] = useState(0)
  const full = lines.join('\n')

  useEffect(() => {
    if (count >= full.length) return
    const t = setTimeout(() => setCount((c) => c + 1), 38)
    return () => clearTimeout(t)
  }, [count, full.length])

  return (
    <div className="terminal">
      <div className="terminal__bar">
        <i style={{ background: '#fd5d5c' }} />
        <i style={{ background: '#fac900' }} />
        <i style={{ background: '#34c75a' }} />
        <span>ishika.sh</span>
      </div>
      <pre>
        {full.slice(0, count)}
        <span className="caret" />
      </pre>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__grid" aria-hidden="true" />
      <motion.span
        className="blob blob--lime"
        animate={{ y: [0, -24, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.span
        className="blob blob--lav"
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container hero__inner">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="dot" /> Available for work
        </motion.p>

        <h1 className="hero__title">
          {profile.headline.map((line, i) => (
            <span key={line} className="hero__line">
              <motion.span
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 + i * 0.12, ease: [0.2, 0.8, 0.2, 1] }}
              >
                {i === 1 ? <mark>{line}</mark> : line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          className="hero__bottom"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div>
            <p className="hero__tag">{profile.tagline}</p>
            <p className="hero__intro">{profile.intro}</p>
            <div className="hero__cta">
              <a href="#projects" className="btn btn--dark">See my work →</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn--ghost">Let's chat on LinkedIn ↗</a>
            </div>
          </div>
          <Terminal />
        </motion.div>
      </div>
    </section>
  )
}
