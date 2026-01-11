"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "What vintage cars do you offer for weddings?",
    answer:
      "ROYALS - THE BARODE VINTAGE CARS offers a premium collection including Rolls Royce vintage cars, open top classic cars, antique automobiles, and luxury vintage collection. All our cars are perfect for baraat, vidaai, bride entry, and wedding ceremonies.",
  },
  {
    question: "Which areas in Gujarat do you provide vintage car rental service?",
    answer:
      "We provide vintage wedding car rental services across Gujarat including Vadodara (Baroda), Ahmedabad, Surat, Anand, Nadiad, Bharuch, Gandhinagar, and surrounding areas. We cover Vadodara neighborhoods like Gotri, Alkapuri, Akota, Sayajigunj, Fatehgunj, and more.",
  },
  {
    question: "How much does vintage car rental cost for weddings?",
    answer:
      "Our vintage car rental prices vary based on the car type, duration, and location. We offer flexible packages for baraat, bride entry, and complete wedding coverage. Contact us on WhatsApp for instant quotes tailored to your requirements.",
  },
  {
    question: "How far in advance should I book a vintage wedding car?",
    answer:
      "We recommend booking your vintage wedding car at least 2-4 weeks in advance, especially during wedding season (November-February). However, we also accommodate last-minute bookings based on availability.",
  },
  {
    question: "Do you provide decorated vintage cars for weddings?",
    answer:
      "Yes! All our vintage wedding cars come beautifully decorated with flowers, ribbons, and traditional elements. We also offer custom decoration packages to match your wedding theme and colors.",
  },
  {
    question: "Is a chauffeur included with the vintage car rental?",
    answer:
      "Yes, all our vintage car rentals include a professional chauffeur dressed in traditional attire. Our drivers are experienced and ensure a smooth, royal experience for your wedding day.",
  },
  {
    question: "Can I use the vintage car for pre-wedding photoshoot?",
    answer:
      "Absolutely! Our vintage cars make stunning props for pre-wedding photoshoots and engagement ceremonies. We offer special photography packages with flexible timing for shoots.",
  },
  {
    question: "What happens if the vintage car breaks down on my wedding day?",
    answer:
      "We maintain our vintage cars meticulously to ensure reliability. In the rare event of any issue, we have backup vehicles ready and our team is available 24/7 to ensure your wedding goes smoothly.",
  },
]

export function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-secondary font-mono uppercase tracking-wider mb-4">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Frequently Asked Questions About Vintage Car Rental
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-mono">
            Find answers to common questions about our vintage wedding car rental services in Gujarat
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card rounded-lg border border-border overflow-hidden hover:border-secondary/50 transition-colors"
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-primary/5 transition-colors"
              >
                <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-secondary transition-transform flex-shrink-0 ${
                    expandedIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {expandedIndex === index && (
                <div className="px-6 py-4 border-t border-border bg-background">
                  <p className="text-muted-foreground leading-relaxed font-mono">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Schema.org FAQ Script */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      </div>
    </section>
  )
}
