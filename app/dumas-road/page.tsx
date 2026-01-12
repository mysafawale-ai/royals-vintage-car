/**
 * SSG (Static Site Generation) Page
 * Pre-rendered at build time for maximum performance
 * Revalidates every 24 hours for fresh content
 */

export const revalidate = 86400 // Revalidate every 24 hours

export const metadata = formatMetadata(getPageMetadata("dumas-road"), "https://royalsvintagecars.com/dumas-road")


import { getPageMetadata, formatMetadata } from "@/lib/page-metadata"
import { KeywordPageLayout } from "@/components/keyword-page-layout"
import { FooterNew } from "@/components/footer-new"

export default function VintageCarRentalDumasRoadPage() {
  return (
    <>
      <KeywordPageLayout
      badge="Dumas Road, Surat"
      title="Vintage Car Rental in Dumas Road, Surat"
      subtitle="Premium vintage car rental and classic car wedding services in Dumas Road. Luxury vintage wedding car hire, Rolls Royce rental, and complete wedding vintage car rental service."
      contentTitle="Vintage Car Rental Dumas Road: Classic Car Wedding on Surat's Coastal Route"
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
        { href: "/vesu", label: "Vesu" },
        { href: "/adajan", label: "Adajan" },
        { href: "/piplod", label: "Piplod" },
        { href: "/wedding-car", label: "Wedding Car" },
      ]}
    >
      <p className="text-lg leading-relaxed mb-8">
        Dumas Road represents Surat's scenic beauty—the famous coastal route to Dumas Beach where beachside resorts and destination venues create magical wedding settings. <strong>ROYALS - THE BARODE VINTAGE CARS</strong> provides premium <strong>vintage car rental</strong> and <strong>classic car wedding</strong> services along this picturesque route. Our <strong>vintage wedding car rental</strong> collection completes destination wedding dreams.
      </p>

      <h3>Beachside Wedding Vintage Car On Rent</h3>
      
      <p className="leading-relaxed mb-6">
        Dumas Road's destination weddings deserve special transportation. Our <strong>wedding vintage car on rent</strong> services create picture-perfect arrivals. Every <strong>vintage car for wedding</strong> photographs beautifully against Dumas Road's scenic backdrop.
      </p>

      <p className="leading-relaxed mb-6">
        Our <strong>wedding vintage car rental service</strong> provides scenic <strong>wedding vintage cars delivery</strong> along Dumas Road. The <strong>vintage wedding car hire</strong> experience offers destination elegance through <strong>classic vintage cars wedding</strong> sophistication.
      </p>

      <h3>Classic Car Wedding on Scenic Dumas Road</h3>

      <p className="leading-relaxed mb-6">
        Dumas Road's resorts and beachside venues host destination celebrations. Our <strong>classic car wedding</strong> services include:
      </p>

      <ul className="list-disc pl-6 mb-8 space-y-2 text-muted-foreground">
        <li><strong>Vintage car rental wedding</strong> at coastal venues</li>
        <li><strong>Classic car rental wedding</strong> at beach resorts</li>
        <li><strong>Open top vintage car wedding</strong> seaside arrivals</li>
        <li><strong>Vintage car on rent for shaadi</strong> with coastal styling</li>
        <li><strong>Antique car for bride groom</strong> beach photography</li>
      </ul>

      <h3>Vintage Wedding Baraat Car Rental</h3>

      <p className="leading-relaxed mb-6">
        Dumas Road's scenic stretch creates magical procession routes. Our <strong>vintage wedding baraat car rental</strong> offers cinematic celebrations:
      </p>

      <ul className="list-disc pl-6 mb-8 space-y-2 text-muted-foreground">
        <li><strong>Open vintage car wedding</strong> along scenic Dumas Road</li>
        <li><strong>Wedding car vintage</strong> with coastal decoration</li>
        <li><strong>Vintage car rental for marriage</strong> beachside processions</li>
        <li>Scenic route planning</li>
        <li>Golden hour coordination</li>
      </ul>

      <h3>Rolls Royce Vintage Car Rental Wedding</h3>

      <p className="leading-relaxed mb-6">
        Dumas Road destination weddings deserve ultimate luxury. Our <strong>Rolls Royce vintage car rental wedding</strong> service provides cinematic prestige. The <strong>vintage Rolls Royce wedding car</strong> represents destination <strong>luxury vintage car on hire wedding</strong> choice.
      </p>

      <h4>Coastal Fleet</h4>
      <p className="leading-relaxed mb-6">
        Our <strong>vintage wedding car service</strong> features automobiles perfect for coastal photography. The <strong>classic vintage cars wedding</strong> collection includes vehicles that create stunning seaside imagery.
      </p>

      <h3>Vintage Car on Rent for Shaadi</h3>

      <p className="leading-relaxed mb-6">
        Dumas Road weddings embrace coastal romance. Our <strong>vintage car on rent for shaadi</strong> services support:
      </p>

      <ul className="list-disc pl-6 mb-8 space-y-2 text-muted-foreground">
        <li>Beachside engagement celebrations</li>
        <li>Coastal pre-wedding events</li>
        <li>Complete <strong>vintage wedding car hire</strong> packages</li>
        <li>Resort-to-beach transport</li>
        <li>Sunset vidaai arrangements</li>
      </ul>

      <h3>Antique Car for Bride Groom</h3>

      <p className="leading-relaxed mb-6">
        Dumas Road offers spectacular photography. Our <strong>antique car for bride groom</strong> services include:
      </p>

      <ul className="list-disc pl-6 mb-8 space-y-2 text-muted-foreground">
        <li>Beach backdrop photography</li>
        <li>Coastal road shoots</li>
        <li>Sunset couple sessions</li>
        <li>Seaside styling</li>
        <li>Resort garden portraits</li>
      </ul>

      <h3>Wedding Vintage Cars Delivery</h3>

      <p className="leading-relaxed mb-6">
        Our <strong>wedding vintage cars delivery</strong> to Dumas Road ensures scenic elegance:
      </p>

      <ul className="list-disc pl-6 mb-8 space-y-2 text-muted-foreground">
        <li><strong>Vintage car rental from Vadodara</strong> careful delivery</li>
        <li>Photo-ready vehicle presentation</li>
        <li>Scenic-route chauffeurs</li>
        <li>Resort coordination</li>
        <li>Weather-aware support</li>
      </ul>

      <h3>Wedding Vintage Car Rental Service</h3>

      <p className="leading-relaxed mb-6">
        Our <strong>wedding vintage car rental service</strong> meets destination standards:
      </p>

      <ul className="list-disc pl-6 mb-8 space-y-2 text-muted-foreground">
        <li>Destination <strong>vintage car rental</strong> service</li>
        <li>Scenic-route chauffeurs</li>
        <li>Coastal <strong>classic car wedding</strong> coordination</li>
        <li>Resort partnership packages</li>
        <li>Destination support</li>
      </ul>

      <h3>Book Dumas Road Vintage Car Service</h3>

      <p className="leading-relaxed mb-6">
        Celebrate on Dumas Road with our <strong>vintage car rental wedding</strong> services. From <strong>open top vintage car wedding</strong> arrivals to scenic <strong>vintage wedding car service</strong>, we complete destination dreams.
      </p>

      <p className="leading-relaxed mb-8 text-lg font-medium">
        Contact us at <strong>+91 88306 12287</strong> or email <strong>info@royalsvintagecar.com</strong> for <strong>vintage car for wedding</strong> bookings. Visit ROYALS - THE BARODE VINTAGE CARS at Windsor Plaza, RC Dutt Road, Alkapuri, Vadodara. Scenic <strong>classic car rental wedding</strong> for Dumas Road!
      </p>    </KeywordPageLayout>
    <FooterNew />
    </>
  )
}
