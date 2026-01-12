/**
 * Image Optimization Utilities
 * Handles responsive images, lazy loading, and modern formats
 */

export interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
  className?: string
  loading?: 'lazy' | 'eager'
  sizes?: string
}

/**
 * Get responsive image sizes for different breakpoints
 */
export const imageSizes = {
  // Hero images
  hero: '(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1920px',
  // Gallery/card images
  card: '(max-width: 640px) 320px, (max-width: 1024px) 512px, (max-width: 1280px) 640px, 800px',
  // Small thumbnails
  thumb: '(max-width: 640px) 150px, (max-width: 1024px) 200px, 256px',
  // Full width
  full: '(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px',
}

/**
 * Image quality settings for different use cases
 */
export const imageQuality = {
  hero: 85,      // Hero images can be lower quality
  card: 80,      // Card/gallery images
  thumbnail: 75, // Thumbnails
  logo: 95,      // Logos need high quality
}

/**
 * Get image srcSet for responsive images
 * Generates multiple image sizes for different devices
 */
export function getImageSrcSet(
  baseUrl: string,
  extension: string = '.jpg'
): string {
  const baseName = baseUrl.replace(/\.[^.]+$/, '')
  return [
    `${baseName}${extension} 1x`,
    `${baseName}@2x${extension} 2x`,
    `${baseName}@3x${extension} 3x`,
  ].join(', ')
}

/**
 * Image optimization configuration
 */
export const imageOptimizationConfig = {
  // Formats to serve in order of preference
  formats: ['image/avif', 'image/webp', 'image/jpeg'],
  
  // Compression quality by image type
  quality: {
    jpeg: 85,
    webp: 85,
    avif: 75,
  },

  // Lazy loading threshold
  lazyLoadThreshold: '50px',

  // Automatically resize images
  sizes: [
    320,  // Mobile
    640,  // Mobile landscape
    750,  // Tablet small
    1024, // Tablet
    1280, // Desktop
    1920, // Desktop large
    2560, // 4K
  ],

  // Image processing steps
  processing: {
    blur: true,      // Blur while loading
    strip: true,     // Remove metadata
    optimize: true,  // Optimize JPEG/PNG
    progressive: true, // Progressive JPEG
  },
}

/**
 * Get optimized image URL for different formats
 */
export function getOptimizedImageUrl(
  src: string,
  format: 'avif' | 'webp' | 'jpeg' = 'jpeg',
  width: number = 1200,
  quality: number = 85
): string {
  // If using external CDN/service, build URL here
  // Example: return `${CDN_URL}/${src}?format=${format}&w=${width}&q=${quality}`
  return src
}

/**
 * Image lazy loading configuration
 */
export const lazyLoadConfig = {
  // Intersection Observer options
  root: null,
  rootMargin: '50px',
  threshold: 0.01,

  // Native lazy loading
  loading: 'lazy' as const,

  // Blur placeholder while loading
  blurDataURL:
    'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 8 8%22%3E%3Cfilter id=%22blur%22%3E%3CfeGaussianBlur in=%22SourceGraphic%22 stdDeviation=%222%22/%3E%3C/filter%3E%3Crect fill=%22%23999%22 filter=%22url(%23blur)%22 width=%228%22 height=%228%22/%3E%3C/svg%3E',
}

/**
 * Image preloading hints
 */
export function getImagePreloadLinks(imageUrls: string[]): string[] {
  return imageUrls.map(
    url =>
      `<link rel="preload" as="image" href="${url}" imagesrcset="${getImageSrcSet(url)}" />`
  )
}
