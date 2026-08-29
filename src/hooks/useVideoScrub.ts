import { useEffect } from 'react'
import type { RefObject } from 'react'

const SENSITIVITY = 0.8

export function useVideoScrub(videoRef: RefObject<HTMLVideoElement | null>) {
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // iOS Safari won't render any frame of an unplayed video, so force a
    // silent muted play/pause once metadata is ready to reveal the first frame.
    const revealFirstFrame = () => {
      video
        .play()
        .then(() => video.pause())
        .catch(() => {
          // Autoplay can be blocked in some contexts; harmless if so.
        })
    }
    video.addEventListener('loadedmetadata', revealFirstFrame)

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

    const moveBy = (currentX: number) => {
      const duration = video.duration
      if (!duration || Number.isNaN(duration)) return

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

    const handleMouseMove = (event: MouseEvent) => {
      moveBy(event.clientX)
    }

    const handleTouchStart = (event: TouchEvent) => {
      prevX = event.touches[0]?.clientX ?? null
    }

    const handleTouchMove = (event: TouchEvent) => {
      const touchX = event.touches[0]?.clientX
      if (touchX !== undefined) {
        moveBy(touchX)
      }
    }

    video.addEventListener('seeked', handleSeeked)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: true })

    return () => {
      video.removeEventListener('loadedmetadata', revealFirstFrame)
      video.removeEventListener('seeked', handleSeeked)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchmove', handleTouchMove)
    }
  }, [videoRef])
}
