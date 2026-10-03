import { useEffect, useState } from 'react'

const links = [
  ['About', '#about'],
  ['Projects', '#projects'],
  ['Services', '#services'],
  ['Contact', '#contact'],
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className={`nav ${scrolled || open ? 'nav--solid' : ''}`}>
      <a href="#top" className="nav__logo" onClick={() => setOpen(false)}>
        <span className="nav__prompt">&gt;_</span> ishika
      </a>
      <nav className="nav__links">
        {links.map(([label, href]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </nav>
      <a href="#contact" className="btn btn--dark btn--sm nav__cta">
        Start a project
      </a>
      <button
        className={`burger ${open ? 'is-open' : ''}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <span /><span />
      </button>

      <div className={`drawer ${open ? 'is-open' : ''}`}>
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </div>
    </header>
  )
}
