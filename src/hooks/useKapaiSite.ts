import { useEffect } from 'react'

const REVEAL_SEL = '.reveal, .reveal-left, .reveal-right'

/**
 * Scroll UX: navbar blur, back-to-top, scroll reveals, hero parallax,
 * cinematic band parallax, active nav highlight by section.
 */
export function useKapaiSite() {
  /* Scroll reveal */
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible')
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    document.querySelectorAll(REVEAL_SEL).forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  /* Navbar + back-to-top */
  useEffect(() => {
    const nav = document.getElementById('navbar')
    const backTop = document.getElementById('back-top')
    const onScroll = () => {
      const y = window.scrollY
      nav?.classList.toggle('scrolled', y > 60)
      backTop?.classList.toggle('show', y > 400)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Hero background parallax */
  useEffect(() => {
    const onScroll = () => {
      const heroBg = document.querySelector<HTMLElement>('.hero-bg-img')
      if (!heroBg) return
      if (window.scrollY < window.innerHeight) {
        heroBg.style.transform = `scale(1) translateY(${window.scrollY * 0.35}px)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Cinematic band parallax */
  useEffect(() => {
    const wrap = document.querySelector('.cinematic-break')
    const img = wrap?.querySelector<HTMLElement>('img')
    if (!wrap || !img) return

    const onScroll = () => {
      const rect = wrap.getBoundingClientRect()
      const offset =
        (window.innerHeight / 2 - rect.top - rect.height / 2) * 0.25
      img.style.transform = `translateY(${offset}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Active nav link by section */
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('section[id]')
    const navLinks = document.querySelectorAll<HTMLAnchorElement>('.nav-links a')
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const id = entry.target.id
          navLinks.forEach((link) => {
            const href = link.getAttribute('href')
            link.classList.toggle('is-active', href === `#${id}`)
          })
        })
      },
      { threshold: 0.45 },
    )
    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [])
}
