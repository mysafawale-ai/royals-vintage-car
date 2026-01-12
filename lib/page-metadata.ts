/**
 * SEO Metadata Configuration for All Pages
 * Includes Title, Description, OG tags for ranking faster
 * Each page has unique keywords targeting the area/city/service
 */

export interface PageMetadata {
  title: string
  description: string
  keywords: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
}

const baseKeywords = "vintage car rental, wedding car, classic car, marriage car, baraat car, shaadi car"

export const pageMetadata: Record<string, PageMetadata> = {
  // Vadodara Areas
  vadodara: {
    title: "Vintage Car Rental in Vadodara | Premium Wedding Car Hire",
    description: "Book luxury vintage cars for weddings in Vadodara. Premium Rolls Royce, classic cars for baraat, shaadi & marriage ceremonies. Professional wedding car rental service.",
    keywords: "vintage car rental Vadodara, wedding car Vadodara, classic car wedding Vadodara, Rolls Royce rental Vadodara, baraat car Vadodara, marriage car rental Vadodara, shaadi car Vadodara, vintage wedding car hire Vadodara",
    ogTitle: "Vintage Car Rental in Vadodara - Premium Wedding Cars",
    ogDescription: "Book luxury vintage wedding cars in Vadodara for your special day. Professional rental service with Rolls Royce, classic & open top vintage cars."
  },
  alkapuri: {
    title: "Vintage Car Rental in Alkapuri Vadodara | Wedding Car Hire",
    description: "Premium vintage car rental in Alkapuri, Vadodara. Book luxury wedding cars for baraat, shaadi, bride entry & groom entry ceremonies.",
    keywords: "vintage car Alkapuri, wedding car Alkapuri Vadodara, classic car rental Alkapuri, Rolls Royce Alkapuri, vintage wedding car Alkapuri, marriage car rental Alkapuri",
    ogTitle: "Vintage Car Rental in Alkapuri - Wedding & Baraat Cars",
    ogDescription: "Luxury vintage cars available in Alkapuri, Vadodara for weddings, baraat, and special occasions."
  },
  akota: {
    title: "Vintage Car Rental in Akota Vadodara | Wedding Car Service",
    description: "Professional vintage car rental in Akota. Luxury wedding cars for all occasions including baraat, shaadi, bride entry & reception.",
    keywords: "vintage car Akota, wedding car Akota Vadodara, classic car rental Akota, vintage wedding car hire Akota, baraat car Akota, marriage car Akota",
    ogTitle: "Vintage Car Rental in Akota Vadodara - Premium Wedding Cars",
    ogDescription: "Book premium vintage wedding cars in Akota for your celebration."
  },
  
  // Ahmedabad
  ahmedabad: {
    title: "Vintage Car Rental in Ahmedabad | Luxury Wedding Car Hire",
    description: "Luxury vintage car rental in Ahmedabad for weddings. Premium Rolls Royce, classic cars for baraat, shaadi & marriage ceremonies in all areas.",
    keywords: "vintage car rental Ahmedabad, wedding car Ahmedabad, classic car wedding Ahmedabad, Rolls Royce Ahmedabad, baraat car Ahmedabad, marriage car Ahmedabad, vintage wedding car Ahmedabad",
    ogTitle: "Vintage Car Rental in Ahmedabad - Premium Wedding Cars",
    ogDescription: "Book luxury vintage wedding cars in Ahmedabad. Professional service with classic cars, Rolls Royce, and vintage vehicles for all occasions."
  },
  satellite: {
    title: "Vintage Car Rental in Satellite Ahmedabad | Wedding Car Hire",
    description: "Premium vintage car rental in Satellite, Ahmedabad. Luxury wedding cars for baraat, shaadi, bride entry & groom entry ceremonies.",
    keywords: "vintage car Satellite Ahmedabad, wedding car Satellite, classic car rental Satellite, vintage wedding car hire Satellite, marriage car Satellite",
    ogTitle: "Vintage Car Rental in Satellite Ahmedabad - Wedding Cars",
    ogDescription: "Luxury vintage wedding cars available in Satellite, Ahmedabad for all wedding occasions."
  },
  vastrapur: {
    title: "Vintage Car Rental in Vastrapur Ahmedabad | Wedding Car Service",
    description: "Professional vintage car rental in Vastrapur, Ahmedabad. Luxury wedding cars for all ceremonies including baraat, shaadi & reception.",
    keywords: "vintage car Vastrapur, wedding car Vastrapur Ahmedabad, classic car rental Vastrapur, vintage wedding car Vastrapur, baraat car Vastrapur",
    ogTitle: "Vintage Car Rental in Vastrapur Ahmedabad - Premium Wedding Cars",
    ogDescription: "Book premium vintage wedding cars in Vastrapur for your special celebration."
  },
  
  // Surat
  surat: {
    title: "Vintage Car Rental in Surat | Luxury Wedding Car Hire",
    description: "Luxury vintage car rental in Surat for weddings. Premium classic cars, Rolls Royce for baraat, shaadi & marriage ceremonies across all areas.",
    keywords: "vintage car rental Surat, wedding car Surat, classic car wedding Surat, Rolls Royce Surat, baraat car Surat, marriage car Surat, vintage wedding car Surat",
    ogTitle: "Vintage Car Rental in Surat - Premium Wedding Cars",
    ogDescription: "Book luxury vintage wedding cars in Surat. Professional rental service with classic cars and vintage vehicles for all wedding occasions."
  },
  adajan: {
    title: "Vintage Car Rental in Adajan Surat | Wedding Car Hire",
    description: "Premium vintage car rental in Adajan, Surat. Luxury wedding cars for baraat, shaadi, bride entry & groom entry ceremonies.",
    keywords: "vintage car Adajan, wedding car Adajan Surat, classic car rental Adajan, vintage wedding car hire Adajan, marriage car Adajan",
    ogTitle: "Vintage Car Rental in Adajan Surat - Wedding Cars",
    ogDescription: "Luxury vintage wedding cars available in Adajan, Surat for your wedding celebration."
  },
  vesu: {
    title: "Vintage Car Rental in Vesu Surat | Wedding Car Service",
    description: "Professional vintage car rental in Vesu, Surat. Luxury wedding cars for all occasions including baraat, shaadi & reception ceremonies.",
    keywords: "vintage car Vesu, wedding car Vesu Surat, classic car rental Vesu, vintage wedding car Vesu, baraat car Vesu",
    ogTitle: "Vintage Car Rental in Vesu Surat - Premium Wedding Cars",
    ogDescription: "Book premium vintage wedding cars in Vesu, Surat for your special day."
  },
  
  // Service Pages
  "vintage-car-rental": {
    title: "Vintage Car Rental Services | Luxury Wedding Cars",
    description: "Professional vintage car rental service for weddings. Premium classic cars, Rolls Royce, and luxury vehicles for baraat, shaadi & marriage ceremonies.",
    keywords: "vintage car rental, luxury car rental, classic car rental, wedding car rental, baraat car rental, marriage car rental, vintage car for wedding",
    ogTitle: "Vintage Car Rental - Luxury Wedding & Classic Cars",
    ogDescription: "Book premium vintage cars for your wedding. Professional rental service with luxury vehicles."
  },
  "wedding-car": {
    title: "Wedding Car Rental | Luxury Vintage Cars for Weddings",
    description: "Professional wedding car rental service. Premium vintage cars for baraat, shaadi, bride entry, groom entry & reception ceremonies.",
    keywords: "wedding car rental, wedding car for hire, luxury wedding car, vintage wedding car, baraat car, shaadi car, marriage car rental",
    ogTitle: "Wedding Car Rental - Premium & Luxury Wedding Cars",
    ogDescription: "Book luxury wedding cars for your special day. Professional service with vintage and classic vehicles."
  },
  "rolls-royce-wedding": {
    title: "Rolls Royce Wedding Car Rental | Luxury Vintage Cars",
    description: "Premium Rolls Royce rental for weddings. Luxury vintage car service for baraat, shaadi, bride entry & groom entry ceremonies.",
    keywords: "Rolls Royce wedding, Rolls Royce rental, luxury wedding car, premium vintage car, wedding car for wedding, luxury car rental wedding",
    ogTitle: "Rolls Royce Wedding Car Rental - Luxury & Premium Cars",
    ogDescription: "Book luxury Rolls Royce for your wedding. Premium vintage car rental service."
  },
  "baraat-car": {
    title: "Vintage Baraat Car Rental | Wedding Baraat Car Hire",
    description: "Professional baraat car rental service. Luxury vintage cars for groom entry, wedding procession & baraat ceremonies.",
    keywords: "baraat car rental, baraat car, vintage baraat car, groom entry car, wedding procession car, marriage baraat car, luxury baraat car",
    ogTitle: "Baraat Car Rental - Luxury Groom Entry & Vintage Cars",
    ogDescription: "Book luxury baraat cars for groom entry and wedding processions."
  },
  "bride-entry-car": {
    title: "Bride Entry Car Rental | Luxury Vintage Wedding Cars",
    description: "Premium bride entry car rental service. Luxury vintage cars for bride's grand entrance at wedding ceremonies.",
    keywords: "bride entry car, bride car, wedding bride car, luxury bride entry, vintage bride car, wedding car for bride, marriage bride car",
    ogTitle: "Bride Entry Car Rental - Luxury Wedding Cars",
    ogDescription: "Book luxury bride entry cars for your wedding ceremony."
  },
  "vintage-wedding-car": {
    title: "Vintage Wedding Car | Classic & Luxury Cars for Weddings",
    description: "Professional vintage wedding car rental. Premium classic cars for baraat, shaadi, bride entry, groom entry & all wedding occasions.",
    keywords: "vintage wedding car, wedding vintage car, luxury wedding car, classic wedding car, vintage car for wedding, luxury vintage car rental",
    ogTitle: "Vintage Wedding Car - Classic & Luxury Wedding Cars",
    ogDescription: "Book premium vintage cars for your wedding. Professional rental service."
  },
  "classic-car-wedding": {
    title: "Classic Car Wedding Rental | Luxury Vintage Wedding Cars",
    description: "Professional classic car rental for weddings. Premium vintage vehicles for baraat, shaadi, bride entry & groom entry ceremonies.",
    keywords: "classic car wedding, classic car rental wedding, vintage wedding car, luxury wedding car, wedding car classic, marriage car classic",
    ogTitle: "Classic Car Wedding Rental - Luxury & Vintage Cars",
    ogDescription: "Book classic vintage cars for your wedding celebration."
  },
  "open-top-vintage-car": {
    title: "Open Top Vintage Car Rental | Grand Wedding Car Hire",
    description: "Premium open top vintage car rental for weddings. Luxury convertible classic cars for baraat, shaadi & grand wedding entrances.",
    keywords: "open top vintage car, open top car wedding, convertible vintage car, luxury open top car, grand wedding car, baraat car open top",
    ogTitle: "Open Top Vintage Car - Luxury Convertible Wedding Cars",
    ogDescription: "Book luxurious open top vintage cars for your wedding."
  },
  "luxury-vintage-car": {
    title: "Luxury Vintage Car Rental | Premium Wedding Cars",
    description: "Premium luxury vintage car rental service. Exclusive classic cars for high-end weddings, baraat & special occasions.",
    keywords: "luxury vintage car, luxury car rental, premium vintage car, luxury wedding car, exclusive wedding car, high-end vintage car",
    ogTitle: "Luxury Vintage Car Rental - Premium & Exclusive Cars",
    ogDescription: "Book exclusive luxury vintage cars for premium weddings."
  },
  "marriage-car-rental": {
    title: "Marriage Car Rental | Vintage & Luxury Wedding Cars",
    description: "Professional marriage car rental service. Premium vintage cars for all wedding ceremonies, baraat, shaadi & receptions.",
    keywords: "marriage car rental, marriage car, wedding car rental, vintage car rental, luxury marriage car, wedding car for marriage",
    ogTitle: "Marriage Car Rental - Vintage & Luxury Wedding Cars",
    ogDescription: "Book premium marriage cars for your wedding celebration."
  },
  "antique-car-wedding": {
    title: "Antique Car Wedding Rental | Luxury Classic Cars",
    description: "Premium antique car rental for weddings. Luxury classic vehicles for baraat, shaadi, bride entry & groom entry ceremonies.",
    keywords: "antique car wedding, antique car rental, vintage antique car, luxury antique car, wedding antique car, classic car wedding",
    ogTitle: "Antique Car Wedding Rental - Classic & Luxury Cars",
    ogDescription: "Book antique and classic cars for your wedding."
  },

  // Additional Areas - can be extended for each area
  gotri: {
    title: "Vintage Car Rental in Gotri Vadodara | Wedding Car Hire",
    description: "Premium vintage car rental in Gotri. Luxury wedding cars for baraat, shaadi, bride entry & groom entry ceremonies.",
    keywords: "vintage car Gotri, wedding car Gotri Vadodara, classic car rental Gotri, vintage wedding car Gotri, marriage car Gotri",
    ogTitle: "Vintage Car Rental in Gotri - Wedding & Baraat Cars",
    ogDescription: "Luxury vintage cars available in Gotri, Vadodara for weddings."
  },
  
  "chandkheda": {
    title: "Vintage Car Rental in Chandkheda Ahmedabad | Wedding Car Hire",
    description: "Premium vintage car rental in Chandkheda, Ahmedabad. Luxury wedding cars for all occasions.",
    keywords: "vintage car Chandkheda, wedding car Chandkheda, classic car rental Chandkheda, vintage wedding car Chandkheda",
    ogTitle: "Vintage Car Rental in Chandkheda - Wedding Cars",
    ogDescription: "Luxury vintage cars in Chandkheda, Ahmedabad for your wedding."
  },

  "piplod": {
    title: "Vintage Car Rental in Piplod Surat | Wedding Car Hire",
    description: "Premium vintage car rental in Piplod, Surat. Luxury wedding cars for all occasions.",
    keywords: "vintage car Piplod, wedding car Piplod, classic car rental Piplod, vintage wedding car Piplod",
    ogTitle: "Vintage Car Rental in Piplod - Wedding Cars",
    ogDescription: "Luxury vintage cars in Piplod, Surat for your wedding."
  },

  "gandhinagar": {
    title: "Vintage Car Rental in Gandhinagar | Wedding Car Hire",
    description: "Premium vintage car rental in Gandhinagar. Luxury wedding cars for baraat, shaadi & marriage ceremonies.",
    keywords: "vintage car Gandhinagar, wedding car Gandhinagar, classic car rental Gandhinagar, vintage wedding car Gandhinagar",
    ogTitle: "Vintage Car Rental in Gandhinagar - Wedding Cars",
    ogDescription: "Luxury vintage cars in Gandhinagar for your wedding."
  },
}

