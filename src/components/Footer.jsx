import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { profile } from '../data.js'

const subject = encodeURIComponent('Project inquiry from your portfolio')
const body = encodeURIComponent("Hi Ishika,\n\nI'd like to talk about a project.\n\nAbout the project:\nTimeline:\n\nThanks!")

export default function Footer() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
    } catch {
      return
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <footer id="contact" className="footer">
      <div className="container">
        <p className="label label--light">// contact</p>
        <h2 className="footer__title">
          Let's build<br />
          something <mark>together.</mark>
        </h2>

        <div className="footer__actions">
          <motion.a
            href={`mailto:${profile.email}?subject=${subject}&body=${body}`}
            className="btn btn--lime btn--lg"
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Start a project →
          </motion.a>
          <button className="btn btn--outline-light btn--lg" onClick={copy}>
            {copied ? 'Copied ✓' : 'Copy email'}
          </button>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn--outline-light btn--lg">
            LinkedIn ↗
          </a>
        </div>

        <AnimatePresence>
          {copied && (
            <motion.div
              className="toast"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
            >
              Email copied to clipboard
            </motion.div>
          )}
        </AnimatePresence>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <nav>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#services">Services</a>
            <a href="#faqs">FAQs</a>
          </nav>
          <nav>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
