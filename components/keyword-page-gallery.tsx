"use client"

import Image from "next/image"
import { Car } from "lucide-react"

// Gallery images - using all available images with SEO keywords
const galleryImages = [
  { src: "/luxury-vintage-rolls-royce-wedding-1.jpg", alt: "Luxury Vintage Rolls Royce Wedding Car" },
  { src: "/classic-open-top-vintage-car-wedding-2.jpg", alt: "Classic Open Top Vintage Car Wedding" },
  { src: "/vintage-wedding-car-decoration-3.jpg", alt: "Vintage Wedding Car Decoration" },
  { src: "/classic-vintage-car-rental-4.jpg", alt: "Classic Vintage Car Rental" },
  { src: "/bride-entry-vintage-car-5.jpg", alt: "Bride Entry Vintage Car" },
  { src: "/wedding-baraat-vintage-car-6.jpg", alt: "Wedding Baraat Vintage Car" },
]

interface KeywordPageGalleryProps {
  title?: string
  subtitle?: string
}

export function KeywordPageGallery({ 
  title = "Our Vintage Car Collection", 
  subtitle = "Premium cars for your wedding" 
}: KeywordPageGalleryProps) {
  return (
    <section className="py-16 bg-[#2C1810] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{title}</h2>
        <p className="text-center text-white/70 font-mono mb-12">{subtitle}</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="aspect-[4/3] relative rounded-lg overflow-hidden group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-mono text-sm">{image.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
