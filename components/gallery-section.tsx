"use client"

import { useState, useEffect } from "react"
import { Play } from "lucide-react"
import { generateVideoThumbnail } from "@/lib/video-thumbnail"

const galleryItems = [
  // Photos
  { id: 1, type: "image", src: "/luxury-vintage-rolls-royce-wedding-1.jpg", thumbnail: "/luxury-vintage-rolls-royce-wedding-1.jpg", title: "Luxury Vintage Rolls Royce Wedding" },
  { id: 2, type: "image", src: "/classic-open-top-vintage-car-wedding-2.jpg", thumbnail: "/classic-open-top-vintage-car-wedding-2.jpg", title: "Classic Open Top Vintage Car" },
  { id: 3, type: "image", src: "/vintage-wedding-car-decoration-3.jpg", thumbnail: "/vintage-wedding-car-decoration-3.jpg", title: "Vintage Wedding Car Decoration" },
  { id: 4, type: "image", src: "/classic-vintage-car-rental-4.jpg", thumbnail: "/classic-vintage-car-rental-4.jpg", title: "Classic Vintage Car Rental" },
  { id: 5, type: "image", src: "/bride-entry-vintage-car-5.jpg", thumbnail: "/bride-entry-vintage-car-5.jpg", title: "Bride Entry Vintage Car" },
  { id: 6, type: "image", src: "/wedding-baraat-vintage-car-6.jpg", thumbnail: "/wedding-baraat-vintage-car-6.jpg", title: "Wedding Baraat Vintage Car" },
  // Videos - thumbnails will be generated from videos
  { id: 7, type: "video", src: "/vintage-rolls-royce-wedding-car-video-1.mp4", thumbnail: null, title: "Vintage Rolls Royce Wedding Car Video" },
  { id: 8, type: "video", src: "/classic-open-top-vintage-wedding-video-2.mp4", thumbnail: null, title: "Classic Open Top Vintage Video" },
  { id: 9, type: "video", src: "/vintage-baraat-car-wedding-video-3.mp4", thumbnail: null, title: "Royal Baraat Car Video" },
  { id: 10, type: "video", src: "/luxury-vintage-wedding-car-decoration-4.mp4", thumbnail: null, title: "Decorated Wedding Vintage Video" },
  { id: 11, type: "video", src: "/wedding-vintage-car-rental-video-5.mp4", thumbnail: null, title: "Bride & Groom Car Video" },
  { id: 12, type: "video", src: "/elegant-vintage-wedding-car-ride-video.mp4", thumbnail: null, title: "Elegant Wedding Car Ride Video" },
]

export function GallerySection() {
  const [selectedFilter, setSelectedFilter] = useState<"all" | "video">("all")
  const [showAll, setShowAll] = useState(false)
  const [activeVideo, setActiveVideo] = useState<string | null>(null)
  const [activeImage, setActiveImage] = useState<{type: string, src: string} | null>(null)
  const [thumbnails, setThumbnails] = useState<Record<string, string>>({})

  // Generate thumbnails for videos on component mount
  useEffect(() => {
    const generateThumbnails = async () => {
      const videoItems = galleryItems.filter(item => item.type === "video")
      const newThumbnails: Record<string, string> = {}

      for (const item of videoItems) {
        try {
          const thumb = await generateVideoThumbnail(item.src, 2)
          newThumbnails[item.src] = thumb
        } catch (error) {
          console.error(`Failed to generate thumbnail for ${item.src}:`, error)
        }
      }

      setThumbnails(newThumbnails)
    }

    generateThumbnails()
  }, [])

  const filteredItems = galleryItems
  
  const displayedItems = showAll ? filteredItems : filteredItems.slice(0, 12)

  return (
    <section id="gallery" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-secondary font-mono uppercase tracking-wider mb-4">Our Collection</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Vintage Wedding Car Gallery</h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-mono">
            {
              "Explore our stunning collection of vintage wedding cars - from classic Rolls Royce to elegant open top cars perfect for your special day"
            }
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          {[
            { key: "all", label: "All Videos" },
          ].map((filter) => (
            <button
              key={filter.key}
              onClick={() => setSelectedFilter(filter.key as "all" | "video")}
              className={`px-6 py-2 rounded-full font-mono text-sm transition-all ${
                selectedFilter === filter.key
                  ? "bg-secondary text-white"
                  : "bg-primary/10 text-primary hover:bg-primary/20"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {displayedItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all cursor-pointer border-2 border-transparent hover:border-secondary"
              onClick={() => {
                if (item.type === "video") {
                  setActiveVideo(item.src)
                } else {
                  setActiveImage({ type: item.type, src: item.src })
                }
              }}
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              ) : (
                <img
                  src={thumbnails[item.src] || item.thumbnail || item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              )}
              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-secondary/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/90 via-[#8B4513]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-bold text-sm md:text-lg">{item.title}</h3>
                  {item.type === "video" && (
                    <span className="text-secondary text-xs font-mono">▶ Click to play</span>
                  )}
                  {item.type === "image" && (
                    <span className="text-secondary text-xs font-mono">🔍 Click to view</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SEO Keywords Section */}
        <div className="mt-16 text-center">
          <p className="text-secondary font-mono uppercase tracking-wider mb-4">Book Your Vintage Car</p>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Premium Vintage Wedding Cars Across Gujarat
          </h3>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {[
              "Vintage Car Rental Vadodara",
              "Wedding Car Ahmedabad",
              "Classic Car Surat",
              "Rolls Royce Wedding",
              "Open Top Vintage",
              "Baraat Car Gujarat",
              "Shaadi Vintage Car",
              "Marriage Car Rental",
              "Antique Wedding Car",
              "Luxury Vintage Hire",
            ].map((tag, index) => (
              <span key={index} className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-mono">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div className="relative w-full max-w-4xl aspect-video">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-secondary transition-colors"
            >
              <span className="text-lg font-mono">✕ Close</span>
            </button>
            <video
              src={activeVideo}
              className="w-full h-full rounded-lg"
              controls
            />
          </div>
        </div>
      )}

      {/* Image Modal */}
      {activeImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative w-full max-w-4xl max-h-[90vh] flex items-center justify-center">
            <button
              onClick={() => setActiveImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-secondary transition-colors"
            >
              <span className="text-lg font-mono">✕ Close</span>
            </button>
            <img
              src={activeImage.src}
              alt="Gallery Image"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  )
}
