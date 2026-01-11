"use client"

import { Button } from "@/components/ui/button"
import { Check, Sparkles, Crown, Star, Car } from "lucide-react"

const packages = [
  {
    name: "Classic Package",
    price: "Starting ₹15,000",
    icon: Star,
    popular: false,
    features: [
      "1 Vintage Car for 4 hours",
      "Professional uniformed chauffeur",
      "Car decoration with flowers",
      "Ideal for Baraat or Vidaai",
      "Covers Vadodara city area",
      "Complimentary refreshments",
    ],
  },
  {
    name: "Royal Wedding Package",
    price: "Starting ₹35,000",
    icon: Sparkles,
    popular: true,
    features: [
      "2 Vintage Cars for full day",
      "Baraat + Bride Entry covered",
      "Premium floral decoration",
      "Red carpet service",
      "Professional photography assistance",
      "Uniformed chauffeurs in royal attire",
      "Covers Vadodara, Ahmedabad, Surat",
      "Backup car on standby",
    ],
  },
  {
    name: "Maharaja Package",
    price: "Custom Quote",
    icon: Crown,
    popular: false,
    features: [
      "3+ Vintage Cars for entire event",
      "Complete wedding transportation",
      "Baraat, Bride Entry & Vidaai",
      "Premium Rolls Royce & open-top cars",
      "Exclusive royal decoration",
      "Photography & videography support",
      "Pan-Gujarat coverage",
      "Dedicated wedding coordinator",
      "Multi-day rental available",
      "VIP treatment throughout",
    ],
  },
]

export function PackagesSection() {
  const handleWhatsAppInquiry = (packageName: string) => {
    const message = `Hello! I'm interested in the ${packageName} vintage car rental package for my wedding. Please provide more details.`
    const whatsappNumber = "918830612287"
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappURL, "_blank")
  }

  return (
    <section id="packages" className="py-12 md:py-32 bg-card">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <p className="text-secondary font-mono uppercase tracking-wider mb-2 md:mb-4 text-xs sm:text-sm">Wedding Car Rental Packages</p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-4 md:mb-6 text-balance">
            Vintage Car Rental Packages in Gujarat
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed font-mono">
            {"Transparent pricing for wedding vintage car rental. Choose from our carefully curated packages for Baraat, Bride Entry, Vidaai & Pre-Wedding shoots across Vadodara, Ahmedabad & Surat"}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-background rounded-lg p-8 border-2 transition-all hover:shadow-2xl ${
                pkg.popular ? "border-secondary shadow-xl scale-105" : "border-border hover:border-primary"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-primary-foreground px-6 py-1 rounded-full text-sm font-mono uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  <pkg.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                  <span className="text-muted-foreground font-mono">/event</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-secondary" />
                    </div>
                    <span className="text-foreground font-mono text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  pkg.popular
                    ? "bg-secondary hover:bg-secondary/90 text-primary-foreground"
                    : "bg-primary hover:bg-primary/90 text-primary-foreground"
                }`}
                size="lg"
                onClick={() => handleWhatsAppInquiry(pkg.name)}
              >
                Book {pkg.name}
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-primary/5 border border-secondary/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">What's Included in All Packages</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "Professional uniformed chauffeur",
                "Well-maintained vintage cars",
                "Basic floral car decoration",
                "On-time arrival guarantee",
                "Insurance coverage included",
                "Service across Gujarat",
                "24/7 customer support",
                "Flexible booking options",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <span className="text-foreground font-mono">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground font-mono mb-4">
              {"Need a custom package? Contact us for personalized pricing"}
            </p>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                const element = document.getElementById("contact")
                element?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Get Custom Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
