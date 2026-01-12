/**
 * SSG (Static Site Generation) Page
 * Pre-rendered at build time for maximum performance
 * Revalidates every 24 hours for fresh content
 */

export const revalidate = 86400 // Revalidate every 24 hours

import { FooterNew } from "@/components/footer-new"

export const metadata = {
  title: "Terms of Service | Vintage Wedding Car Rental",
  description: "Our terms of service governing the use of our website and services.",
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-12 md:py-20 max-w-4xl mt-20">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: January 2026</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-6 text-foreground">
          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on our website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              <li>Harass, threaten, or engage in abusive behavior toward other users</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">3. Disclaimer</h2>
            <p>
              The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">4. Limitations</h2>
            <p>
              In no event shall our company or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website, even if we or our authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">5. Accuracy of Materials</h2>
            <p>
              The materials appearing on our website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on our website are accurate, complete, or current. We may make changes to the materials contained on our website at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">6. Materials and Content</h2>
            <p>
              We do not warrant or represent that your use of materials displayed on our website will not infringe rights of third parties not owned by or affiliated with us. You assume all responsibility and risk of loss resulting from your use of materials and content on our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">7. Limitations on Liability</h2>
            <p>
              Except where such exclusions or limitations are prohibited by law, we shall not be liable to you for any losses or damages you may incur as a result of:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Your use or inability to use our website</li>
              <li>Unauthorized access to or alteration of your transmissions or data</li>
              <li>Any other matter relating to our website or services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">8. Revisions and Errata</h2>
            <p>
              The materials appearing on our website could include technical, typographical, or photographic errors. We reserve the right to make corrections and changes to information on our website at any time without notice. We are not responsible for maintaining the accuracy of posted information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">9. Links</h2>
            <p>
              We have not reviewed all of the sites linked to our website and are not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us of the site. Use of any such linked website is at the user's own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">10. Modifications to Terms</h2>
            <p>
              We may revise these terms of service for our website at any time without notice. By using this website, you are agreeing to be bound by the then-current version of these terms of service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">11. Booking and Reservation</h2>
            <p>
              When you make a booking through our website:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>You must provide accurate and complete information</li>
              <li>You are responsible for confirming all booking details</li>
              <li>You agree to communicate with us via phone or WhatsApp</li>
              <li>Any changes to bookings must be requested as soon as possible</li>
              <li>We will respond to all inquiries within a reasonable timeframe</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">12. User Conduct</h2>
            <p>You agree not to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Use the website for any unlawful purposes</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Engage in any conduct that restricts or inhibits anyone's use of the website</li>
              <li>Transmit obscene, offensive, or indecent images, sounds, or messages</li>
              <li>Disrupt the normal flow of dialogue within our website</li>
              <li>Attempt to gain unauthorized access to our systems</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">13. Intellectual Property Rights</h2>
            <p>
              All content on our website, including text, graphics, logos, images, and software, is the property of our company or its content suppliers and is protected by international copyright laws. Unauthorized reproduction or distribution of any content is prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">14. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws applicable in India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">15. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-secondary/10 rounded-lg">
              <p><strong>Email:</strong> info@vintagecarrental.com</p>
              <p><strong>Phone:</strong> +91 88306 12287</p>
              <p><strong>WhatsApp:</strong> +91 88306 12287</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">16. Severability</h2>
            <p>
              If any provision of these terms and conditions is found to be invalid by any court having competent jurisdiction, the invalidity of that provision will not affect the validity of the remaining provisions, which will remain in full force and effect.
            </p>
          </section>
        </div>
      </main>

      <FooterNew />
    </div>
  )
}
