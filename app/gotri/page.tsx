/**
 * SSG (Static Site Generation) Page
 * Pre-rendered at build time for maximum performance
 * Revalidates every 24 hours for fresh content
 */

export const revalidate = 86400 // Revalidate every 24 hours

export const metadata = formatMetadata(getPageMetadata("gotri"), "https://royalsvintagecars.com/gotri")


import { getPageMetadata, formatMetadata } from "@/lib/page-metadata"
import { KeywordPageLayout } from "@/components/keyword-page-layout"
import { FooterNew } from "@/components/footer-new"

export default function VintageCarRentalGotriPage() {
  return (
    <>
      <KeywordPageLayout
      badge="Gotri, Vadodara"
      title="Vintage Car Rental in Gotri, Vadodara"
      subtitle="Premium vintage car rental and classic car wedding services in Gotri. Luxury vintage wedding car hire, Rolls Royce rental, and wedding vintage car on rent for celebrations."
      contentTitle="Vintage Car Rental Gotri: Classic Car Wedding Excellence"
      services={[
        { title: "Vintage Car Rental", desc: "Premium vintage car for wedding" },
        { title: "Classic Car Wedding", desc: "Elegant classic vintage cars wedding" },
        { title: "Wedding Vintage Car", desc: "Wedding vintage car on rent services" },
        { title: "Baraat Car Service", desc: "Vintage wedding baraat car rental" },
        { title: "Rolls Royce Rental", desc: "Rolls Royce vintage car rental wedding" },
        { title: "Open Top Service", desc: "Open top vintage car wedding" },
      ]}
      relatedLinks={[
        { href: "/vadodara", label: "Vintage Car Rental Vadodara" },
        { href: "/alkapuri", label: "Alkapuri" },
        { href: "/akota", label: "Akota" },
        { href: "/sevasi", label: "Sevasi" },
        { href: "/wedding-car", label: "Wedding Car" },
      ]}
    >
      <p className="text-lg leading-relaxed mb-8">
        Gotri has emerged as one of Vadodara's most desirable residential areas, home to modern families who appreciate quality and elegance. <strong>ROYALS - THE BARODE VINTAGE CARS</strong> brings premium <strong>vintage car rental</strong> and <strong>classic car wedding</strong> services to this thriving community. Our <strong>vintage wedding car rental</strong> collection adds timeless elegance to celebrations, offering the finest <strong>car rental wedding</strong> experience in Gotri.
      </p>

      <h3>Premier Wedding Vintage Car On Rent in Gotri</h3>
      
      <p className="leading-relaxed mb-6">
        Gotri's residents represent modern Vadodara—successful professionals and families who value distinction. Our <strong>wedding vintage car on rent</strong> services appeal to this sensibility, offering <strong>vintage car for wedding</strong> celebrations that reflect appreciation for quality. Our <strong>wedding vintage car rental service</strong> ensures every Gotri celebration exceeds expectations.
      </p>

      <p className="leading-relaxed mb-6">
        As specialists in <strong>vintage car rental from Vadodara</strong>, we provide seamless <strong>wedding vintage cars delivery</strong> throughout Gotri. Our <strong>vintage wedding car hire</strong> options range from elegant sedans to magnificent <strong>classic vintage cars wedding</strong> collections.
      </p>

      <h3>Classic Car Wedding Services</h3>

      <p className="leading-relaxed mb-6">
        Gotri's spacious venues and well-planned roads make it ideal for <strong>classic car wedding</strong> celebrations. Our comprehensive services include:
      </p>

      <ul className="list-disc pl-6 mb-8 space-y-2 text-muted-foreground">
        <li><strong>Vintage car rental wedding</strong> packages for all celebrations</li>
        <li><strong>Classic car rental wedding</strong> for traditional ceremonies</li>
        <li><strong>Open top vintage car wedding</strong> grand entrances</li>
        <li><strong>Vintage car on rent for shaadi</strong> with decorations</li>
        <li><strong>Antique car for bride groom</strong> photography sessions</li>
      </ul>

      <h3>Vintage Wedding Baraat Car Rental</h3>

      <p className="leading-relaxed mb-6">
        Gotri's wide streets accommodate spectacular processions. Our <strong>vintage wedding baraat car rental</strong> services create unforgettable moments:
      </p>

      <ul className="list-disc pl-6 mb-8 space-y-2 text-muted-foreground">
        <li><strong>Open vintage car wedding</strong> processions through Gotri</li>
        <li><strong>Wedding car vintage</strong> decorated for maximum impact</li>
        <li><strong>Vintage car rental for marriage</strong> ceremonies</li>
        <li>Coordination with band and DJ services</li>
        <li>Photography-friendly route planning</li>
      </ul>

      <h3>Rolls Royce Vintage Car Rental Wedding</h3>

      <p className="leading-relaxed mb-6">
        For ultimate prestige, our <strong>Rolls Royce vintage car rental wedding</strong> service offers unmatched elegance. The <strong>vintage Rolls Royce wedding car</strong> represents the finest <strong>luxury vintage car on hire wedding</strong> option for Gotri's discerning families.
      </p>

      <h4>Premium Fleet Selection</h4>
      <p className="leading-relaxed mb-6">
        Our <strong>vintage wedding car service</strong> features impeccably maintained vehicles. The <strong>classic vintage cars wedding</strong> fleet includes rare automobiles that add extraordinary character to Gotri celebrations.
      </p>

      <h3>Vintage Car on Rent for Shaadi</h3>

      <p className="leading-relaxed mb-6">
        Gotri's diverse community celebrates weddings with various traditions. Our <strong>vintage car on rent for shaadi</strong> services support every ceremony:
      </p>

      <ul className="list-disc pl-6 mb-8 space-y-2 text-muted-foreground">
        <li>Mehndi and sangeet arrivals</li>
        <li>Pre-wedding function transport</li>
        <li>Complete <strong>vintage wedding car hire</strong> for main ceremony</li>
        <li>Reception grand entrances</li>
        <li>Vidaai emotional departures</li>
      </ul>

      <h3>Antique Car for Bride Groom</h3>

      <p className="leading-relaxed mb-6">
        Gotri's beautiful neighborhoods offer excellent photography settings. Our <strong>antique car for bride groom</strong> services include:
      </p>

      <ul className="list-disc pl-6 mb-8 space-y-2 text-muted-foreground">
        <li>Society garden backdrops</li>
        <li>Modern architecture contrasts</li>
        <li>Couple's private transport</li>
        <li>Romantic decoration options</li>
        <li>Pre-wedding shoot coordination</li>
      </ul>

      <h3>Wedding Vintage Cars Delivery</h3>

      <p className="leading-relaxed mb-6">
        Our <strong>wedding vintage cars delivery</strong> to Gotri ensures perfection:
      </p>

      <ul className="list-disc pl-6 mb-8 space-y-2 text-muted-foreground">
        <li>On-time vehicle arrival</li>
        <li>Pre-event decoration</li>
        <li>Society entry coordination</li>
        <li>Professional chauffeur briefing</li>
        <li>Backup arrangements ready</li>
      </ul>

      <h3>Wedding Vintage Car Rental Service Quality</h3>

      <p className="leading-relaxed mb-6">
        Our <strong>wedding vintage car rental service</strong> maintains premium standards:
      </p>

      <ul className="list-disc pl-6 mb-8 space-y-2 text-muted-foreground">
        <li>Immaculate <strong>vintage car rental</strong> presentation</li>
        <li>Professional uniformed chauffeurs</li>
        <li>Flexible <strong>classic car wedding</strong> packages</li>
        <li>Event planner coordination</li>
        <li>Comprehensive insurance coverage</li>
      </ul>

      <h3>Book Gotri Vintage Car Rental</h3>

      <p className="leading-relaxed mb-6">
        Elevate your Gotri celebration with our <strong>vintage car rental wedding</strong> services. From <strong>open top vintage car wedding</strong> arrivals to elegant <strong>vintage wedding car service</strong>, we deliver excellence.
      </p>

      <p className="leading-relaxed mb-8 text-lg font-medium">
        Contact us at <strong>+91 88306 12287</strong> or email <strong>info@royalsvintagecar.com</strong> for <strong>vintage car for wedding</strong> bookings. Visit ROYALS - THE BARODE VINTAGE CARS at Windsor Plaza, RC Dutt Road, Alkapuri, Vadodara. Premium <strong>classic car rental wedding</strong> for Gotri!
      </p>    </KeywordPageLayout>
    <FooterNew />
    </>
  )
}
