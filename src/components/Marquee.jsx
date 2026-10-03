import { stack } from '../data.js'

export default function Marquee() {
  const items = [...stack, ...stack]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {items.map((s, i) => (
          <span key={i}>
            {s} <b>✦</b>
          </span>
        ))}
      </div>
    </div>
  )
}
