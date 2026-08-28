import { useEffect } from 'react'
import type { RefObject } from 'react'

const SENSITIVITY = 0.8

export function useVideoScrub(videoRef: RefObject<HTMLVideoElement | null>) {
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let prevX: number | null = null
    let targetTime = 0
    let seeking = false

    const seekTo = (time: number) => {
      seeking = true
      video.currentTime = time
    }

    const handleSeeked = () => {
      seeking = false
      if (targetTime !== video.currentTime) {
        seekTo(targetTime)
      }
    }

    const handleMouseMove = (event: MouseEvent) => {
      const duration = video.duration
      if (!duration || Number.isNaN(duration)) return

      const currentX = event.clientX
      if (prevX === null) {
        prevX = currentX
        return
      }

      const delta = currentX - prevX
      prevX = currentX

      const offset = (delta / window.innerWidth) * SENSITIVITY * duration
      targetTime = Math.min(Math.max(targetTime + offset, 0), duration)

      if (!seeking) {
        seekTo(targetTime)
      }
    }

    video.addEventListener('seeked', handleSeeked)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      video.removeEventListener('seeked', handleSeeked)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [videoRef])
}
