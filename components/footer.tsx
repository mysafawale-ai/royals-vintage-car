"use client"

import { MapPin, Phone, Mail, Clock } from "lucide-react"
import Link from "next/link"

const vadodaraAreas = [
  "Gotri", "Alkapuri", "Akota", "Sayajigunj", "Fatehgunj", "Sevasi", "Manjalpur",
  "Ellora Park", "Waghodia Road", "Vasna Bhayali", "Karelibaug", "Raopura", "Nizampura",
  "Mujpur", "Vadsala", "Sangam Society", "Atladara", "Ranoli", "Itari", "Wadi",
  "Makarpura", "Chhani"
]

const ahmedabadAreas = [
  "Satellite", "Vastrapur", "Prahlad Nagar", "Bopal", "Thaltej", "SG Highway",
  "Navrangpura", "CG Road", "Ashram Road", "Maninagar", "Ghatlodia", "Chandkheda", "Motera"
]

const suratAreas = [
  "Adajan", "Vesu", "Piplod", "Athwa", "City Light", "Katargam", "Varachha",
  "Udhna", "Althan", "Pal", "Dumas Road", "Majura Gate"
]

const otherCities = [
  "Anand", "Nadiad", "Bharuch", "Ankleshwar",
  "Navsari", "Valsad", "Gandhinagar", "Mehsana",
  "Palanpur", "Vapi", "Bardoli", "Vyara",
  "Kevadia/Statue of Unity", "Champaner-Pavagadh", "Dakor",
  "Saputara", "Patan"
]

// All keyword SEO pages with their display names
const keywordPages = [
  { name: "Wedding Car", href: "/wedding-car" },
  { name: "Vintage Car Rental", href: "/vintage-car-rental" },
  { name: "Vintage Wedding Car", href: "/vintage-wedding-car" },
  { name: "Vintage Car for Wedding", href: "/vintage-car-for-wedding" },
  { name: "Vintage Wedding Car Rental", href: "/vintage-wedding-car-rental" },
  { name: "Classic Car Wedding", href: "/classic-car-wedding" },
  { name: "Baraat Car", href: "/baraat-car" },
  { name: "Marriage Car Rental", href: "/marriage-car-rental" },
  { name: "Rolls Royce Wedding", href: "/rolls-royce-wedding" },
  { name: "Shaadi Car", href: "/shaadi-car" },
  { name: "Open Top Vintage Car", href: "/open-top-vintage-car" },
  { name: "Luxury Vintage Car", href: "/luxury-vintage-car" },
  { name: "Antique Car Wedding", href: "/antique-car-wedding" },
  { name: "Vidaai Car", href: "/vidaai-car" },
  { name: "Bride Entry Car", href: "/bride-entry-car" },
  { name: "Pre-Wedding Shoot Car", href: "/pre-wedding-shoot-car" },
  { name: "Reception Car", href: "/reception-car" },
  { name: "Vintage Car Photoshoot", href: "/vintage-car-photoshoot" },
  { name: "Dulhan Car", href: "/dulhan-car" },
  { name: "Groom Entry Car", href: "/groom-entry-car" },
  { name: "Doli Car", href: "/doli-car" },
  { name: "Vintage Wedding Car Hire", href: "/vintage-wedding-car-hire" },
  { name: "Wedding Vintage Car Rental Service", href: "/wedding-vintage-car-rental-service" },
  { name: "Wedding Vintage Car on Rent", href: "/wedding-vintage-car-on-rent" },
  { name: "Vintage Wedding Car Service", href: "/vintage-wedding-car-service" },
  { name: "Vintage Car Rental Vadodara", href: "/vintage-car-rental-vadodara" },
  { name: "Wedding Vintage Cars Delivery", href: "/wedding-vintage-cars-delivery" },
]

