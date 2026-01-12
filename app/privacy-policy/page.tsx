import { SiteFooter } from "@/components/site-footer"
import { Navigation } from "@/components/navigation"

export const metadata = {
  title: "Privacy Policy | Vintage Wedding Car Rental",
  description: "Our privacy policy outlining how we collect, use, and protect your personal information.",
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: January 2026</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-6 text-foreground">
          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
            <p>
              We are committed to protecting your privacy and ensuring you have a positive experience on our website. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">2. Information We Collect</h2>
            <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Personal Data:</strong> Name, email address, phone number, wedding date, city, and any other information you voluntarily provide.</li>
              <li><strong>Automatic Data:</strong> Information about your device, browser type, IP address, and pages visited.</li>
              <li><strong>Cookies:</strong> We use cookies and similar tracking technologies to enhance your experience.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">3. How We Use Your Information</h2>
            <p>We use the information we collect in the following ways:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>To respond to your inquiries and fulfill your requests</li>
              <li>To send booking confirmations and service updates</li>
              <li>To improve our website and services</li>
              <li>To send promotional communications (if you opt-in)</li>
              <li>To comply with legal obligations</li>
              <li>To prevent fraudulent transactions and protect security</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">4. Sharing Your Information</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>With service providers who assist us in operating our website and conducting business</li>
              <li>When required by law or to protect our legal rights</li>
              <li>To facilitate services you have requested</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">5. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">6. Cookies and Tracking Technologies</h2>
            <p>
              Our website uses cookies to enhance your user experience. You can control cookie settings through your browser preferences. Note that disabling cookies may affect website functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">7. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">8. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access your personal information</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of promotional communications</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">9. Children's Privacy</h2>
            <p>
              Our website is not intended for children under the age of 18. We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal information, we will take steps to remove such information and terminate the child's account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">10. Changes to This Policy</h2>
            <p>
              We reserve the right to modify this Privacy Policy at any time. Changes will be effective immediately upon posting to the website. Your continued use of our website following the posting of revised Privacy Policy means that you accept and agree to the changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">11. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-secondary/10 rounded-lg">
              <p><strong>Email:</strong> info@vintagecarrental.com</p>
              <p><strong>Phone:</strong> +91 88306 12287</p>
              <p><strong>WhatsApp:</strong> +91 88306 12287</p>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
