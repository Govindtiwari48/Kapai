import type { KapaiTheme } from '../hooks/useKapaiTheme'
import { publicImg } from '../paths'
import { OptimizedImage } from './OptimizedImage'

type Props = { loaded: boolean; theme: KapaiTheme }

export function HeroSection({ loaded, theme }: Props) {
  const heroImg =
    theme === 'light'
      ? 'coffee with spoon.jpg'
      : 'sweet red coffe with flower.jpg'

  return (
    <section id="hero" className={loaded ? 'loaded' : undefined}>
      <div className="hero-bg">
        <OptimizedImage
          key={heroImg}
          src={publicImg(heroImg)}
          alt="Kapai signature coffee"
          className="hero-bg-img"
          priority
        />
      </div>
      <div className="hero-overlay" aria-hidden />
      <div className="hero-content">
        <p className="hero-eyebrow">Kanpur&apos;s Finest · Since Day One</p>
        <h1 className="hero-audience">
          Speciality in every cup{' '}
          <span className="hero-audience-sep" aria-hidden>
            ·
          </span>{' '}
          <span className="hero-audience-accent">Warmth</span> in every bite.
        </h1>
        <p className="hero-subtitle">
          Speciality Coffee House &amp; Bistro — Model Town, Kanpur
        </p>
        <div className="hero-actions">
          <a href="#brews" className="btn-primary">
            Explore Our Brews
          </a>
          <a href="#menu" className="btn-ghost">
            View Full Menu
          </a>
        </div>
      </div>
      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
