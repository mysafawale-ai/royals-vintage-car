"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Crown, MessageCircle } from "lucide-react"
import { addLead } from "@/lib/leads"

// Gujarat cities and areas for the dropdown
const gujaratLocations = {
  "Vadodara": [
    "Gotri", "Alkapuri", "Akota", "Sayajigunj", "Fatehgunj", "Sevasi", "Manjalpur",
    "Ellora Park", "Waghodia Road", "Vasna Bhayali", "Karelibaug", "Raopura", "Nizampura",
    "Mujpur", "Vadsala", "Sangam Society", "Atladara", "Ranoli", "Itari", "Wadi (Wadiwadi)",
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
    "Champaner-Pavagadh", "Jambughoda", "Dakor", "Poicha/Nilkanthdham", "Dahej", "Saputara", "Patan"
  ]
}

const slides = [
  {
    id: 1,
    title: "Luxury Vintage Cars for Your Dream Wedding",
    subtitle: "Premium Wedding Car Rental in Gujarat",
    description: "Make your special day unforgettable with our exquisite collection of vintage cars. Perfect for baraat, vidaai & wedding ceremonies in Vadodara, Ahmedabad & Surat.",
    image: "/Slider1.png",
  },
  {
    id: 2,
    title: "Rolls Royce & Classic Vintage Collection",
    subtitle: "Timeless Elegance for Your Shaadi",
    description: "Experience royal grandeur with our stunning Rolls Royce and open top vintage cars. The perfect ride for bride, groom & wedding celebrations.",
    image: "/Slider1.png",
  },
  {
    id: 3,
    title: "Wedding Vintage Car Delivery Across Gujarat",
    subtitle: "From Vadodara to Your Wedding Venue",
    description: "We deliver premium vintage wedding cars to all major cities including Ahmedabad, Surat, Anand, Bharuch, Gandhinagar and surrounding areas.",
    image: "/Slider1.png",
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
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

―――――――――――――
_Sent via ROYALS - THE BARODE VINTAGE CARS Website_
    `.trim()

    const whatsappNumber = "918830612287"
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappURL, "_blank")
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const handleCityChange = (city: string) => {
    setSelectedCity(city)
    setFormData({ ...formData, city })
  }

  return (
    <section id="home" className="relative w-full min-h-screen md:h-screen sm:h-[600px] xs:h-screen overflow-hidden pt-80 sm:pt-88 md:pt-80">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C1810]/95 via-[#8B4513]/60 to-[#2C1810]/40 z-10" />
          <div className="absolute inset-0 z-20 flex items-center px-3 sm:px-4 md:px-0">
            <div className="container mx-auto px-3 sm:px-4 py-4 md:py-0">
              <div className="grid md:grid-cols-5 gap-3 md:gap-6 items-start">
                {/* Left Side - Text Content */}
                <div className="md:col-span-3 max-w-2xl space-y-3 sm:space-y-4 md:space-y-6 pt-8 sm:pt-10 md:pt-12">
                  <div className="flex items-center gap-2 text-secondary">
                    <Crown className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                    <span className="text-xs font-mono uppercase tracking-wider">{slide.subtitle}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
                    {slide.title}
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-white/90 font-mono leading-relaxed">
                    {slide.description}
                  </p>
                  <div className="hidden md:flex flex-wrap gap-2 pt-2">
                    <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-xs font-mono">Vintage Wedding Car</span>
                    <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-xs font-mono">Rolls Royce Rental</span>
                    <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-xs font-mono">Open Top Cars</span>
                    <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-xs font-mono">Baraat Car</span>
                  </div>
                </div>

                {/* Right Side - Booking Form */}
                <div className="md:col-span-2 bg-card rounded-lg p-3 md:p-5 shadow-2xl h-fit border-2 border-secondary/30">
                  <div className="mb-2 md:mb-3 pb-2 md:pb-3 border-b border-border">
                    <p className="text-xs text-secondary font-mono uppercase tracking-wider mb-1">Book Your Dream Car</p>
                    <h3 className="text-xs sm:text-sm md:text-base font-bold text-card-foreground">
                      Vintage Wedding Car Rental
                      <br />
                      <em className="text-xs not-italic text-muted-foreground">— Free Quote & Instant Response</em>
                    </h3>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-2">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-mono text-card-foreground mb-1">
                        Full Name <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="fullName"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        required
                        className="bg-background border-border text-foreground text-xs h-8"
                      />
                    </div>

                    <div>
                      <label htmlFor="phoneNumber" className="block text-xs font-mono text-card-foreground mb-1">
                        Phone Number <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="phoneNumber"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        required
                        className="bg-background border-border text-foreground text-xs h-8"
                      />
                    </div>

                    <div>
                      <label htmlFor="weddingDate" className="block text-xs font-mono text-card-foreground mb-1">
                        Wedding Date <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="weddingDate"
                        type="date"
                        value={formData.weddingDate}
                        onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
                        required
                        className="bg-background border-border text-foreground text-xs h-8"
                      />
                    </div>

                    <div>
                      <label htmlFor="city" className="block text-xs font-mono text-card-foreground mb-1">
                        City <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="city"
                        type="text"
                        placeholder="Enter city name"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        required
                        className="bg-background border-border text-foreground text-xs h-8"
                      />
                    </div>

                    <div>
                      <label htmlFor="carType" className="block text-xs font-mono text-card-foreground mb-1">
                        Car Type <span className="text-muted-foreground text-xs">(Optional)</span>
                      </label>
                      <select
                        id="carType"
                        value={formData.carType}
                        onChange={(e) => setFormData({ ...formData, carType: e.target.value })}
                        className="w-full bg-background border border-border text-foreground rounded-md px-2 py-1 text-xs h-8"
                      >
                        <option value="">Select Car Type</option>
                        <option value="Vintage Rolls Royce">Vintage Rolls Royce</option>
                        <option value="Open Top Vintage Car">Open Top Vintage Car</option>
                        <option value="Classic Vintage Car">Classic Vintage Car</option>
                        <option value="Luxury Vintage Collection">Luxury Vintage Collection</option>
                        <option value="Baraat Special Package">Baraat Special Package</option>
                      </select>
                    </div>

                    <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground text-xs h-9 font-semibold">
                      <MessageCircle className="w-3 h-3 mr-1" />
                      Book via WhatsApp
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? "w-8 bg-secondary" : "w-2 bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
