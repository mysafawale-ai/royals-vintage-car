import { HeroSlider } from "@/components/hero-slider"
import { AboutSection } from "@/components/about-section"
import { ContactForm } from "@/components/contact-form"
import { GallerySection } from "@/components/gallery-section"
import { SiteFooter } from "@/components/site-footer"
import { Navigation } from "@/components/navigation"
import { FAQSection } from "@/components/faq-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSlider />
      <AboutSection />
      <ContactForm />
      <GallerySection />
      <FAQSection />
      <SiteFooter />
    </main>
  )
}
