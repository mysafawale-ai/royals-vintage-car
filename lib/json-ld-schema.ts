/**
 * JSON-LD Schema Generator
 * Creates structured data for better SEO and rich snippets
 */

export interface SchemaProps {
  pageTitle?: string
  pageDescription?: string
  pageUrl?: string
  imageUrl?: string
}

/**
 * Organization Schema
 * Describes the business
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://royalsvintagecars.com/#organization',
    name: 'ROYALS - THE BARODE VINTAGE CARS',
    image: 'https://royalsvintagecars.com/og-image.jpg',
    description:
      'Premium vintage car rental service for weddings across Gujarat. Luxury Rolls Royce, open top vintage cars, and classic vehicles for shaadi, baraat & marriage ceremonies.',
    url: 'https://royalsvintagecars.com',
    telephone: '+91 88306 12287',
    email: 'info@royalsvintagecar.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Windsor Plaza, RC Dutt Road',
      addressLocality: 'Vadodara',
      addressRegion: 'Gujarat',
      postalCode: '390007',
      addressCountry: 'IN',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Vadodara',
        url: 'https://royalsvintagecars.com/vadodara',
      },
      {
        '@type': 'City',
        name: 'Ahmedabad',
        url: 'https://royalsvintagecars.com/ahmedabad',
      },
      {
        '@type': 'City',
        name: 'Surat',
        url: 'https://royalsvintagecars.com/surat',
      },
      {
        '@type': 'State',
        name: 'Gujarat',
      },
    ],
    sameAs: [
      'https://facebook.com/royalsvintagecars',
      'https://instagram.com/royalsvintagecars',
      'https://twitter.com/royalsvintagecars',
    ],
    knowsAbout: [
      'Vintage Car Rental',
      'Wedding Car Rental',
      'Classic Car Wedding',
      'Rolls Royce Rental',
      'Baraat Car',
      'Marriage Car',
      'Bride Entry Car',
      'Groom Entry Car',
    ],
    priceRange: '₹₹₹',
    foundingDate: '2020',
    aggregateRating: {
      '@type': 'AggregateRating',
      itemReviewed: {
        '@type': 'LocalBusiness',
        name: 'ROYALS - THE BARODE VINTAGE CARS',
        url: 'https://royalsvintagecars.com',
      },
      ratingValue: '4.9',
      reviewCount: '250',
      bestRating: '5',
      worstRating: '1',
    },
  }
}

/**
 * Service Schema
 * Describes individual services
 */
export function generateServiceSchema(
  serviceName: string,
  description: string,
  areaServed: string[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `https://royalsvintagecars.com/#service-${serviceName.toLowerCase().replace(/ /g, '-')}`,
    name: serviceName,
    description: description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'ROYALS - THE BARODE VINTAGE CARS',
      url: 'https://royalsvintagecars.com',
    },
    areaServed: areaServed.map(area => ({
      '@type': 'City',
      name: area,
    })),
    priceRange: '₹₹₹',
    aggregateRating: {
      '@type': 'AggregateRating',
      itemReviewed: {
        '@type': 'Service',
        name: serviceName,
      },
      ratingValue: '4.9',
      reviewCount: '250',
      bestRating: '5',
      worstRating: '1',
    },
  }
}

/**
 * Breadcrumb Schema
 * Navigation breadcrumbs for better crawling
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

/**
 * FAQPage Schema
 * For FAQ sections
 */
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

/**
 * LocalBusiness Schema
 * Complete business information
 */
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://royalsvintagecars.com/#localbusiness',
    name: 'ROYALS - THE BARODE VINTAGE CARS',
    image: 'https://royalsvintagecars.com/og-image.jpg',
    description:
      'Premium vintage car rental for weddings in Vadodara, Ahmedabad, Surat & Gujarat',
    url: 'https://royalsvintagecars.com',
    telephone: '+91 88306 12287',
    email: 'info@royalsvintagecar.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Windsor Plaza, RC Dutt Road',
      addressLocality: 'Vadodara',
      addressRegion: 'Gujarat',
      postalCode: '390007',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 22.3072,
      longitude: 73.1812,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '21:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        opens: '10:00',
        closes: '22:00',
      },
    ],
    hasMap: 'https://maps.google.com/?q=Windsor+Plaza+RC+Dutt+Road+Alkapuri+Vadodara',
    priceRange: '₹₹₹',
    aggregateRating: {
      '@type': 'AggregateRating',
      itemReviewed: {
        '@type': 'LocalBusiness',
        name: 'ROYALS - THE BARODE VINTAGE CARS',
        url: 'https://royalsvintagecars.com',
      },
      ratingValue: '4.9',
      reviewCount: '250',
      bestRating: '5',
      worstRating: '1',
    },
  }
}

/**
 * Article/BlogPosting Schema
 * For content pages
 */
export function generateArticleSchema(props: SchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: props.pageTitle,
    description: props.pageDescription,
    image: props.imageUrl,
    url: props.pageUrl,
    author: {
      '@type': 'Organization',
      name: 'ROYALS - THE BARODE VINTAGE CARS',
      url: 'https://royalsvintagecars.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ROYALS - THE BARODE VINTAGE CARS',
      logo: {
        '@type': 'ImageObject',
        url: 'https://royalsvintagecars.com/logo.png',
      },
    },
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
  }
}

/**
 * Product/Service Schema
 * For individual service listings
 */
export function generateProductSchema(
  name: string,
  description: string,
  image: string,
  price: string = 'Contact for price'
) {
  return {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: name,
    image: image,
    description: description,
    brand: {
      '@type': 'Brand',
      name: 'ROYALS - THE BARODE VINTAGE CARS',
    },
    offers: {
      '@type': 'Offer',
      url: 'https://royalsvintagecars.com',
      priceCurrency: 'INR',
      price: price,
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'ROYALS - THE BARODE VINTAGE CARS',
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      itemReviewed: {
        '@type': 'Product',
        name: name,
      },
      ratingValue: '4.9',
      reviewCount: '250',
      bestRating: '5',
      worstRating: '1',
    },
  }
}

/**
 * Collection Schema
 * For grouped content
 */
export function generateCollectionSchema(
  name: string,
  description: string,
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Collection',
    name: name,
    description: description,
    url: 'https://royalsvintagecars.com',
    hasPart: items.map(item => ({
      '@type': 'Thing',
      name: item.name,
      url: item.url,
    })),
  }
}
