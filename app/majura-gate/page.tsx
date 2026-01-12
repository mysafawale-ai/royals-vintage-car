/**
 * SSG (Static Site Generation) Page
 * Pre-rendered at build time for maximum performance
 * Revalidates every 24 hours for fresh content
 */

export const revalidate = 86400 // Revalidate every 24 hours

export const metadata = formatMetadata(getPageMetadata("majura-gate"), "https://royalsvintagecars.com/majura-gate")


import { getPageMetadata, formatMetadata } from "@/lib/page-metadata"
import { KeywordPageLayout } from "@/components/keyword-page-layout"
import { FooterNew } from "@/components/footer-new"

export default function VintageCarRentalMajuraGatePage() {
  return (
    <>
      <KeywordPageLayout
      badge="Majura Gate, Surat"
      title="Vintage Car Rental in Majura Gate, Surat"
      subtitle="Premium vintage car rental and classic car wedding services in Majura Gate. Luxury vintage wedding car hire, Rolls Royce rental, and complete wedding vintage car rental service."
      contentTitle="Vintage Car Rental Majura Gate: Classic Car Wedding in Central Surat"
      services={[
        { title: "Vintage Car Rental", desc: "Premium vintage car for wedding" },
        { title: "Classic Car Wedding", desc: "Elegant classic vintage cars wedding" },
        { title: "Wedding Vintage Car", desc: "Wedding vintage car on rent" },
        { title: "Baraat Car Service", desc: "Vintage wedding baraat car rental" },
        { title: "Rolls Royce Rental", desc: "Rolls Royce vintage car rental wedding" },
        { title: "Open Top Service", desc: "Open top vintage car wedding" },
      ]}
      relatedLinks={[
        { href: "/surat", label: "Vintage Car Rental Surat" },
        { href: "/athwa", label: "Athwa" },
        { href: "/adajan", label: "Adajan" },
        { href: "/city-light", label: "City Light" },
        { href: "/wedding-car", label: "Wedding Car" },
      ]}
    >
      <p className="text-lg leading-relaxed mb-8">
        Majura Gate represents Surat's commercial heart—a bustling central area where established businesses and traditional market families celebrate with vibrant energy. <strong>ROYALS - THE BARODE VINTAGE CARS</strong> provides premium <strong>vintage car rental</strong> and <strong>classic car wedding</strong> services to Majura Gate's central community. Our <strong>vintage wedding car rental</strong> collection brings royal elegance to heart-of-city celebrations.
      </p>

      <h3>Central Wedding Vintage Car On Rent</h3>
      
      <p className="leading-relaxed mb-6">
        Majura Gate's business families celebrate with traditional grandeur. Our <strong>wedding vintage car on rent</strong> services complement this central location's energy. Every <strong>vintage car for wedding</strong> stands out magnificently in Majura Gate's bustling atmosphere.
      </p>

      <p className="leading-relaxed mb-6">
        Our <strong>wedding vintage car rental service</strong> provides premium <strong>wedding vintage cars delivery</strong> to central Majura Gate. The <strong>vintage wedding car hire</strong> experience navigates city-center celebrations through <strong>classic vintage cars wedding</strong> excellence.
      </p>

      <h3>Classic Car Wedding in Central Majura Gate</h3>

      <p className="leading-relaxed mb-6">
        Majura Gate's established venues and traditional halls host grand celebrations. Our <strong>classic car wedding</strong> services include:
      </p>

      <ul className="list-disc pl-6 mb-8 space-y-2 text-muted-foreground">
        <li><strong>Vintage car rental wedding</strong> for business families</li>
        <li><strong>Classic car rental wedding</strong> at central venues</li>
        <li><strong>Open top vintage car wedding</strong> marketplace arrivals</li>
        <li><strong>Vintage car on rent for shaadi</strong> with traditional styling</li>
        <li><strong>Antique car for bride groom</strong> urban photography</li>
      </ul>

      <h3>Vintage Wedding Baraat Car Rental</h3>

      <p className="leading-relaxed mb-6">
        Majura Gate's central location creates impressive procession impact. Our <strong>vintage wedding baraat car rental</strong> navigates city celebrations:
      </p>

      <ul className="list-disc pl-6 mb-8 space-y-2 text-muted-foreground">
        <li><strong>Open vintage car wedding</strong> through central Majura Gate</li>
        <li><strong>Wedding car vintage</strong> with festive decoration</li>
        <li><strong>Vintage car rental for marriage</strong> marketplace processions</li>
        <li>Central route planning expertise</li>
        <li>Traffic-smart timing</li>
      </ul>

      <h3>Rolls Royce Vintage Car Rental Wedding</h3>

      <p className="leading-relaxed mb-6">
        Majura Gate's successful traders deserve prestigious options. Our <strong>Rolls Royce vintage car rental wedding</strong> service provides central prestige. The <strong>vintage Rolls Royce wedding car</strong> represents established <strong>luxury vintage car on hire wedding</strong> choice.
      </p>

      <h4>Central Fleet</h4>
      <p className="leading-relaxed mb-6">
        Our <strong>vintage wedding car service</strong> features automobiles commanding attention in busy settings. The <strong>classic vintage cars wedding</strong> collection includes vehicles that shine amid Majura Gate's energy.
      </p>

      <h3>Vintage Car on Rent for Shaadi</h3>

      <p className="leading-relaxed mb-6">
        Majura Gate weddings celebrate with traditional vibrancy. Our <strong>vintage car on rent for shaadi</strong> services support:
      </p>

      <ul className="list-disc pl-6 mb-8 space-y-2 text-muted-foreground">
        <li>Traditional engagement ceremonies</li>
        <li>Vibrant pre-wedding events</li>
        <li>Complete <strong>vintage wedding car hire</strong> packages</li>
        <li>Central venue coordination</li>
        <li>Festive vidaai celebrations</li>
      </ul>

      <h3>Antique Car for Bride Groom</h3>

      <p className="leading-relaxed mb-6">
        Majura Gate offers urban photography opportunities. Our <strong>antique car for bride groom</strong> services include:
      </p>

      <ul className="list-disc pl-6 mb-8 space-y-2 text-muted-foreground">
        <li>Urban backdrop photography</li>
        <li>Commercial area shoots</li>
        <li>City-life couple sessions</li>
        <li>Traditional styling</li>
        <li>Extended family portraits</li>
      </ul>

      <h3>Wedding Vintage Cars Delivery</h3>

      <p className="leading-relaxed mb-6">
        Our <strong>wedding vintage cars delivery</strong> to Majura Gate ensures navigation expertise:
      </p>

      <ul className="list-disc pl-6 mb-8 space-y-2 text-muted-foreground">
        <li><strong>Vintage car rental from Vadodara</strong> careful delivery</li>
        <li>City-ready vehicles</li>
        <li>Central-area chauffeurs</li>
        <li>Traffic-aware coordination</li>
        <li>Parking arrangement support</li>
      </ul>

      <h3>Wedding Vintage Car Rental Service</h3>

      <p className="leading-relaxed mb-6">
        Our <strong>wedding vintage car rental service</strong> meets central Surat standards:
      </p>

      <ul className="list-disc pl-6 mb-8 space-y-2 text-muted-foreground">
        <li>City-center <strong>vintage car rental</strong> service</li>
        <li>Urban-experienced chauffeurs</li>
        <li>Central <strong>classic car wedding</strong> coordination</li>
        <li>Flexible timing packages</li>
        <li>City-savvy support</li>
      </ul>

      <h3>Book Majura Gate Vintage Car Service</h3>

      <p className="leading-relaxed mb-6">
        Celebrate in Majura Gate with our <strong>vintage car rental wedding</strong> services. From <strong>open top vintage car wedding</strong> arrivals to central <strong>vintage wedding car service</strong>, we deliver city excellence.
      </p>

      <p className="leading-relaxed mb-8 text-lg font-medium">
        Contact us at <strong>+91 88306 12287</strong> or email <strong>info@royalsvintagecar.com</strong> for <strong>vintage car for wedding</strong> bookings. Visit ROYALS - THE BARODE VINTAGE CARS at Windsor Plaza, RC Dutt Road, Alkapuri, Vadodara. Central <strong>classic car rental wedding</strong> for Majura Gate!
      </p>    </KeywordPageLayout>
    <FooterNew />
    </>
  )
}
