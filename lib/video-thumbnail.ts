/**
 * Generate a thumbnail image from a video file
 * @param videoUrl - URL or path to the video file
 * @param time - Time in seconds to capture the frame (default: 2)
 * @returns Promise resolving to a data URL of the thumbnail image
 */
export async function generateVideoThumbnail(
  videoUrl: string,
  time: number = 2
): Promise<string> {
  return new Promise((resolve, reject) => {
    const video = document.createElement("video")
    video.src = videoUrl
    video.crossOrigin = "anonymous"
    video.preload = "metadata"
    
    let timeoutId: NodeJS.Timeout
    
    const cleanup = () => {
      clearTimeout(timeoutId)
      video.pause()
      video.src = ""
      video.remove()
    }
    
    video.onloadedmetadata = () => {
      try {
        video.currentTime = Math.min(time, Math.max(0, video.duration - 1))
      } catch (error) {
        console.error("Error setting currentTime:", error)
      }
    }
    
    video.onseeked = () => {
      try {
        const canvas = document.createElement("canvas")
        canvas.width = video.videoWidth || 320
        canvas.height = video.videoHeight || 240
        
        const ctx = canvas.getContext("2d")
        if (!ctx) {
          reject(new Error("Could not get canvas context"))
          cleanup()
          return
        }
        
        ctx.drawImage(video, 0, 0)
        
        const thumbnail = canvas.toDataURL("image/jpeg", 0.8)
        cleanup()
        resolve(thumbnail)
      } catch (error) {
        cleanup()
        reject(error)
      }
    }
    
    video.onerror = () => {
      cleanup()
      reject(new Error(`Failed to load video: ${videoUrl}`))
    }
    
    // Timeout after 5 seconds
    timeoutId = setTimeout(() => {
      cleanup()
      reject(new Error(`Video thumbnail generation timeout: ${videoUrl}`))
    }, 5000)
  })
}
