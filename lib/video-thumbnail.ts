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
    
    video.onloadedmetadata = () => {
      video.currentTime = Math.min(time, video.duration - 0.5)
    }
    
    video.onseeked = () => {
      const canvas = document.createElement("canvas")
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight
      
      const ctx = canvas.getContext("2d")
      if (!ctx) {
        reject(new Error("Could not get canvas context"))
        return
      }
      
      ctx.drawImage(video, 0, 0)
      
      try {
        const thumbnail = canvas.toDataURL("image/jpeg", 0.8)
        resolve(thumbnail)
      } catch (error) {
        reject(error)
      } finally {
        video.remove()
      }
    }
    
    video.onerror = () => {
      reject(new Error(`Failed to load video: ${videoUrl}`))
    }
  })
}
