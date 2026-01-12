"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import Link from "next/link"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center pt-4 sm:pt-5">
            <Link href="/" className="relative h-[67px] sm:h-[77px] md:h-24 w-auto flex items-center">
              <Image
                src="/royals-vintage-cars-logo.png"
                alt="Royals Vintage Cars Logo"
                height={96}
                width={240}
                className="h-full w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className={`text-sm transition-colors font-mono ${isScrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-secondary"}`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`text-sm transition-colors font-mono ${isScrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-secondary"}`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className={`text-sm transition-colors font-mono ${isScrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-secondary"}`}
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className={`text-sm transition-colors font-mono ${isScrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-secondary"}`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`text-sm transition-colors font-mono ${isScrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-secondary"}`}
            >
              Contact
            </button>
            <a href="tel:+918830612287">
              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold text-sm px-4 py-2 h-auto">
                <Phone className="w-4 h-4 mr-2" />
                Book Now
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className={`md:hidden ${isScrolled ? "text-foreground" : "text-white"}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-3 bg-card border-t border-border rounded-b-lg">
            <div className="flex flex-col gap-2">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left text-sm text-foreground hover:text-primary transition-colors font-mono py-2 px-3"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-sm text-foreground hover:text-primary transition-colors font-mono py-2 px-3"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-left text-sm text-foreground hover:text-primary transition-colors font-mono py-2 px-3"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-sm text-foreground hover:text-primary transition-colors font-mono py-2 px-3"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-sm text-foreground hover:text-primary transition-colors font-mono py-2 px-3"
              >
                Contact
              </button>
              <a href="tel:+918830612287" className="px-3 py-2">
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold text-sm">
                  <Phone className="w-4 h-4 mr-2" />
                  Book Now
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
