import { useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { useVideoScrub } from './hooks/useVideoScrub'

const VIDEO_SRC = '/hero_espartano.mp4'

function App() {
  const videoRef = useRef<HTMLVideoElement>(null)
  useVideoScrub(videoRef)

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
    </>
  )
}

export default App
