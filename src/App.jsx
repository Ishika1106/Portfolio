import Progress from './components/Progress.jsx'
import Cursor from './components/Cursor.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Services from './components/Services.jsx'
import Experience from './components/Experience.jsx'
import Faqs from './components/Faqs.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Progress />
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Services />
        <Experience />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
