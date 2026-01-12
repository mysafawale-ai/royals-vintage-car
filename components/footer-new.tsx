"use client"

import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function FooterNew() {
  const services = [
    { name: "Vintage Car Rental", href: "/vintage-car-rental" },
    { name: "Wedding Car", href: "/wedding-car" },
    { name: "Vintage Wedding Car", href: "/vintage-wedding-car" },
    { name: "Classic Car Wedding", href: "/classic-car-wedding" },
    { name: "Rolls Royce Wedding", href: "/rolls-royce-wedding" },
    { name: "Baraat Car", href: "/baraat-car" },
    { name: "Bride Entry Car", href: "/bride-entry-car" },
    { name: "Groom Entry Car", href: "/groom-entry-car" },
    { name: "Marriage Car Rental", href: "/marriage-car-rental" },
    { name: "Open Top Vintage Car", href: "/open-top-vintage-car" },
    { name: "Luxury Vintage Car", href: "/luxury-vintage-car" },
    { name: "Pre-Wedding Shoot Car", href: "/pre-wedding-shoot-car" },
  ]

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
    "Anand", "Nadiad", "Bharuch", "Ankleshwar", "Navsari", "Valsad", "Gandhinagar",
    "Mehsana", "Palanpur", "Vapi", "Bardoli", "Vyara", "Kevadia", "Champaner",
    "Dakor", "Saputara", "Patan"
  ]

  return (
    <footer className="bg-[#2C1810] text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-white/20">
          {/* About */}
          <div>
            <h3 className="text-base font-bold mb-4 text-[#D4AF37]">About ROYALS</h3>
            <p className="text-xs leading-relaxed text-white/80">
              ROYALS - THE BARODE VINTAGE CARS provides premium vintage and classic car rental services for weddings across Gujarat.
            </p>
            <div className="mt-4 space-y-2 text-xs text-white/80">
              <div className="flex items-center gap-2">
                <Phone className="w-3 h-3" />
                <a href="tel:+918830612287" className="hover:text-[#D4AF37]">+91 88306 12287</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3 h-3" />
                <a href="mailto:info@royalsvintagecar.com" className="hover:text-[#D4AF37]">info@royalsvintagec.com</a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3 h-3 mt-1" />
                <span>Windsor Plaza, RC Dutt Rd, Alkapuri, Vadodara 390007</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-bold mb-3 text-[#D4AF37]">Services</h3>
            <ul className="space-y-1">
              {services.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="text-xs text-white/80 hover:text-[#D4AF37] transition">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h3 className="text-base font-bold mb-3 text-[#D4AF37]">Major Cities</h3>
            <ul className="space-y-1">
              <li><Link href="/vadodara" className="text-xs text-white/80 hover:text-[#D4AF37]">Vadodara</Link></li>
              <li><Link href="/ahmedabad" className="text-xs text-white/80 hover:text-[#D4AF37]">Ahmedabad</Link></li>
              <li><Link href="/surat" className="text-xs text-white/80 hover:text-[#D4AF37]">Surat</Link></li>
              <li><Link href="/gandhinagar" className="text-xs text-white/80 hover:text-[#D4AF37]">Gandhinagar</Link></li>
              <li><Link href="/nadiad" className="text-xs text-white/80 hover:text-[#D4AF37]">Nadiad</Link></li>
              <li><Link href="/bharuch" className="text-xs text-white/80 hover:text-[#D4AF37]">Bharuch</Link></li>
              <li><Link href="/anand" className="text-xs text-white/80 hover:text-[#D4AF37]">Anand</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold mb-3 text-[#D4AF37]">Quick Links</h3>
            <ul className="space-y-1">
              <li><Link href="/" className="text-xs text-white/80 hover:text-[#D4AF37]">Home</Link></li>
              <li><Link href="/privacy-policy" className="text-xs text-white/80 hover:text-[#D4AF37]">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-xs text-white/80 hover:text-[#D4AF37]">Terms of Service</Link></li>
              <li><Link href="tel:+918830612287" className="text-xs text-white/80 hover:text-[#D4AF37]">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Vadodara Areas */}
        <div className="mb-6 pb-6 border-b border-white/20">
          <h4 className="text-xs font-bold mb-2 text-[#D4AF37]">Vintage Car Rental in Vadodara Areas</h4>
          <div className="flex flex-wrap gap-2">
            {vadodaraAreas.map((area) => (
              <Link
                key={area}
                href={`/${area.toLowerCase().replace(/ /g, "-")}`}
                className="text-xs text-white/70 hover:text-[#D4AF37] transition"
              >
                {area}
              </Link>
            ))}
          </div>
        </div>

        {/* Ahmedabad Areas */}
        <div className="mb-6 pb-6 border-b border-white/20">
          <h4 className="text-xs font-bold mb-2 text-[#D4AF37]">Wedding Car Rental in Ahmedabad Areas</h4>
          <div className="flex flex-wrap gap-2">
            {ahmedabadAreas.map((area) => (
              <Link
                key={area}
                href={`/${area.toLowerCase().replace(/ /g, "-")}`}
                className="text-xs text-white/70 hover:text-[#D4AF37] transition"
              >
                {area}
              </Link>
            ))}
          </div>
        </div>

        {/* Surat Areas */}
        <div className="mb-6 pb-6 border-b border-white/20">
          <h4 className="text-xs font-bold mb-2 text-[#D4AF37]">Wedding Car Rental in Surat Areas</h4>
          <div className="flex flex-wrap gap-2">
            {suratAreas.map((area) => (
              <Link
                key={area}
                href={`/${area.toLowerCase().replace(/ /g, "-")}`}
                className="text-xs text-white/70 hover:text-[#D4AF37] transition"
              >
                {area}
              </Link>
            ))}
          </div>
        </div>

        {/* Other Cities */}
        <div className="mb-6 pb-6 border-b border-white/20">
          <h4 className="text-xs font-bold mb-2 text-[#D4AF37]">Vintage Car Rental in Other Cities</h4>
          <div className="flex flex-wrap gap-2">
            {otherCities.map((city) => (
              <Link
                key={city}
                href={`/${city.toLowerCase().replace(/ |\/|\s/g, "-")}`}
                className="text-xs text-white/70 hover:text-[#D4AF37] transition"
              >
                {city}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center text-xs text-white/60">
          <p>© 2024 ROYALS - THE BARODE VINTAGE CARS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
