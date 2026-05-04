const items = [
  'Specialty Coffee',
  'All Day Breakfast',
  'Community Driven',
  '#Antisarkapai',
  'Good Vibes Only',
  "Kanpur's Premier",
  'Come for the Coffee',
  'Stay for the Vibe',
] as const

function Row({ uid }: { uid: string }) {
  return (
    <>
      {items.map((t, i) => (
        <span className="marquee-item" key={`${uid}-${i}`}>
          {t}
          <span className="marquee-dot" />
        </span>
      ))}
    </>
  )
}

export function MarqueeStrip() {
  return (
    <div className="marquee-wrap" aria-hidden>
      <div className="marquee-track">
        <Row uid="a" />
        <Row uid="b" />
      </div>
    </div>
  )
}
