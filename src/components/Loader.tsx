type Props = { hidden: boolean }

export function Loader({ hidden }: Props) {
  return (
    <div id="loader" className={hidden ? 'hide' : ''} aria-hidden={hidden}>
      <div className="loader-logo">KAPAI</div>
      <div className="loader-bar">
        <div className="loader-bar-fill" />
      </div>
      <div className="loader-tagline">Coffee House & Bistro · Kanpur</div>
    </div>
  )
}
