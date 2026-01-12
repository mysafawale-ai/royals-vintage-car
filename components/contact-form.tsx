"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Phone, MessageCircle } from "lucide-react"
import { addLead } from "@/lib/leads"

// Gujarat cities and areas
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

export function ContactForm() {
  const [selectedCity, setSelectedCity] = useState("")
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    weddingDate: "",
    city: "",
    carType: "",
    message: "",
  })

  const handleCityChange = (city: string) => {
    setSelectedCity(city)
    setFormData({ ...formData, city })
  }

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

    // Construct WhatsApp message
    const message = `
*VINTAGE CAR BOOKING ENQUIRY*

*Name:* ${formData.fullName}
*Phone:* ${formData.phoneNumber}
*Wedding Date:* ${formData.weddingDate}
*Location:* ${formData.city}
*Car Type:* ${formData.carType}
*Message:* ${formData.message || 'N/A'}

―――――――――――――
_Sent via ROYALS - THE BARODE VINTAGE CARS Website_
    `.trim()

    const whatsappNumber = "918830612287"
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

    window.open(whatsappURL, "_blank")
  }

  return (
    <section
      id="contact"
      className="py-12 md:py-32 bg-gradient-to-br from-primary to-[#2C1810] text-primary-foreground"
    >
      <div className="container mx-auto px-3 sm:px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-secondary font-mono uppercase tracking-wider mb-2 md:mb-4 text-xs sm:text-sm">Book Your Vintage Wedding Car</p>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-balance">Reserve Your Dream Vintage Car Today</h2>
            <p className="text-sm sm:text-base md:text-xl text-primary-foreground/90 font-mono leading-relaxed max-w-2xl mx-auto">
              {"Get instant quotes for vintage wedding car rental in Gujarat. Fill the form and we'll connect with you on WhatsApp immediately"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-card rounded-lg p-4 sm:p-6 md:p-8 shadow-2xl border-2 border-secondary/30">
              <form onSubmit={handleSubmit} className="space-y-3 md:space-y-5">
                <div>
                  <label htmlFor="fullName" className="block text-xs sm:text-sm font-mono text-card-foreground mb-2">
                    Full Name <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                    className="bg-background border-border text-foreground text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="phoneNumber" className="block text-xs sm:text-sm font-mono text-card-foreground mb-2">
                    Phone Number <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="phoneNumber"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    required
                    className="bg-background border-border text-foreground text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="weddingDate" className="block text-sm font-mono text-card-foreground mb-2">
                    Wedding Date <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="weddingDate"
                    type="date"
                    value={formData.weddingDate}
                    onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
                    required
                    className="bg-background border-border text-foreground text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="city" className="block text-sm font-mono text-card-foreground mb-2">
                    City <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="city"
                    type="text"
                    placeholder="Enter city name"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    required
                    className="bg-background border-border text-foreground text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="carType" className="block text-sm font-mono text-card-foreground mb-2">
                    Car Type <span className="text-muted-foreground text-xs">(Optional)</span>
                  </label>
                  <select
                    id="carType"
                    value={formData.carType}
                    onChange={(e) => setFormData({ ...formData, carType: e.target.value })}
                    className="w-full bg-background border border-border text-foreground rounded-md px-3 py-2 text-sm"
                  >
                    <option value="">Select Car Type</option>
                    <option value="Vintage Rolls Royce">Vintage Rolls Royce</option>
                    <option value="Open Top Vintage Car">Open Top Vintage Car</option>
                    <option value="Classic Vintage Car">Classic Vintage Car</option>
                    <option value="Luxury Vintage Collection">Luxury Vintage Collection</option>
                    <option value="Baraat Special Package">Baraat Special Package</option>
                  </select>
                </div>

                <Button type="submit" size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Book via WhatsApp
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-8 border border-secondary/30">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Call Us</h3>
                    <p className="text-primary-foreground/80 font-mono mb-2">Available 9 AM - 9 PM</p>
                    <a
                      href="tel:+918830612287"
                      className="text-lg font-mono text-secondary hover:text-secondary/80 transition-colors"
                    >
                      +91 88306 12287
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-8 border border-secondary/30">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
                    <p className="text-primary-foreground/80 font-mono mb-2">Instant booking & quotes</p>
                    <a
                      href="https://wa.me/918830612287"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-mono text-secondary hover:text-secondary/80 transition-colors"
                    >
                      Chat Now
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-8 border border-secondary/30">
                <h3 className="text-xl font-bold mb-4">Why Book With Us?</h3>
                <ul className="space-y-3">
                  {[
                    "Premium vintage car collection",
                    "Instant quotes on WhatsApp",
                    "Same-day booking confirmation",
                    "Flexible rental packages",
                    "Delivery across Gujarat - Vadodara, Ahmedabad, Surat",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      <span className="text-primary-foreground/90 font-mono">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