export function Footer() {
  return (
    <footer className="bg-[#2C1810] text-primary-foreground">
      <div className="container mx-auto px-3 sm:px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 mb-8 md:mb-0">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-secondary">ROYALS - THE BARODE VINTAGE CARS</h3>
            <p className="text-primary-foreground/80 font-mono leading-relaxed mb-6">
              {
                "Gujarat's premier vintage car rental service for weddings. Luxury Rolls Royce, open top vintage cars for baraat, shaadi & marriage ceremonies in Vadodara, Ahmedabad & Surat."
              }
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-secondary">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Gallery", "Services", "Contact"].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase().replace(" ", "-"))
                      element?.scrollIntoView({ behavior: "smooth" })
                    }}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors font-mono"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-secondary">Our Services</h4>
            <ul className="space-y-3 text-primary-foreground/80 font-mono">
              <li>Vintage Wedding Car Rental</li>
              <li>Rolls Royce for Wedding</li>
              <li>Open Top Vintage Cars</li>
              <li>Baraat Car Service</li>
              <li>Bride Entry Car Rental</li>
              <li>Pre-Wedding Shoot Cars</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-secondary">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-primary-foreground/80 font-mono">
                    25,26, Windsor Plaza, Studio-S/B,
                    <br />
                    RC Dutt Rd, near Paras Pan, Alkapuri,
                    <br />
                    Vadodara, Gujarat 390007
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <a
                  href="tel:+918830612287"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors font-mono"
                >
                  +91 88306 12287
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <a
                  href="mailto:info@royalsvintagecar.com"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors font-mono"
                >
                  info@royalsvintagecar.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas - Vadodara */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <h4 className="text-xl font-bold mb-4 text-center text-secondary">Vintage Car Rental in Vadodara Areas</h4>
          <div className="text-center text-primary-foreground/80 font-mono text-sm leading-relaxed flex flex-wrap justify-center gap-x-2 gap-y-1">
            {vadodaraAreas.map((area, index) => (
              <span key={area} className="inline-flex items-center">
                <Link 
                  href={`/${area.toLowerCase().replace(/ /g, "-")}`}
                  className="text-primary-foreground/80 hover:text-secondary transition-colors underline underline-offset-2"
                >
                  {area}
                </Link>
                {index < vadodaraAreas.length - 1 && <span className="text-secondary mx-1">•</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Service Areas - Ahmedabad */}
        <div className="mt-8 pt-6 border-t border-primary-foreground/10">
          <h4 className="text-lg font-bold mb-3 text-center text-secondary">Wedding Car Rental in Ahmedabad</h4>
          <div className="text-center text-primary-foreground/80 font-mono text-sm leading-relaxed flex flex-wrap justify-center gap-x-2 gap-y-1">
            {ahmedabadAreas.map((area, index) => (
              <span key={area} className="inline-flex items-center">
                <Link 
                  href={`/${area.toLowerCase().replace(/ /g, "-")}`}
                  className="text-primary-foreground/80 hover:text-secondary transition-colors underline underline-offset-2"
                >
                  {area}
                </Link>
                {index < ahmedabadAreas.length - 1 && <span className="text-secondary mx-1">•</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Service Areas - Surat */}
        <div className="mt-8 pt-6 border-t border-primary-foreground/10">
          <h4 className="text-lg font-bold mb-3 text-center text-secondary">Vintage Car Hire in Surat</h4>
          <div className="text-center text-primary-foreground/80 font-mono text-sm leading-relaxed flex flex-wrap justify-center gap-x-2 gap-y-1">
            {suratAreas.map((area, index) => (
              <span key={area} className="inline-flex items-center">
                <Link 
                  href={`/${area.toLowerCase().replace(/ /g, "-")}`}
                  className="text-primary-foreground/80 hover:text-secondary transition-colors underline underline-offset-2"
                >
                  {area}
                </Link>
                {index < suratAreas.length - 1 && <span className="text-secondary mx-1">•</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Other Cities */}
        <div className="mt-8 pt-6 border-t border-primary-foreground/10">
          <h4 className="text-lg font-bold mb-3 text-center text-secondary">Other Gujarat Cities We Serve</h4>
          <div className="text-center text-primary-foreground/80 font-mono text-sm leading-relaxed flex flex-wrap justify-center gap-x-2 gap-y-1">
            {otherCities.map((city, index) => (
              <span key={city} className="inline-flex items-center">
                <Link 
                  href={`/${city.toLowerCase().replace(/ /g, "-").replace("/", "-")}`}
                  className="text-primary-foreground/80 hover:text-secondary transition-colors underline underline-offset-2"
                >
                  {city}
                </Link>
                {index < otherCities.length - 1 && <span className="text-secondary mx-1">•</span>}
              </span>
            ))}
          </div>
        </div>

        {/* All Service Pages Links */}
        <div className="mt-8 pt-6 border-t border-primary-foreground/10">
          <h4 className="text-lg font-bold mb-4 text-center text-secondary">Our Wedding Car Services</h4>
          <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 text-sm">
            {keywordPages.map((page, index) => (
              <span key={page.href} className="inline-flex items-center">
                <Link 
                  href={page.href} 
                  className="text-primary-foreground/80 hover:text-secondary transition-colors font-mono underline underline-offset-2"
                >
                  {page.name}
                </Link>
                {index < keywordPages.length - 1 && <span className="text-secondary mx-1">|</span>}
              </span>
            ))}
          </div>
        </div>

        {/* SEO Keywords Section */}
        <div className="mt-8 pt-6 border-t border-primary-foreground/10">
          <p className="text-center text-secondary font-mono text-sm">
            ✓ Vintage Car Rental | ✓ Wedding Car Hire | ✓ Rolls Royce Wedding | ✓ Baraat Car | ✓ Classic Car Wedding | ✓ Shaadi Vintage Car
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/80 font-mono text-sm text-center md:text-left">
              © 2026 ROYALS - THE BARODE VINTAGE CARS. All rights reserved. | Gujarat's Premier Vintage Wedding Car Rental
            </p>
            <div className="flex gap-6 text-sm font-mono">
              <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* SEO Keywords (hidden) */}
      <div className="sr-only">
        Vintage car rental Vadodara, wedding car rental Gujarat, vintage wedding car Ahmedabad, classic car wedding Surat, 
        car rental wedding, vintage wedding car rental, wedding vintage car on rent, vintage car for wedding, 
        open top vintage car wedding, Rolls Royce vintage car rental, vintage car rental from Vadodara, 
        wedding vintage cars delivery, vintage wedding car hire, vintage car on rent for shaadi, 
        classic vintage cars wedding, vintage wedding car service, wedding vintage car rental service, 
        vintage car rental for marriage, open vintage car wedding, luxury vintage car on hire wedding, 
        vintage car rental wedding, wedding car vintage, classic car rental wedding, vintage Rolls Royce wedding car, 
        antique car for bride groom, vintage wedding baraat car rental, Gotri, Alkapuri, Akota, Sayajigunj, 
        Satellite, Vastrapur, Prahlad Nagar, Adajan, Vesu, Piplod
      </div>
    </footer>
  )
}
