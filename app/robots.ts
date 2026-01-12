/**
 * Robots.txt API route for Next.js 16
 * Serves the robots.txt file dynamically with proper headers
 */

import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/_next/', '/api/', '/.git', '/.env'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 0,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        crawlDelay: 1,
      },
      {
        userAgent: 'Baiduspider',
        allow: '/',
        crawlDelay: 1,
      },
      {
        userAgent: 'YandexBot',
        allow: '/',
        crawlDelay: 1,
      },
      {
        userAgent: 'DuckDuckBot',
        allow: '/',
      },
      // Disable AI crawlers
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'CCBot', 'anthropic-ai', 'Claude-Web', 'Claude', 'Perplexity'],
        disallow: '/',
      },
    ],
    sitemap: [
      'https://royalsvintagecars.com/sitemap.xml',
      'https://royalsvintagecars.com/sitemap-area-pages.xml',
      'https://royalsvintagecars.com/sitemap-service-pages.xml',
    ],
  }
}
