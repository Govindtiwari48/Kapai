import type { KapaiTheme } from '../hooks/useKapaiTheme'
import { publicImg } from '../paths'
import { OptimizedImage } from './OptimizedImage'

type Props = {
  onOpenMenu: () => void
  theme: KapaiTheme
  onToggleTheme: () => void
}

export function NavBar({ onOpenMenu, theme, onToggleTheme }: Props) {
  return (
    <nav id="navbar">
      <button
        type="button"
        className="nav-logo"
        onClick={onToggleTheme}
        aria-label={
          theme === 'dark'
            ? 'Switch to light theme'
            : 'Switch to dark theme'
        }
        title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
      >
        <OptimizedImage
          src={publicImg('kapai logo.jpg')}
          alt=""
          className="nav-logo-img"
        />
        <span className="nav-logo-text">
          <span className="nav-logo-title">KAPAI</span>
          <span className="nav-logo-sub">Coffee House & Bistro</span>
        </span>
      </button>
      <ul className="nav-links">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#brews">Our Brews</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#vibe">The Vibe</a>
        </li>
        <li>
          <a href="#founder">Our Story</a>
        </li>
      </ul>
      <a href="#order" className="nav-cta">
        Order Now
      </a>
      <button
        type="button"
        className="nav-hamburger"
        id="hamburger"
        aria-label="Open menu"
        onClick={onOpenMenu}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  )
}
