import { motion } from 'framer-motion'
import { services } from '../data.js'
import Reveal from './Reveal.jsx'

const colors = ['#e0fd72', '#e2dcfd', '#bbdafe', '#fedcdd', '#c7f8d9']

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <Reveal>
          <p className="label">// services</p>
          <h2 className="h2">What I can build with you.</h2>
        </Reveal>
        <div className="services">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.07}>
              <motion.div
                className="service"
                style={{ background: colors[i % colors.length] }}
                whileHover={{ y: -8, rotate: i % 2 ? 1.5 : -1.5 }}
                data-hover
              >
                <span className="service__icon">{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
