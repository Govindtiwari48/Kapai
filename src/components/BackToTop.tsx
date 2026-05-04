export function BackToTop() {
  return (
    <button
      type="button"
      id="back-top"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <svg viewBox="0 0 24 24" aria-hidden>
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  )
}
