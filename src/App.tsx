import { useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { useVideoScrub } from './hooks/useVideoScrub'

const VIDEO_SRC =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260826_041744_63efcd78-bf7d-4039-99e2-2461e8a61903.mp4'

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
