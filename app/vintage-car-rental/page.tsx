/**
 * SSG (Static Site Generation) Page
 * Pre-rendered at build time for maximum performance
 * Revalidates every 24 hours for fresh content
 */

export const revalidate = 86400 // Revalidate every 24 hours


import { KeywordPageLayout } from "@/components/keyword-page-layout"
import { FooterNew } from "@/components/footer-new"

export default function VintageCarRentalPage() {
  return (
    <>
      <KeywordPageLayout
      badge="Vintage Car Rental Gujarat"
      title="Vintage Car Rental in Gujarat"
      subtitle="Experience the golden era of automobiles with our premium vintage car rental service. Classic cars for weddings, photoshoots & special events across Gujarat."
      contentTitle="Gujarat's Premier Vintage Car Rental Service"
      services={[
        { title: "Wedding Rentals", desc: "Elegant vintage cars to make your wedding day extraordinary and memorable" },
        { title: "Photoshoot Rentals", desc: "Classic automobiles as stunning props for professional photography sessions" },
        { title: "Corporate Events", desc: "Impress clients and guests with sophisticated vintage car arrivals" },
        { title: "Film Productions", desc: "Period-accurate vintage vehicles for movies, ads, and video shoots" },
        { title: "Birthday Celebrations", desc: "Make milestone birthdays unforgettable with a vintage car experience" },
        { title: "Anniversary Specials", desc: "Recreate the romance of yesteryear with a classic car ride" },
      ]}
      relatedLinks={[
        { href: "/wedding-car", label: "Wedding Car" },
        { href: "/luxury-vintage-car", label: "Luxury Vintage Car" },
        { href: "/vintage-car-photoshoot", label: "Vintage Car Photoshoot" },
        { href: "/classic-car-wedding", label: "Classic Car Wedding" },
        { href: "/antique-car-wedding", label: "Antique Car Wedding" },
      ]}
    >
      <p className="text-lg leading-relaxed mb-8">
        Welcome to <strong>ROYALS - THE BARODE VINTAGE CARS</strong>, Gujarat's most distinguished <strong>vintage car rental</strong> service. We bring the elegance, charm, and sophistication of classic automobiles to your special occasions, offering an unparalleled experience that modern vehicles simply cannot match. Whether you're planning a grand wedding, a professional photoshoot, or any celebration that deserves a touch of timeless class, our vintage car collection awaits you.
      </p>

      <h3>The Magic of Vintage Car Rentals</h3>
      
      <p className="leading-relaxed mb-6">
        There's something truly magical about <strong>vintage car rental</strong> that transcends ordinary transportation. These magnificent machines from decades past carry with them an aura of romance, prestige, and historical significance. When you rent a vintage car, you're not just hiring a vehicle—you're stepping into a time machine that transports you and your guests to an era of unmatched elegance and craftsmanship.
      </p>

      <p className="leading-relaxed mb-6">
        Our <strong>vintage car rental</strong> fleet represents the finest examples of automotive artistry from the golden age of motoring. Each vehicle has been carefully selected, lovingly restored, and meticulously maintained to ensure it delivers both the aesthetic appeal and the reliability that your special occasion demands. From gleaming chrome details to hand-stitched leather interiors, every element speaks of a time when cars were built to inspire awe.
      </p>

      <h3>Our Distinguished Vintage Car Fleet</h3>

      <p className="leading-relaxed mb-6">
        ROYALS - THE BARODE VINTAGE CARS maintains Gujarat's most impressive collection of classic automobiles available for rental. Our <strong>vintage car rental</strong> inventory includes vehicles from various eras, each with its own character and charm. We continuously expand and update our collection to offer our clients the widest selection of vintage beauties.
      </p>

      <h4>Pre-War Classics (1920s-1930s)</h4>
      <p className="leading-relaxed mb-6">
        Our pre-war collection features vehicles that defined the concept of luxury motoring. These <strong>vintage cars for rental</strong> showcase the bold, elegant designs of the art deco era. Long flowing fenders, prominent radiator grilles, and coach-built bodies characterize these exceptional automobiles. Perfect for couples seeking the most romantic and distinctive wedding car experience.
      </p>

      <h4>Post-War Elegance (1940s-1950s)</h4>
      <p className="leading-relaxed mb-6">
        The post-war era brought a new optimism to automotive design, reflected in our collection from this period. Our <strong>vintage car rental</strong> options from these decades feature streamlined designs, chrome accents, and the beginning of modern comfort features. These vehicles strike the perfect balance between classic appeal and familiar comfort.
      </p>

      <h4>Classic Era (1960s-1970s)</h4>
      <p className="leading-relaxed mb-6">
        For those who prefer more recent classics, our collection includes stunning examples from the 1960s and 1970s. These <strong>vintage rental cars</strong> combine timeless style with more contemporary amenities, offering a comfortable ride while still delivering the classic car experience that makes your event special.
      </p>

      <h3>Vintage Car Rental for Every Occasion</h3>

      <p className="leading-relaxed mb-6">
        While weddings remain our most popular <strong>vintage car rental</strong> request, we cater to a wide variety of events and occasions. Our diverse fleet and flexible rental packages allow us to serve clients across different needs and preferences.
      </p>

      <h4>Wedding Day Rentals</h4>
      <p className="leading-relaxed mb-6">
        Weddings and <strong>vintage car rentals</strong> are a match made in heaven. The romance of a classic car perfectly complements the emotion and celebration of a wedding day. Whether it's for the groom's baraat, the bride's arrival, the couple's reception entry, or the emotional vidaai, our vintage cars add an unforgettable element to your matrimonial celebrations.
      </p>

      <h4>Pre-Wedding & Wedding Photography</h4>
      <p className="leading-relaxed mb-6">
        Our <strong>vintage cars for rent</strong> serve as magnificent props for photography sessions. The timeless aesthetics of classic automobiles create stunning backdrops that elevate any photoshoot. Many photographers specifically request our vehicles for their distinctive character and the romantic ambiance they create in photographs.
      </p>

      <h4>Corporate & Brand Events</h4>
      <p className="leading-relaxed mb-6">
        Make a lasting impression at corporate events with our prestigious <strong>vintage car rental</strong> service. Product launches, brand activations, executive transportation, and client hospitality events all benefit from the unique appeal of classic automobiles. Our vintage cars communicate sophistication, attention to detail, and exceptional taste.
      </p>

      <h4>Film, Television & Advertising</h4>
      <p className="leading-relaxed mb-6">
        Production houses and advertising agencies frequently use our <strong>vintage car rental</strong> service for period-accurate vehicles. Whether you're creating a historical drama, a nostalgic advertisement, or a music video with vintage aesthetics, our collection provides authentic props that enhance production value.
      </p>

      <h3>The ROYALS Rental Experience</h3>

      <p className="leading-relaxed mb-6">
        When you choose ROYALS - THE BARODE VINTAGE CARS for your <strong>vintage car rental</strong> needs, you receive a comprehensive service that goes far beyond simply providing a vehicle. Our commitment to excellence ensures that every aspect of your rental experience is exceptional.
      </p>

      <h4>Professional Chauffeur Service</h4>
      <p className="leading-relaxed mb-6">
        Every <strong>vintage car rental</strong> includes a professional, uniformed chauffeur. Our drivers are trained not only in operating these classic vehicles but also in providing premium hospitality service. They understand the importance of punctuality, discretion, and attention to detail that special occasions demand.
      </p>

      <h4>Immaculate Vehicle Presentation</h4>
      <p className="leading-relaxed mb-6">
        Our vintage cars undergo thorough preparation before each rental. Every vehicle is cleaned, polished, and inspected to ensure it looks absolutely perfect for your event. For weddings, we add beautiful floral decorations according to your preferences and wedding theme.
      </p>

      <h4>Flexible Rental Options</h4>
      <p className="leading-relaxed mb-6">
        Our <strong>vintage car rental</strong> packages are designed to accommodate various needs. We offer hourly rentals for shorter events, half-day packages for photoshoots, full-day packages for weddings, and extended rentals for multi-day events or film productions. Custom packages can be created for unique requirements.
      </p>

      <h3>Service Coverage Across Gujarat</h3>

      <p className="leading-relaxed mb-6">
        Based in Vadodara, our <strong>vintage car rental</strong> service covers the entire state of Gujarat. We deliver our magnificent classic cars to any location, ensuring that geographic distance is never a barrier to experiencing our exceptional service.
      </p>

      <ul className="list-disc pl-6 mb-8 space-y-2 text-muted-foreground">
        <li><strong>Vadodara & Surrounding:</strong> Gotri, Alkapuri, Akota, Sayajigunj, Fatehgunj, Manjalpur, Sevasi, and all areas</li>
        <li><strong>Ahmedabad:</strong> Satellite, Vastrapur, Prahlad Nagar, Bopal, Thaltej, SG Highway, and all areas</li>
        <li><strong>Surat:</strong> Adajan, Vesu, Piplod, Athwa, City Light, and all areas</li>
        <li><strong>Other Cities:</strong> Rajkot, Bhavnagar, Anand, Nadiad, Bharuch, Gandhinagar, and all Gujarat</li>
      </ul>

      <h3>Why Choose ROYALS for Vintage Car Rental?</h3>

      <p className="leading-relaxed mb-6">
        Gujarat has several options for classic car services, but ROYALS - THE BARODE VINTAGE CARS stands apart through our unwavering commitment to quality and customer satisfaction. Our <strong>vintage car rental</strong> service is built on years of experience, a passion for classic automobiles, and a dedication to making every client's experience memorable.
      </p>

      <h4>Quality Assurance</h4>
      <p className="leading-relaxed mb-6">
        Every vehicle in our <strong>vintage car rental</strong> fleet is maintained to the highest standards. Regular servicing, careful storage, and professional care ensure our cars perform reliably while looking their absolute best. We stake our reputation on the quality of our vehicles and service.
      </p>

      <h4>Transparent Pricing</h4>
      <p className="leading-relaxed mb-6">
        Our <strong>vintage car rental</strong> rates are competitive and transparent. The price we quote includes all standard services—chauffeur, fuel, insurance, and basic decoration. There are no hidden fees or surprise charges. We believe in building trust through honest, straightforward dealings.
      </p>

      <h3>Book Your Vintage Car Rental Today</h3>

      <p className="leading-relaxed mb-6">
        Whether you're planning a wedding, organizing an event, or simply want to experience the joy of riding in a classic automobile, our <strong>vintage car rental</strong> service is ready to serve you. We encourage early booking, especially for peak wedding season dates, to ensure availability of your preferred vehicle.
      </p>

      <p className="leading-relaxed mb-8 text-lg font-medium">
        Contact us today at <strong>+91 88306 12287</strong> or email <strong>info@royalsvintagecar.com</strong> to discuss your <strong>vintage car rental</strong> requirements. Visit our facility at Windsor Plaza, RC Dutt Road, Alkapuri, Vadodara to view our magnificent collection. Let ROYALS - THE BARODE VINTAGE CARS make your next special occasion truly extraordinary!
      </p>    </KeywordPageLayout>
    <FooterNew />
    </>
  )
}
