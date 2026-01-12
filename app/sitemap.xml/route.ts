import { allRoutes } from '@/lib/all-routes'

export async function GET() {
  const baseUrl = 'https://royalsvintagecars.com'

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
    'vintage-car-for-wedding',
  ]

  // Main pages
  const mainPages = [
    { url: baseUrl, priority: 1.0, changefreq: 'weekly' },
    { url: `${baseUrl}/privacy-policy`, priority: 0.5, changefreq: 'yearly' },
    { url: `${baseUrl}/terms-of-service`, priority: 0.5, changefreq: 'yearly' },
  ]

  // Service pages
  const serviceSitemaps = servicePages.map(route => ({
    url: `${baseUrl}/${route}`,
    priority: 0.9,
    changefreq: 'weekly',
  }))

  // Area pages
  const areaPages = allRoutes.filter(
    route => !servicePages.includes(route) && route !== 'leads'
  )

  const areaSitemaps = areaPages.map(route => ({
    url: `${baseUrl}/${route}`,
    priority: 0.8,
    changefreq: 'weekly',
  }))

  const allPages = [...mainPages, ...serviceSitemaps, ...areaSitemaps]

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    page => `
  <url>
    <loc>${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('')}
</urlset>`

  return new Response(xmlContent, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=172800',
    },
  })
}
