type Props = {
  open: boolean
  onClose: () => void
}

const links = [
  ['#about', 'About'],
  ['#brews', 'Our Brews'],
  ['#menu', 'Menu'],
  ['#vibe', 'The Vibe'],
  ['#founder', 'Our Story'],
  ['#order', 'Order Now'],
] as const

export function MobileMenu({ open, onClose }: Props) {
  return (
    <div
      className={`mobile-menu${open ? ' open' : ''}`}
      id="mobileMenu"
      role="dialog"
      aria-modal="true"
      aria-hidden={!open}
    >
      <button type="button" className="mobile-close" onClick={onClose}>
        ✕
      </button>
      {links.map(([href, label]) => (
        <a key={href} href={href} onClick={onClose}>
          {label}
        </a>
      ))}
    </div>
  )
}
