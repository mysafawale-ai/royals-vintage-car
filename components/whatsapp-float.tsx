"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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

export function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCity, setSelectedCity] = useState("")
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    weddingDate: "",
    city: "",
    carType: "",
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

―――――――――――――
_Sent via ROYALS - THE BARODE VINTAGE CARS Website_
    `.trim()

    const whatsappNumber = "918830612287"
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

    window.open(whatsappUrl, "_blank")

    // Reset form and close dialog
    setFormData({
      fullName: "",
      phoneNumber: "",
      weddingDate: "",
      city: "",
      carType: "",
    })
    setSelectedCity("")
    setIsOpen(false)
  }

  return (
    <>
      {/* Floating WhatsApp Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full bg-[#25D366] shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center group"
        aria-label="WhatsApp Enquiry"
      >
        <svg viewBox="0 0 24 24" className="h-9 w-9 fill-white" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        <span className="absolute -top-1 -right-1 h-4 w-4 bg-secondary rounded-full animate-ping" />
      </button>

      {/* Enquiry Form Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-serif text-primary">Book Your Vintage Car</DialogTitle>
            <DialogDescription className="font-mono">
              Fill in your details and we'll connect with you on WhatsApp instantly
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="font-mono">
                Full Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                required
                className="font-mono"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phoneNumber" className="font-mono">
                Phone Number <span className="text-destructive">*</span>
              </Label>
              <Input
                id="phoneNumber"
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phoneNumber}
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                required
                className="font-mono"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="weddingDate" className="font-mono">
                Wedding Date <span className="text-destructive">*</span>
              </Label>
              <Input
                id="weddingDate"
                type="date"
                value={formData.weddingDate}
                onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
                required
                className="font-mono"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="city" className="font-mono">
                City <span className="text-destructive">*</span>
              </Label>
              <select
                id="city"
                value={formData.city}
                onChange={(e) => handleCityChange(e.target.value)}
                required
                className="w-full bg-white border border-gray-300 text-foreground rounded-md px-3 py-2 text-sm font-mono"
              >
                <option value="">Select City</option>
                {Object.keys(gujaratLocations).map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="carType" className="font-mono">
                Car Type <span className="text-muted-foreground text-xs">(Optional)</span>
              </Label>
              <select
                id="carType"
                value={formData.carType}
                onChange={(e) => setFormData({ ...formData, carType: e.target.value })}
                className="w-full bg-white border border-gray-300 text-foreground rounded-md px-3 py-2 text-sm font-mono"
              >
                <option value="">Select Car Type</option>
                <option value="Vintage Rolls Royce">Vintage Rolls Royce</option>
                <option value="Open Top Vintage Car">Open Top Vintage Car</option>
                <option value="Classic Vintage Car">Classic Vintage Car</option>
                <option value="Luxury Vintage Collection">Luxury Vintage Collection</option>
                <option value="Baraat Special Package">Baraat Special Package</option>
              </select>
            </div>

            <Button type="submit" className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-mono text-base">
              <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2 fill-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Book via WhatsApp
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}
