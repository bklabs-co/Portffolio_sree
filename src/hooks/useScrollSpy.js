import { useEffect, useState } from 'react'

export function useScrollSpy(ids, offset = 130) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const onScroll = () => {
      let current = ids[0]
      let closest = -Infinity
      for (const id of ids) {
        const el = document.getElementById(id)
        const top = el?.getBoundingClientRect().top
        if (top <= offset && top > closest) { current = id; closest = top }
      }
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 3) current = ids[ids.length - 1]
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [ids, offset])
  return active
}

export function useScrolled(threshold = 24) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])
  return scrolled
}
