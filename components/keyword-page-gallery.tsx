"use client"

import Image from "next/image"
import { Car } from "lucide-react"

// Gallery images - using actual slider images as demo
const galleryImages = [
  { src: "/Slider1.png", alt: "Vintage Wedding Car 1" },
  { src: "/Slider2.png", alt: "Vintage Wedding Car 2" },
  { src: "/Slider3.png", alt: "Vintage Wedding Car 3" },
  { src: "/Slider1.png", alt: "Vintage Wedding Car 4" },
  { src: "/Slider2.png", alt: "Vintage Wedding Car 5" },
  { src: "/Slider3.png", alt: "Vintage Wedding Car 6" },
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
