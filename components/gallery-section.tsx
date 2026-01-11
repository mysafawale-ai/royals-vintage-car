"use client"

import { useState } from "react"
import { Play } from "lucide-react"

const galleryItems = [
  { id: 1, type: "image", src: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&h=600&fit=crop", title: "Vintage Rolls Royce Wedding Car" },
  { id: 2, type: "video", src: "https://www.youtube.com/embed/dQw4w9WgXcQ", thumbnail: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=600&fit=crop", title: "Classic Open Top Vintage" },
  { id: 3, type: "image", src: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=600&fit=crop", title: "Royal Baraat Car" },
  { id: 4, type: "image", src: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=600&h=600&fit=crop", title: "Decorated Wedding Vintage" },
  { id: 5, type: "video", src: "https://www.youtube.com/embed/dQw4w9WgXcQ", thumbnail: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=600&fit=crop", title: "Bride & Groom Car" },
  { id: 6, type: "image", src: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=600&h=600&fit=crop", title: "Vintage Car Vadodara" },
  { id: 7, type: "image", src: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&h=600&fit=crop", title: "Wedding Car Ahmedabad" },
  { id: 8, type: "video", src: "https://www.youtube.com/embed/dQw4w9WgXcQ", thumbnail: "https://images.unsplash.com/photo-1471444928139-48c5bf5173f8?w=600&h=600&fit=crop", title: "Classic Car Surat" },
  { id: 9, type: "image", src: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&h=600&fit=crop", title: "Luxury Vintage Wedding" },
  { id: 10, type: "image", src: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&h=600&fit=crop", title: "Antique Wedding Car" },
  { id: 11, type: "image", src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=600&fit=crop", title: "Open Vintage Car Wedding" },
  { id: 12, type: "image", src: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&h=600&fit=crop", title: "Shaadi Vintage Car" },
]

export function GallerySection() {
  const [selectedFilter, setSelectedFilter] = useState<"all" | "image" | "video">("all")
  const [showAll, setShowAll] = useState(false)
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  const filteredItems =
    selectedFilter === "all" ? galleryItems : galleryItems.filter((item) => item.type === selectedFilter)
  
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
            { key: "all", label: "All" },
            { key: "image", label: "Photos" },
            { key: "video", label: "Videos" },
          ].map((filter) => (
            <button
              key={filter.key}
              onClick={() => setSelectedFilter(filter.key as "all" | "image" | "video")}
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
              onClick={() => item.type === "video" && setActiveVideo(item.src)}
            >
              <img
                src={item.type === "video" ? item.thumbnail : item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
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
            <iframe
              src={activeVideo}
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  )
}
