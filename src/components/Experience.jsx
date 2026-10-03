import { experience } from '../data.js'
import { profile } from '../data.js'
import Reveal from './Reveal.jsx'

export default function Experience() {
  return (
    <section className="section section--yellow">
      <div className="container">
        <Reveal>
          <p className="label">// highlights</p>
          <h2 className="h2">Beyond the code.</h2>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn--dark btn--sm xp__more">
            More on LinkedIn ↗
          </a>
        </Reveal>
        <div className="xp">
          {experience.map((x, i) => (
            <Reveal key={x.title} delay={i * 0.1} className="xp__item">
              <div className="xp__stat">
                <b>{x.stat}</b>
                <small>{x.statLabel}</small>
              </div>
              <div>
                <h3>{x.title}</h3>
                <span className="xp__org">{x.org}</span>
                <p>{x.text}</p>
                {x.tags.length > 0 && (
                  <ul className="xp__tags">
                    {x.tags.map((t) => <li key={t}>{t}</li>)}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
