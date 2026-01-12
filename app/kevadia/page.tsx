/**
 * SSG (Static Site Generation) Page
 * Pre-rendered at build time for maximum performance
 * Revalidates every 24 hours for fresh content
 */

export const revalidate = 86400 // Revalidate every 24 hours

export const metadata = formatMetadata(getPageMetadata("kevadia"), "https://royalsvintagecars.com/kevadia")


import { getPageMetadata, formatMetadata } from "@/lib/page-metadata"
import { KeywordPageLayout } from "@/components/keyword-page-layout"
import { FooterNew } from "@/components/footer-new"

export default function VintageCarRentalKevadiaPage() {
  return (
    <>
      <KeywordPageLayout
      badge="Kevadia, Gujarat"
      title="Vintage Car Rental in Kevadia"
      subtitle="Premium vintage car rental and classic car wedding services in Kevadia. Luxury vintage wedding car hire, Rolls Royce rental, and complete wedding vintage car rental service near the Statue of Unity."
      contentTitle="Vintage Car Rental Kevadia: Classic Car Wedding Near India's Iconic Landmark"
      services={[
        { title: "Vintage Car Rental", desc: "Premium vintage car for wedding" },
        { title: "Classic Car Wedding", desc: "Elegant classic vintage cars wedding" },
        { title: "Wedding Vintage Car", desc: "Wedding vintage car on rent" },
        { title: "Baraat Car Service", desc: "Vintage wedding baraat car rental" },
        { title: "Rolls Royce Rental", desc: "Rolls Royce vintage car rental wedding" },
        { title: "Open Top Service", desc: "Open top vintage car wedding" },
      ]}
      relatedLinks={[
        { href: "/statue-of-unity", label: "Statue of Unity" },
        { href: "/vyara", label: "Vyara" },
        { href: "/bardoli", label: "Bardoli" },
        { href: "/vadodara", label: "Vadodara" },
        { href: "/wedding-car", label: "Wedding Car" },
      ]}
    >
      <p className="text-lg leading-relaxed mb-8">
        Kevadia stands at the threshold of India's most iconic landmark—the gateway to the Statue of Unity—where ambitious families celebrate with grand vision and national pride. <strong>ROYALS - THE BARODE VINTAGE CARS</strong> provides premium <strong>vintage car rental</strong> and <strong>classic car wedding</strong> services throughout Kevadia. Our <strong>vintage wedding car rental</strong> collection brings world-class elegance to celebrations near this monumental landmark.
      </p>

      <h3>Iconic Landmark Wedding Vintage Car On Rent</h3>
      
      <p className="leading-relaxed mb-6">
        Kevadia's families celebrate near India's iconic Statue of Unity with grand pride. Our <strong>wedding vintage car on rent</strong> services match this monumental sensibility. Every <strong>vintage car for wedding</strong> reflects Kevadia's landmark significance.
      </p>

      <p className="leading-relaxed mb-6">
        Our <strong>wedding vintage car rental service</strong> provides premium <strong>wedding vintage cars delivery</strong> throughout Kevadia. The <strong>vintage wedding car hire</strong> experience connects national pride with celebration through <strong>classic vintage cars wedding</strong> grandeur.
      </p>

      <h3>Classic Car Wedding Near Iconic Kevadia</h3>

      <p className="leading-relaxed mb-6">
        Kevadia's landmark-proximate venues host impressive celebrations with global appeal. Our <strong>classic car wedding</strong> services include:
      </p>

      <ul className="list-disc pl-6 mb-8 space-y-2 text-muted-foreground">
        <li><strong>Vintage car rental wedding</strong> for proud families</li>
        <li><strong>Classic car rental wedding</strong> at landmark venues</li>
        <li><strong>Open top vintage car wedding</strong> grand arrivals</li>
        <li><strong>Vintage car on rent for shaadi</strong> with pride-focused styling</li>
        <li><strong>Antique car for bride groom</strong> landmark photography</li>
      </ul>

      <h3>Vintage Wedding Baraat Car Rental</h3>

      <p className="leading-relaxed mb-6">
        Kevadia's location near a world landmark creates opportunities for grand processions. Our <strong>vintage wedding baraat car rental</strong> celebrates this city's significance:
      </p>

      <ul className="list-disc pl-6 mb-8 space-y-2 text-muted-foreground">
        <li><strong>Open vintage car wedding</strong> near iconic Kevadia</li>
        <li><strong>Wedding car vintage</strong> with grand decoration</li>
        <li><strong>Vintage car rental for marriage</strong> impressive processions</li>
        <li>Landmark-aware route planning</li>
        <li>Pride-focused coordination</li>
      </ul>

      <h3>Rolls Royce Vintage Car Rental Wedding</h3>

      <p className="leading-relaxed mb-6">
        Kevadia's accomplished families deserve ultimate luxury. Our <strong>Rolls Royce vintage car rental wedding</strong> service provides prestige. The <strong>vintage Rolls Royce wedding car</strong> represents <strong>luxury vintage car on hire wedding</strong> excellence for world-class celebrations.
      </p>

      <h4>Landmark Pride Fleet</h4>
      <p className="leading-relaxed mb-6">
        Our <strong>vintage wedding car service</strong> features award-quality automobiles. The <strong>classic vintage cars wedding</strong> collection includes vehicles worthy of celebrations near this world-renowned landmark.
      </p>

      <h3>Vintage Car on Rent for Shaadi</h3>

      <p className="leading-relaxed mb-6">
        Kevadia weddings celebrate national pride and family achievement. Our <strong>vintage car on rent for shaadi</strong> services support:
      </p>

      <ul className="list-disc pl-6 mb-8 space-y-2 text-muted-foreground">
        <li>Grand engagement celebrations</li>
        <li>Prestigious pre-wedding events</li>
        <li>Complete <strong>vintage wedding car hire</strong> packages</li>
        <li>Landmark venue coordination</li>
        <li>Memorable vidaai ceremonies</li>
      </ul>

      <h3>Antique Car for Bride Groom</h3>

      <p className="leading-relaxed mb-6">
        Kevadia offers distinctive photography backdrops. Our <strong>antique car for bride groom</strong> services include:
      </p>

      <ul className="list-disc pl-6 mb-8 space-y-2 text-muted-foreground">
        <li>Landmark backdrop photography</li>
        <li>Monument-proximate shoots</li>
        <li>Grand venue sessions</li>
        <li>Pride-focused styling</li>
        <li>Memorable captures</li>
      </ul>

      <h3>Wedding Vintage Cars Delivery</h3>

      <p className="leading-relaxed mb-6">
        Our <strong>wedding vintage cars delivery</strong> to Kevadia ensures grand standards:
      </p>

      <ul className="list-disc pl-6 mb-8 space-y-2 text-muted-foreground">
        <li><strong>Vintage car rental from Vadodara</strong> reliable delivery</li>
        <li>Award-quality vehicles</li>
        <li>Professional chauffeurs</li>
        <li>Landmark area coordination</li>
        <li>Premium backup support</li>
      </ul>

      <h3>Wedding Vintage Car Rental Service</h3>

      <p className="leading-relaxed mb-6">
        Our <strong>wedding vintage car rental service</strong> meets Kevadia standards:
      </p>

      <ul className="list-disc pl-6 mb-8 space-y-2 text-muted-foreground">
        <li>World-class <strong>vintage car rental</strong> service</li>
        <li>Professional chauffeurs</li>
        <li>Grand <strong>classic car wedding</strong> coordination</li>
        <li>Flexible arrangements</li>
        <li>Premium support</li>
      </ul>

      <h3>Book Kevadia Vintage Car Service</h3>

      <p className="leading-relaxed mb-6">
        Celebrate in Kevadia with our <strong>vintage car rental wedding</strong> services. From <strong>open top vintage car wedding</strong> arrivals to grand <strong>vintage wedding car service</strong>, we deliver world-class excellence.
      </p>

      <p className="leading-relaxed mb-8 text-lg font-medium">
        Contact us at <strong>+91 88306 12287</strong> or email <strong>info@royalsvintagecar.com</strong> for <strong>vintage car for wedding</strong> bookings. Visit ROYALS - THE BARODE VINTAGE CARS at Windsor Plaza, RC Dutt Road, Alkapuri, Vadodara. Premium <strong>classic car rental wedding</strong> for Kevadia!
      </p>    </KeywordPageLayout>
    <FooterNew />
    </>
  )
}
