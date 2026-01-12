/**
 * SSG (Static Site Generation) Page
 * Pre-rendered at build time for maximum performance
 * Revalidates every 24 hours for fresh content
 */

export const revalidate = 86400 // Revalidate every 24 hours

export const metadata = formatMetadata(getPageMetadata("gandhinagar"), "https://royalsvintagecars.com/gandhinagar")


import { getPageMetadata, formatMetadata } from "@/lib/page-metadata"
import { KeywordPageLayout } from "@/components/keyword-page-layout"
import { FooterNew } from "@/components/footer-new"

export default function VintageCarRentalGandhinagarPage() {
  return (
    <>
      <KeywordPageLayout
      badge="Gandhinagar, Gujarat"
      title="Vintage Car Rental in Gandhinagar"
      subtitle="Premium vintage car rental and classic car wedding services in Gandhinagar. Luxury vintage wedding car hire, Rolls Royce rental, and complete wedding vintage car rental service for government and professional families."
      contentTitle="Vintage Car Rental Gandhinagar: Classic Car Wedding in the Capital City"
      services={[
        { title: "Vintage Car Rental", desc: "Premium vintage car for wedding" },
        { title: "Classic Car Wedding", desc: "Elegant classic vintage cars wedding" },
        { title: "Wedding Vintage Car", desc: "Wedding vintage car on rent" },
        { title: "Baraat Car Service", desc: "Vintage wedding baraat car rental" },
        { title: "Rolls Royce Rental", desc: "Rolls Royce vintage car rental wedding" },
        { title: "Open Top Service", desc: "Open top vintage car wedding" },
      ]}
      relatedLinks={[
        { href: "/ahmedabad", label: "Ahmedabad" },
        { href: "/mehsana", label: "Mehsana" },
        { href: "/palanpur", label: "Palanpur" },
        { href: "/vadodara", label: "Vadodara" },
        { href: "/wedding-car", label: "Wedding Car" },
      ]}
    >
      <p className="text-lg leading-relaxed mb-8">
        Gandhinagar stands as Gujarat's capital city—a planned metropolis of governmental prestige and professional excellence where accomplished administrators, civil servants, and educated families celebrate with formal elegance and refined sensibility. <strong>ROYALS - THE BARODE VINTAGE CARS</strong> provides premium <strong>vintage car rental</strong> and <strong>classic car wedding</strong> services throughout Gandhinagar. Our <strong>vintage wedding car rental</strong> collection honors this capital city's sophisticated character and official prominence.
      </p>

      <h3>Capital City Wedding Vintage Car On Rent</h3>
      
      <p className="leading-relaxed mb-6">
        Gandhinagar's governmental officials and professional families celebrate with formal dignity and refined taste. Our <strong>wedding vintage car on rent</strong> services match this prestigious sensibility. Every <strong>vintage car for wedding</strong> reflects Gandhinagar's capital status.
      </p>

      <p className="leading-relaxed mb-6">
        Our <strong>wedding vintage car rental service</strong> provides premium <strong>wedding vintage cars delivery</strong> throughout Gandhinagar. The <strong>vintage wedding car hire</strong> experience connects governmental prestige with celebration through <strong>classic vintage cars wedding</strong> dignity.
      </p>

      <h3>Classic Car Wedding in Capital Gandhinagar</h3>

      <p className="leading-relaxed mb-6">
        Gandhinagar's official venues and government-proximate spaces host formal celebrations. Our <strong>classic car wedding</strong> services include:
      </p>

      <ul className="list-disc pl-6 mb-8 space-y-2 text-muted-foreground">
        <li><strong>Vintage car rental wedding</strong> for official families</li>
        <li><strong>Classic car rental wedding</strong> at prestigious venues</li>
        <li><strong>Open top vintage car wedding</strong> dignified arrivals</li>
        <li><strong>Vintage car on rent for shaadi</strong> with formal styling</li>
        <li><strong>Antique car for bride groom</strong> official photography</li>
      </ul>

      <h3>Vintage Wedding Baraat Car Rental</h3>

      <p className="leading-relaxed mb-6">
        Gandhinagar's planned streets create dignified procession routes. Our <strong>vintage wedding baraat car rental</strong> honors this capital city's traditions:
      </p>

      <ul className="list-disc pl-6 mb-8 space-y-2 text-muted-foreground">
        <li><strong>Open vintage car wedding</strong> through capital Gandhinagar</li>
        <li><strong>Wedding car vintage</strong> with formal decoration</li>
        <li><strong>Vintage car rental for marriage</strong> prestigious processions</li>
        <li>Capital-city route planning</li>
        <li>Official coordination</li>
      </ul>

      <h3>Rolls Royce Vintage Car Rental Wedding</h3>

      <p className="leading-relaxed mb-6">
        Gandhinagar's government officials deserve distinguished luxury. Our <strong>Rolls Royce vintage car rental wedding</strong> service provides prestige. The <strong>vintage Rolls Royce wedding car</strong> represents <strong>luxury vintage car on hire wedding</strong> excellence for capital celebrations.
      </p>

      <h4>Capital Prestige Fleet</h4>
      <p className="leading-relaxed mb-6">
        Our <strong>vintage wedding car service</strong> features automobiles honoring Gandhinagar's governmental importance. The <strong>classic vintage cars wedding</strong> collection includes vehicles matching this capital city's official character.
      </p>

      <h3>Vintage Car on Rent for Shaadi</h3>

      <p className="leading-relaxed mb-6">
        Gandhinagar weddings celebrate professional achievement and governmental status. Our <strong>vintage car on rent for shaadi</strong> services support:
      </p>

      <ul className="list-disc pl-6 mb-8 space-y-2 text-muted-foreground">
        <li>Formal engagement celebrations</li>
        <li>Prestigious pre-wedding events</li>
        <li>Complete <strong>vintage wedding car hire</strong> packages</li>
        <li>Official venue coordination</li>
        <li>Dignified vidaai ceremonies</li>
      </ul>

      <h3>Antique Car for Bride Groom</h3>

      <p className="leading-relaxed mb-6">
        Gandhinagar offers official photography settings. Our <strong>antique car for bride groom</strong> services include:
      </p>

      <ul className="list-disc pl-6 mb-8 space-y-2 text-muted-foreground">
        <li>Government building photography</li>
        <li>Capital landmark shoots</li>
        <li>Formal venue sessions</li>
        <li>Professional couple styling</li>
        <li>Official family portraits</li>
      </ul>

      <h3>Wedding Vintage Cars Delivery</h3>

      <p className="leading-relaxed mb-6">
        Our <strong>wedding vintage cars delivery</strong> to Gandhinagar ensures official standards:
      </p>

      <ul className="list-disc pl-6 mb-8 space-y-2 text-muted-foreground">
        <li><strong>Vintage car rental from Vadodara</strong> reliable delivery</li>
        <li>Premium vehicle presentation</li>
        <li>Professional chauffeurs</li>
        <li>Official area coordination</li>
        <li>Complete support services</li>
      </ul>

      <h3>Wedding Vintage Car Rental Service</h3>

      <p className="leading-relaxed mb-6">
        Our <strong>wedding vintage car rental service</strong> meets Gandhinagar standards:
      </p>

      <ul className="list-disc pl-6 mb-8 space-y-2 text-muted-foreground">
        <li>Formal <strong>vintage car rental</strong> service</li>
        <li>Professional chauffeurs</li>
        <li>Prestigious <strong>classic car wedding</strong> coordination</li>
        <li>Flexible packages</li>
        <li>Official support</li>
      </ul>

      <h3>Book Gandhinagar Vintage Car Service</h3>

      <p className="leading-relaxed mb-6">
        Celebrate in Gandhinagar with our <strong>vintage car rental wedding</strong> services. From <strong>open top vintage car wedding</strong> arrivals to formal <strong>vintage wedding car service</strong>, we honor governmental prestige.
      </p>

      <p className="leading-relaxed mb-8 text-lg font-medium">
        Contact us at <strong>+91 88306 12287</strong> or email <strong>info@royalsvintagecar.com</strong> for <strong>vintage car for wedding</strong> bookings. Visit ROYALS - THE BARODE VINTAGE CARS at Windsor Plaza, RC Dutt Road, Alkapuri, Vadodara. Premium <strong>classic car rental wedding</strong> for Gandhinagar!
      </p>    </KeywordPageLayout>
    <FooterNew />
    </>
  )
}
