import { motion } from 'framer-motion'
import { profile } from '../data.js'
import Reveal from './Reveal.jsx'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about">
        <Reveal className="about__photo">
          <motion.div
            className="about__frame"
            whileHover={{ rotate: -2, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <img src="/assets/ishika.jpg" alt="Ishika Dumeer" />
            <span className="sticker sticker--a">React</span>
            <span className="sticker sticker--b">Node.js</span>
            <span className="sticker sticker--c">MongoDB</span>
          </motion.div>
        </Reveal>

        <div>
          <Reveal>
            <p className="label">// about</p>
            <h2 className="h2">Technology should serve people.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lead">{profile.about}</p>
          </Reveal>
          <Reveal delay={0.2} className="about__chips">
            {['Clean architecture', 'AI for good', 'Responsive by default'].map((c) => (
              <span key={c} className="chip">{c}</span>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
