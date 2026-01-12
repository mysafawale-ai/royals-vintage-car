import dynamic from "next/dynamic"
import { HeroSlider } from "@/components/hero-slider"
import { Navigation } from "@/components/navigation"
import { FooterNew } from "@/components/footer-new"

// Lazy load heavy components
const AboutSection = dynamic(() => import("@/components/about-section").then(mod => ({ default: mod.AboutSection })), {
  loading: () => <div className="h-96 bg-background" />,
})

const ContactForm = dynamic(() => import("@/components/contact-form").then(mod => ({ default: mod.ContactForm })), {
  loading: () => <div className="h-96 bg-background" />,
})

const GallerySection = dynamic(() => import("@/components/gallery-section").then(mod => ({ default: mod.GallerySection })), {
  loading: () => <div className="h-96 bg-background" />,
})

const FAQSection = dynamic(() => import("@/components/faq-section").then(mod => ({ default: mod.FAQSection })), {
  loading: () => <div className="h-96 bg-background" />,
})

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSlider />
      <AboutSection />
      <ContactForm />
      <GallerySection />
      <FAQSection />
      <FooterNew />
    </main>
  )
}
