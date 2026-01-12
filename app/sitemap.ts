/**
 * Sitemap generation for Next.js
 * This generates XML sitemaps for search engines
 * 
 * Generates three sitemaps:
 * - sitemap.xml - Main pages (home, privacy, terms, leads)
 * - sitemap-area-pages.xml - All city/area pages (99 pages)
 * - sitemap-service-pages.xml - All service pages
 */

import { allRoutes } from '@/lib/all-routes'

export default function sitemap() {
  const baseUrl = 'https://royalsvintagecars.com'

  // Main pages with higher priority
  const mainPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]

  // Service pages - high priority for SEO
  const servicePages = [
    'vintage-car-rental',
    'wedding-car',
    'rolls-royce-wedding',
    'baraat-car',
    'bride-entry-car',
    'groom-entry-car',
    'vintage-wedding-car',
    'classic-car-wedding',
    'open-top-vintage-car',
    'luxury-vintage-car',
    'marriage-car-rental',
    'antique-car-wedding',
    'doli-car',
    'dulhan-car',
    'vidaai-car',
    'reception-car',
    'pre-wedding-shoot-car',
    'vintage-car-photoshoot',
    'vintage-car-rental-vadodara',
    'wedding-vintage-car-on-rent',
    'wedding-vintage-car-rental-service',
    'wedding-vintage-cars-delivery',
    'vintage-wedding-car-hire',
    'vintage-wedding-car-rental',
    'vintage-wedding-car-service',
    'shaadi-car',
    'marriage-car-rental',
    'vintage-car-for-wedding',
  ]

  // Area pages - medium-high priority
  const areaPages = allRoutes.filter(
    route => !servicePages.includes(route) && route !== 'leads'
  )

  // Combine all pages
  const allPages = [
    ...mainPages,
    ...servicePages.map(route => ({
      url: `${baseUrl}/${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    })),
    ...areaPages.map(route => ({
      url: `${baseUrl}/${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    })),
  ]

  return allPages
}
