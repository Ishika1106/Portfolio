import { useEffect, useRef } from 'react'

// A small lime dot that trails the pointer and grows over links and buttons.
export default function Cursor() {
  const ref = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    const el = ref.current
    let x = 0, y = 0, cx = 0, cy = 0, raf
    const move = (e) => {
      x = e.clientX
      y = e.clientY
      el.classList.toggle('big', !!e.target.closest('a, button, summary, [data-hover]'))
    }
    const tick = () => {
      cx += (x - cx) * 0.18
      cy += (y - cy) * 0.18
      el.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`
      raf = requestAnimationFrame(tick)
    }
    window.addEventListener('mousemove', move)
    raf = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener('mousemove', move)
      cancelAnimationFrame(raf)
    }
  }, [])

  return <div ref={ref} className="cursor" aria-hidden="true" />
}