/**
 * Generate metadata for a page
 * Falls back to base metadata if specific page not found
 */
export function getPageMetadata(route: string): PageMetadata {
  return pageMetadata[route] || {
    title: `${route.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} | Vintage Car Rental`,
    description: `Premium vintage car rental in ${route.split('-').join(' ')}. Book luxury wedding cars for all occasions.`,
    keywords: `vintage car ${route}, wedding car ${route}, classic car rental ${route}, ${baseKeywords}`,
  }
}

/**
 * Format metadata for Next.js metadata export
 */
export function formatMetadata(pageData: PageMetadata, url: string = "https://royalsvintagecars.com") {
  return {
    title: pageData.title,
    description: pageData.description,
    keywords: pageData.keywords,
    authors: [{ name: "ROYALS - THE BARODE VINTAGE CARS" }],
    creator: "ROYALS - THE BARODE VINTAGE CARS",
    metadataBase: new URL(url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: pageData.ogTitle || pageData.title,
      description: pageData.ogDescription || pageData.description,
      url: url,
      siteName: "ROYALS - THE BARODE VINTAGE CARS",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: `${url}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: pageData.ogTitle || pageData.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageData.ogTitle || pageData.title,
      description: pageData.ogDescription || pageData.description,
      images: [`${url}/og-image.jpg`],
      creator: "@royalsvintagecars",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  }
}
