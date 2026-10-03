import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { faqs } from '../data.js'
import Reveal from './Reveal.jsx'

export default function Faqs() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faqs" className="section">
      <div className="container faq">
        <Reveal>
          <p className="label">// faqs</p>
          <h2 className="h2">Questions, answered.</h2>
        </Reveal>
        <div className="faq__list">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.05}>
              <button className="faq__q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                <span>{f.q}</span>
                <span className={`faq__plus ${open === i ? 'is-open' : ''}`}>+</span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.p
                    className="faq__a"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    {f.a}
                  </motion.p>
                )}
              </AnimatePresence>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
