import type React from "react"
import type { Metadata, Viewport } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/next"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { JsonLdSchema } from "@/components/json-ld-schema"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "700"],
  preload: true,
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  preload: true,
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: "ROYALS - THE BARODE VINTAGE CARS | Premium Wedding Car Rental Vadodara, Gujarat",
  description:
    "ROYALS - THE BARODE VINTAGE CARS offers luxury vintage car rental for weddings in Vadodara, Ahmedabad, Surat & Gujarat. Rolls Royce, open top vintage cars for shaadi, baraat & marriage. Book your dream wedding car today!",
  keywords:
    "vintage car rental, wedding car rental, vintage wedding car, classic car wedding, car rental wedding, vintage wedding car rental, wedding vintage car on rent, vintage car for wedding, open top vintage car wedding, Rolls Royce vintage car rental, vintage car rental from Vadodara, wedding vintage cars delivery, vintage wedding car hire, vintage car on rent for shaadi, classic vintage cars wedding, vintage wedding car service, wedding vintage car rental service, vintage car rental for marriage, open vintage car wedding, luxury vintage car on hire wedding, vintage car rental wedding, wedding car vintage, classic car rental wedding, vintage Rolls Royce wedding car, antique car for bride groom, vintage wedding baraat car rental, Vadodara, Ahmedabad, Surat, Gujarat",
  authors: [{ name: "ROYALS - THE BARODE VINTAGE CARS" }],
  creator: "ROYALS - THE BARODE VINTAGE CARS",
  publisher: "ROYALS - THE BARODE VINTAGE CARS",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://royalsvintagecars.com"),
  alternates: {
    canonical: "https://royalsvintagecars.com",
  },
  openGraph: {
    title: "ROYALS - THE BARODE VINTAGE CARS | Premium Vintage Wedding Car Rental Gujarat",
    description:
      "Book luxury vintage cars for your dream wedding in Vadodara, Ahmedabad & Surat. Rolls Royce, open top vintage cars for baraat, shaadi & marriage ceremonies. Premium wedding car rental service.",
    url: "https://royalsvintagecars.com",
    siteName: "ROYALS - THE BARODE VINTAGE CARS",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://royalsvintagecars.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ROYALS - THE BARODE VINTAGE CARS - Premium Vintage Wedding Car Rental",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ROYALS - THE BARODE VINTAGE CARS | Vintage Wedding Car Rental Gujarat",
    description: "Premium vintage car rental for weddings in Vadodara, Ahmedabad & Surat. Rolls Royce, classic cars for your dream wedding!",
    images: ["https://royalsvintagecars.com/og-image.jpg"],
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
  icons: {
    icon: [
      {
        url: "/royals-vintage-cars-logo.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    shortcut: "/royals-vintage-cars-logo.png",
    apple: "/royals-vintage-cars-logo.png",
  },
  verification: {
    google: "google-site-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://royalsvintagecars.com/#organization",
        name: "ROYALS - THE BARODE VINTAGE CARS",
        image: "https://royalsvintagecars.com/logo.png",
        description: "Premium vintage car rental for weddings in Vadodara, Ahmedabad, Surat and across Gujarat. Luxury Rolls Royce, open top vintage cars for shaadi, baraat & marriage ceremonies.",
        url: "https://royalsvintagecars.com",
        telephone: "+91 88306 12287",
        email: "info@royalsvintagecar.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Baroda",
          addressLocality: "Vadodara",
          addressRegion: "Gujarat",
          postalCode: "390001",
          addressCountry: "IN",
        },
        sameAs: [],
        priceRange: "₹₹₹",
        serviceArea: [
          { "@type": "City", name: "Vadodara" },
          { "@type": "City", name: "Ahmedabad" },
          { "@type": "City", name: "Surat" },
          { "@type": "State", name: "Gujarat" },
        ],
        areaServed: [
          "Vadodara", "Ahmedabad", "Surat", "Anand", "Nadiad", "Bharuch", "Gandhinagar", 
          "Gotri", "Alkapuri", "Akota", "Sayajigunj", "Fatehgunj", "Sevasi", "Manjalpur",
          "Ellora Park", "Waghodia Road", "Vasna Bhayali", "Karelibaug", "Raopura", "Nizampura"
        ],
      },
      {
        "@type": "Organization",
        "@id": "https://royalsvintagecars.com/#organization",
        name: "ROYALS - THE BARODE VINTAGE CARS",
        url: "https://royalsvintagecars.com",
        logo: "https://royalsvintagecars.com/logo.png",
        foundingDate: "2020",
        founders: [{ "@type": "Person", name: "ROYALS Team" }],
        knowsAbout: [
          "Vintage Car Rental",
          "Wedding Car Rental",
          "Classic Car Wedding",
          "Rolls Royce Rental",
          "Baraat Car Rental",
          "Marriage Car Hire",
        ],
      },
      {
        "@type": "Service",
        "@id": "https://royalsvintagecars.com/#service-wedding",
        name: "Vintage Wedding Car Rental",
        description: "Premium vintage car rental service for weddings including Rolls Royce, open top vintage cars for baraat, vidaai and wedding ceremonies",
        provider: {
          "@id": "https://royalsvintagecars.com/#organization",
        },
        areaServed: ["Vadodara", "Ahmedabad", "Surat", "Gujarat"],
        priceRange: "₹₹₹",
      },
      {
        "@type": "Service",
        "@id": "https://royalsvintagecars.com/#service-baraat",
        name: "Vintage Baraat Car Rental",
        description: "Luxury vintage cars for baraat and groom entry. Make your wedding grand with our classic vintage car collection",
        provider: {
          "@id": "https://royalsvintagecars.com/#organization",
        },
        areaServed: ["Vadodara", "Ahmedabad", "Surat", "Gujarat"],
        priceRange: "₹₹₹",
      },
      {
        "@type": "AggregateRating",
        "@id": "https://royalsvintagecars.com/#rating",
        ratingValue: "4.9",
        ratingCount: "250",
        bestRating: "5",
        worstRating: "1",
      },
    ],
  }

  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <head>
        {/* Performance optimizations */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta httpEquiv="Cache-Control" content="public, max-age=31536000, immutable" />
        
        {/* Web App Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* PWA & Branding */}
        <meta name="theme-color" content="#2C1810" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="ROYALS Vintage Cars" />
        
        {/* JSON-LD Structured Data */}
        <JsonLdSchema />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KZ6BHNHF6E"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KZ6BHNHF6E');
          `}
        </Script>
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <WhatsAppFloat />
        <Analytics />
      </body>
    </html>
  )
}
