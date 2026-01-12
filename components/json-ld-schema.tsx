/**
 * JSON-LD Schema Component
 * Injects structured data into the page head for SEO
 */

import { generateOrganizationSchema, generateLocalBusinessSchema } from '@/lib/json-ld-schema'

export function JsonLdSchema() {
  const schemas = [generateOrganizationSchema(), generateLocalBusinessSchema()]

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}

/**
 * Page-specific Schema Component
 */
export function PageJsonLdSchema({ schema }: { schema: Record<string, any> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
