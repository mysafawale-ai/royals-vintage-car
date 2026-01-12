/**
 * SEO Configuration
 * Includes robots, redirects, and search engine configuration
 */

export const seoConfig = {
  // Site info
  siteUrl: 'https://royalsvintagecars.com',
  siteName: 'ROYALS - THE BARODE VINTAGE CARS',
  
  // Social profiles
  socialProfiles: {
    facebook: 'https://facebook.com/royalsvintagecars',
    instagram: 'https://instagram.com/royalsvintagecars',
    twitter: 'https://twitter.com/royalsvintagecars',
    whatsapp: 'https://wa.me/919876543210',
    youtube: 'https://youtube.com/@royalsvintagecars',
  },
  
  // Contact info
  contact: {
    phone: '+91 88306 12287',
    email: 'info@royalsvintagecar.com',
    address: 'Windsor Plaza, RC Dutt Road, Alkapuri, Vadodara 390007',
  },
  
  // Robots configuration
  robots: {
    index: true,
    follow: true,
    maxSnippet: -1,
    maxImagePreview: 'large',
    maxVideoPreview: -1,
  },
  
  // Search engines
  searchEngines: [
    'google.com',
    'bing.com',
    'baidu.com',
    'yandex.com',
    'duckduckgo.com',
    'yahoo.com',
  ],
  
  // Keywords by category
  keywords: {
    primary: [
      'vintage car rental',
      'wedding car rental',
      'classic car wedding',
      'vintage wedding car',
    ],
    cities: [
      'Vadodara',
      'Ahmedabad',
      'Surat',
      'Gandhinagar',
      'Anand',
      'Gujarat',
    ],
    services: [
      'baraat car',
      'bride entry car',
      'groom entry car',
      'Rolls Royce rental',
      'open top vintage car',
      'luxury vintage car',
    ],
    occasions: [
      'shaadi',
      'wedding',
      'marriage',
      'engagement',
      'reception',
      'pre-wedding shoot',
    ],
  },
  
  // Language and region
  language: 'en',
  region: 'IN',
  
  // OpenGraph defaults
  ogImage: {
    url: 'https://royalsvintagecars.com/og-image.jpg',
    width: 1200,
    height: 630,
    type: 'image/jpeg',
  },
  
  // Twitter Card
  twitterHandle: '@royalsvintagecars',
  
  // Verification codes
  googleSiteVerification: 'your-google-verification-code',
  bingSiteVerification: 'your-bing-verification-code',
}

/**
 * Generate structured data for JSON-LD
 */
export const generateOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: seoConfig.siteName,
    url: seoConfig.siteUrl,
    telephone: seoConfig.contact.phone,
    email: seoConfig.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Windsor Plaza, RC Dutt Road',
      addressLocality: 'Vadodara',
      addressRegion: 'Gujarat',
      postalCode: '390007',
      addressCountry: 'IN',
    },
    image: seoConfig.ogImage.url,
    description: 'Premium vintage car rental for weddings across Gujarat',
    sameAs: Object.values(seoConfig.socialProfiles),
    priceRange: '₹₹₹',
    serviceArea: [
      { '@type': 'City', name: 'Vadodara' },
      { '@type': 'City', name: 'Ahmedabad' },
      { '@type': 'City', name: 'Surat' },
      { '@type': 'State', name: 'Gujarat' },
    ],
  }
}

/**
 * Generate BreadcrumbList for navigation
 */
export const generateBreadcrumb = (items: { name: string; url: string }[]) => {
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
