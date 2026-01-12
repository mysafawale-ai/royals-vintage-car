/**
 * Sitemap Index - References all sitemaps
 * This helps search engines discover all content efficiently
 */

export default function sitemap() {
  const baseUrl = 'https://royalsvintagecars.com'
  const now = new Date().toISOString()

  // Index of all sitemaps
  return [
    // Main sitemap
    {
      url: `${baseUrl}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    // Service pages
    {
      url: `${baseUrl}/vintage-car-rental`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/wedding-car`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/rolls-royce-wedding`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    // City pages
    {
      url: `${baseUrl}/vadodara`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ahmedabad`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/surat`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    // Legal pages
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
  ]
}
