import { useEffect, useState } from 'react'
import { BackToTop } from './components/BackToTop'
import { HeroSection } from './components/HeroSection'
import { Loader } from './components/Loader'
import { MainSections } from './components/MainSections'
import { MarqueeStrip } from './components/MarqueeStrip'
import { MobileMenu } from './components/MobileMenu'
import { NavBar } from './components/NavBar'
import { useKapaiSite } from './hooks/useKapaiSite'

export default function App() {
  const [loaderHidden, setLoaderHidden] = useState(false)
  const [heroLoaded, setHeroLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const t = window.setTimeout(() => {
      setLoaderHidden(true)
      setHeroLoaded(true)
    }, 2400)
    return () => clearTimeout(t)
  }, [])

  useKapaiSite()

  return (
    <>
      <Loader hidden={loaderHidden} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <NavBar onOpenMenu={() => setMenuOpen(true)} />
      <HeroSection loaded={heroLoaded} />
      <MarqueeStrip />
      <MainSections />
      <BackToTop />
    </>
  )
}
