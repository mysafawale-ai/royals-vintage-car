"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Phone, Crown, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { addLead } from "@/lib/leads"
import { FooterNew } from "@/components/footer-new"

// Gujarat cities and areas for the dropdown
const gujaratLocations = {
  "Vadodara": [
    "Gotri", "Alkapuri", "Akota", "Sayajigunj", "Fatehgunj", "Sevasi", "Manjalpur",
    "Ellora Park", "Waghodia Road", "Vasna Bhayali", "Karelibaug", "Raopura", "Nizampura",
    "Mujpur", "Vadsala", "Sangam Society", "Atladara", "Ranoli", "Itari", "Wadi",
    "Makarpura", "Chhani"
  ],
  "Ahmedabad": [
    "Satellite", "Vastrapur", "Prahlad Nagar", "Bopal", "South Bopal", "Thaltej", "SG Highway",
    "Navrangpura", "CG Road", "Ashram Road", "Maninagar", "Ghatlodia", "Chandkheda", "Motera"
  ],
  "Surat": [
    "Adajan", "Vesu", "Piplod", "Athwa", "City Light", "Katargam", "Varachha", "Udhna",
    "Althan", "Pal", "Dumas Road", "Majura Gate"
  ],
  "Other Cities": [
    "Anand", "Nadiad", "Bharuch", "Ankleshwar", "Navsari", "Valsad", "Gandhinagar",
    "Mehsana", "Palanpur", "Vapi", "Bardoli", "Vyara", "Kevadia/Statue of Unity",
    "Champaner-Pavagadh", "Dakor", "Saputara", "Patan"
  ]
}

// Hero slider images
const heroImages = [
  "/Slider1.png",
]

interface KeywordPageHeroProps {
  badge: string
  title: string
  subtitle: string
}

export function KeywordPageHero({ badge, title, subtitle }: KeywordPageHeroProps) {
  const [currentImage, setCurrentImage] = useState(0)
  const [selectedCity, setSelectedCity] = useState("")
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    weddingDate: "",
    city: "",
    carType: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Save lead to localStorage
    addLead({
      fullName: formData.fullName,
      phoneNumber: formData.phoneNumber,
      propertyType: formData.carType,
      budget: formData.weddingDate,
      city: formData.city,
    })

    const message = `
*VINTAGE CAR BOOKING ENQUIRY*

*Name:* ${formData.fullName}
*Phone:* ${formData.phoneNumber}
*Wedding Date:* ${formData.weddingDate}
*Location:* ${formData.city}
*Car Type:* ${formData.carType}
*Page:* ${title}

―――――――――――――
_Sent via ROYALS - THE BARODE VINTAGE CARS Website_
    `.trim()

    const whatsappNumber = "918830612287"
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappURL, "_blank")
  }

  const handleCityChange = (city: string) => {
    setSelectedCity(city)
    setFormData({ ...formData, city })
  }

  return (
    <>
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

      <section className="relative w-full min-h-[90vh] overflow-hidden pt-20 sm:pt-32 md:pt-28">
      {/* Background Image */}
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${heroImages[currentImage]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#2C1810]/95 via-[#8B4513]/60 to-[#2C1810]/40" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-5 gap-6 md:gap-8 items-start">
          {/* Left Side - Text Content */}
          <div className="md:col-span-3 max-w-2xl space-y-4 sm:space-y-5 md:space-y-6">
            <div className="flex items-center gap-2 text-secondary">
              <Crown className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-xs font-mono uppercase tracking-wider">{badge}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 font-mono leading-relaxed">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="tel:+918830612287" 
                className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 py-3 rounded-lg font-bold transition-all"
              >
                <Phone className="w-5 h-5" />
                Call: +91 88306 12287
              </a>
              <a 
                href="https://wa.me/918830612287" 
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-bold transition-all border border-white/30"
              >
                WhatsApp Booking
              </a>
            </div>
          </div>

          {/* Right Side - Booking Form */}
          <div className="md:col-span-2 bg-card rounded-lg p-4 md:p-5 shadow-2xl border-2 border-secondary/30">
            <div className="mb-3 pb-3 border-b border-border">
              <p className="text-secondary font-mono text-xs uppercase tracking-wider">Book Your Dream Car</p>
              <h3 className="text-lg font-bold text-card-foreground">Vintage Wedding Car Rental</h3>
              <p className="text-xs text-muted-foreground font-mono">— Free Quote & Instant Response</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-mono text-card-foreground mb-1">
                  Full Name <span className="text-destructive">*</span>
                </label>
                <Input
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  required
                  className="bg-background border-border text-foreground text-sm h-9"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-card-foreground mb-1">
                  Phone Number <span className="text-destructive">*</span>
                </label>
                <Input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  required
                  className="bg-background border-border text-foreground text-sm h-9"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-card-foreground mb-1">
                  Wedding Date <span className="text-destructive">*</span>
                </label>
                <Input
                  type="date"
                  value={formData.weddingDate}
                  onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
                  required
                  className="bg-background border-border text-foreground text-sm h-9"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-card-foreground mb-1">
                  City <span className="text-destructive">*</span>
                </label>
                <Input
                  type="text"
                  placeholder="Enter city name"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  required
                  className="w-full bg-background border-border text-foreground rounded-md px-3 py-2 text-sm h-9"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-card-foreground mb-1">
                  Car Type <span className="text-muted-foreground text-xs">(Optional)</span>
                </label>
                <select
                  value={formData.carType}
                  onChange={(e) => setFormData({ ...formData, carType: e.target.value })}
                  className="w-full bg-background border border-border text-foreground rounded-md px-3 py-2 text-sm h-9"
                >
                  <option value="">Select Car Type</option>
                  <option value="Vintage Rolls Royce">Vintage Rolls Royce</option>
                  <option value="Open Top Vintage Car">Open Top Vintage Car</option>
                  <option value="Classic Vintage Car">Classic Vintage Car</option>
                  <option value="Luxury Vintage Collection">Luxury Vintage Collection</option>
                </select>
              </div>

              <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold h-10">
                <MessageCircle className="w-4 h-4 mr-2" />
                Book via WhatsApp
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-8 h-1.5 rounded-full transition-all ${
              index === currentImage ? "bg-secondary" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
    <FooterNew />
    </>
  )
}
