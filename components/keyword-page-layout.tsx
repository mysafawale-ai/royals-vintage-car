"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, MapPin, Heart, CheckCircle, ArrowRight, Crown, MessageCircle } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { addLead } from "@/lib/leads"
import { SiteFooter } from "@/components/site-footer"

// Gujarat cities and areas
const gujaratLocations = {
  "Vadodara": ["Gotri", "Alkapuri", "Akota", "Sayajigunj", "Fatehgunj", "Sevasi", "Manjalpur", "Ellora Park", "Waghodia Road", "Vasna Bhayali", "Karelibaug", "Raopura", "Nizampura"],
  "Ahmedabad": ["Satellite", "Vastrapur", "Prahlad Nagar", "Bopal", "Thaltej", "SG Highway", "Navrangpura", "CG Road", "Ashram Road", "Maninagar"],
  "Surat": ["Adajan", "Vesu", "Piplod", "Athwa", "City Light", "Katargam", "Varachha", "Udhna", "Althan", "Pal"],
  "Other Cities": ["Anand", "Nadiad", "Bharuch", "Ankleshwar", "Navsari", "Valsad", "Gandhinagar", "Mehsana", "Rajkot"]
}

const heroImages = ["/Slider1.png"]

const galleryImages = [
  { src: "/elegant-vintage-wedding-car-7.jpg", alt: "Elegant Vintage Wedding Car", type: "image" },
  { src: "/luxury-vintage-car-hire-wedding-8.jpg", alt: "Luxury Vintage Car Hire Wedding", type: "image" },
  { src: "/vintage-car-rental-vadodara-9.jpg", alt: "Vintage Car Rental Vadodara", type: "image" },
]

const galleryVideos = [
  { src: "/elegant-vintage-wedding-car-ride-video.mp4", title: "Elegant Vintage Wedding Car Ride" },
  { src: "/classic-car-wedding-celebration-video.mp4", title: "Classic Car Wedding Celebration" },
  { src: "/vintage-wedding-car-grandeur-video.mp4", title: "Vintage Wedding Car Grandeur" },
]

interface KeywordPageLayoutProps {
  badge: string
  title: string
  subtitle: string
  contentTitle: string
  children: React.ReactNode
  services?: Array<{ title: string; desc: string }>
  features?: string[]
  relatedLinks?: Array<{ href: string; label: string }>
}

