import { useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SiteContent from './components/SiteContent'
import { useVideoScrub } from './hooks/useVideoScrub'
import { useSmoothScroll } from './hooks/useSmoothScroll'

const VIDEO_SRC = '/hero_espartano2.mp4'

function App() {
  const videoRef = useRef<HTMLVideoElement>(null)
  useVideoScrub(videoRef)
  useSmoothScroll()

  return (
    <>
      <video
        ref={videoRef}
        src={VIDEO_SRC}
        muted
        playsInline
        preload="auto"
        className="fixed inset-0 z-0 h-full w-full object-cover"
        style={{ objectPosition: '70% center' }}
      />
      <Navbar />
      <Hero />
      <SiteContent />
    </>
  )
}

export default App