export function KeywordPageLayout({
  badge,
  title,
  subtitle,
  contentTitle,
  children,
  services = [
    { title: "Baraat Entry Car", desc: "Grand entrance for the groom with decorated vintage cars" },
    { title: "Bride Entry Car", desc: "Elegant arrival for the bride in style" },
    { title: "Vidaai Car", desc: "Emotional farewell with classic touch" },
    { title: "Reception Car", desc: "Make a statement at your reception venue" },
    { title: "Pre-Wedding Shoot", desc: "Perfect backdrop for memorable photos" },
    { title: "Pan-Gujarat Service", desc: "Delivery across all major cities" },
  ],
  features = [
    "Professional uniformed chauffeurs", "Fully decorated cars with flowers & ribbons",
    "AC & non-AC vintage options available", "Backup vehicle arrangements",
    "Flexible booking hours", "Last-minute bookings accepted",
    "Competitive pricing packages", "Door-to-door service",
  ],
  relatedLinks = [
    { href: "/vintage-car-rental", label: "Vintage Car Rental" },
    { href: "/rolls-royce-wedding", label: "Rolls Royce Wedding" },
    { href: "/baraat-car", label: "Baraat Car Service" },
    { href: "/classic-car-wedding", label: "Classic Car Wedding" },
  ]
}: KeywordPageLayoutProps) {
  const [currentImage, setCurrentImage] = useState(0)
  const [selectedCity, setSelectedCity] = useState("")
  const [formData, setFormData] = useState({
    fullName: "", phoneNumber: "", weddingDate: "", city: "", carType: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    addLead({ fullName: formData.fullName, phoneNumber: formData.phoneNumber, propertyType: formData.carType, budget: formData.weddingDate, city: formData.city })
    const message = `*VINTAGE CAR BOOKING ENQUIRY*\n\n*Name:* ${formData.fullName}\n*Phone:* ${formData.phoneNumber}\n*Wedding Date:* ${formData.weddingDate}\n*Location:* ${formData.city}\n*Car Type:* ${formData.carType}\n*Page:* ${title}\n\n_Sent via ROYALS Website_`
    window.open(`https://wa.me/918830612287?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Logo */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md">
        <div className="container mx-auto px-3 sm:px-4 py-2 sm:py-3">
          <Link href="/" className="relative h-12 sm:h-14 md:h-16 w-auto flex items-center">
            <Image
              src="/royals-vintage-cars-logo.png"
              alt="Royals Vintage Cars Logo"
              height={64}
              width={160}
              className="h-full w-auto object-contain"
              priority
            />
          </Link>
        </div>
      </div>

      {/* Hero Section with Form */}
      <section className="relative w-full min-h-[90vh] overflow-hidden pt-20 sm:pt-32 md:pt-28">
        <div className="absolute inset-0 transition-opacity duration-1000" style={{ backgroundImage: `url(${heroImages[currentImage]})`, backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C1810]/95 via-[#8B4513]/60 to-[#2C1810]/40" />
        </div>
        <div className="relative z-20 container mx-auto px-4 py-12 md:py-20">
          <div className="grid md:grid-cols-5 gap-6 md:gap-8 items-start">
            <div className="md:col-span-3 max-w-2xl space-y-4 sm:space-y-5 md:space-y-6">
              <div className="flex items-center gap-2 text-secondary">
                <Crown className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-xs font-mono uppercase tracking-wider">{badge}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">{title}</h1>
              <p className="text-base sm:text-lg md:text-xl text-white/90 font-mono leading-relaxed">{subtitle}</p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="tel:+918830612287" className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 py-3 rounded-lg font-bold transition-all">
                  <Phone className="w-5 h-5" />Call: +91 88306 12287
                </a>
                <a href="https://wa.me/918830612287" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-bold transition-all border border-white/30">WhatsApp Booking</a>
              </div>
            </div>
            <div className="md:col-span-2 bg-card rounded-lg p-4 md:p-5 shadow-2xl border-2 border-secondary/30">
              <div className="mb-3 pb-3 border-b border-border">
                <p className="text-secondary font-mono text-xs uppercase tracking-wider">Book Your Dream Car</p>
                <h3 className="text-lg font-bold text-card-foreground">Vintage Wedding Car Rental</h3>
                <p className="text-xs text-muted-foreground font-mono">— Free Quote & Instant Response</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="block text-xs font-mono text-card-foreground mb-1">Full Name <span className="text-destructive">*</span></label>
                  <Input type="text" placeholder="Enter your full name" value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} required className="bg-background border-border text-sm h-9" />
                </div>
                <div>
                  <label className="block text-xs font-mono text-card-foreground mb-1">Phone Number <span className="text-destructive">*</span></label>
                  <Input type="tel" placeholder="Enter your phone number" value={formData.phoneNumber} onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })} required className="bg-background border-border text-sm h-9" />
                </div>
                <div>
                  <label className="block text-xs font-mono text-card-foreground mb-1">Wedding Date <span className="text-destructive">*</span></label>
                  <Input type="date" value={formData.weddingDate} onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })} required className="bg-background border-border text-sm h-9" />
                </div>
                <div>
                  <label className="block text-xs font-mono text-card-foreground mb-1">City <span className="text-destructive">*</span></label>
                  <Input type="text" placeholder="Enter city name" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} required className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm h-9" />
                </div>
                <div>
                  <label className="block text-xs font-mono text-card-foreground mb-1">Car Type <span className="text-muted-foreground text-xs">(Optional)</span></label>
                  <select value={formData.carType} onChange={(e) => setFormData({ ...formData, carType: e.target.value })} className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm h-9">
                    <option value="">Select Car Type</option>
                    <option value="Vintage Rolls Royce">Vintage Rolls Royce</option>
                    <option value="Open Top Vintage Car">Open Top Vintage Car</option>
                    <option value="Classic Vintage Car">Classic Vintage Car</option>
                    <option value="Luxury Vintage Collection">Luxury Vintage Collection</option>
                  </select>
                </div>
                <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold h-10">
                  <MessageCircle className="w-4 h-4 mr-2" />Book via WhatsApp
                </Button>
              </form>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
          {heroImages.map((_, index) => (<button key={index} onClick={() => setCurrentImage(index)} className={`w-8 h-1.5 rounded-full transition-all ${index === currentImage ? "bg-secondary" : "bg-white/40"}`} />))}
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-mono mb-4">{badge}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{contentTitle}</h2>
              <div className="w-24 h-1 bg-secondary mx-auto"></div>
            </div>
            <article className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-h3:text-2xl prose-h3:font-bold prose-h3:mt-12 prose-h3:mb-6 prose-h4:text-xl prose-h4:font-semibold prose-h4:mt-8 prose-h4:mb-4">
              {children}
            </article>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-background p-6 rounded-xl shadow-lg border border-border hover:border-secondary transition-all">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-4"><Heart className="w-6 h-6 text-secondary" /></div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground font-mono">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Book With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="font-mono text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-[#2C1810] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Vintage Car Gallery</h2>
          <p className="text-center text-white/70 font-mono mb-12">Premium cars for your wedding celebration</p>
          
          {/* Image Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {galleryImages.map((image, index) => (
              <div key={index} className="aspect-[4/3] relative rounded-lg overflow-hidden group">
                <Image src={image.src} alt={image.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-mono text-sm">{image.alt}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Video Gallery */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-secondary">Watch Our Wedding Car Videos</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {galleryVideos.map((video, index) => (
                <div key={index} className="aspect-video relative rounded-lg overflow-hidden bg-black/20">
                  <video
                    src={video.src}
                    title={video.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    controls
                    controlsList="nodownload"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-[#2C1810] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Book Your Vintage Car?</h2>
          <p className="text-white/80 font-mono mb-8 max-w-2xl mx-auto">Contact us today to check availability and get a customized quote for your wedding</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+918830612287" className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 rounded-lg font-bold"><Phone className="w-5 h-5" />+91 88306 12287</a>
            <Link href="/#contact" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 px-8 py-4 rounded-lg font-bold border border-white/30">Get Quote <ArrowRight className="w-5 h-5" /></Link>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <h3 className="text-xl font-bold mb-6 text-center">Explore More Services</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {relatedLinks.map((link, index) => (
              <Link key={index} href={link.href} className="text-primary hover:text-secondary font-mono text-sm underline">{link.label}</Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
