import { Crown, Car, Award, Heart, Clock, Shield, MapPin, CheckCircle, Star, Truck } from "lucide-react"

const features = [
  {
    icon: Crown,
    title: "Royal Vintage Collection",
    description: "Exquisite collection of Rolls Royce and classic vintage cars that add royal grandeur to your wedding",
  },
  {
    icon: Clock,
    title: "Punctual & Reliable Service",
    description: "We ensure timely delivery and pickup of vintage cars for your wedding ceremonies",
  },
  {
    icon: Car,
    title: "Well-Maintained Fleet",
    description: "Our vintage cars are meticulously maintained and decorated for your special day",
  },
  {
    icon: MapPin,
    title: "Gujarat-Wide Coverage",
    description: "We deliver vintage wedding cars across Vadodara, Ahmedabad, Surat and all major Gujarat cities",
  },
  {
    icon: Star,
    title: "Professional Chauffeurs",
    description: "Experienced drivers in traditional attire to complement your wedding celebrations",
  },
  {
    icon: Shield,
    title: "Transparent Pricing",
    description: "No hidden charges - clear pricing with complete package details for vintage car rental",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className="text-secondary font-mono uppercase tracking-wider mb-4">About ROYALS - THE BARODE VINTAGE CARS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Premium Vintage Wedding Cars in Gujarat
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-mono mb-6">
            {
              "Welcome to ROYALS - THE BARODE VINTAGE CARS, Gujarat's premier vintage car rental service for weddings. Based in Vadodara (Baroda), we specialize in providing luxury vintage cars that transform your wedding into a royal celebration."
            }
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed font-mono">
            {
              "Our exquisite collection of Rolls Royce, open top vintage cars, and classic automobiles are perfect for baraat, bride's entry, vidaai, and pre-wedding shoots. We deliver across Vadodara, Ahmedabad, Surat, and all major cities in Gujarat."
            }
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-background rounded-lg p-8 border border-border hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
              <Crown className="w-8 h-8 text-primary" />
              Our Vision
            </h3>
            <p className="text-muted-foreground font-mono leading-relaxed">
              To be Gujarat's most trusted vintage car rental service, making every wedding celebration memorable with our timeless collection of classic automobiles. We aim to bring royal elegance to weddings across Vadodara, Ahmedabad, Surat and beyond.
            </p>
          </div>
          <div className="bg-background rounded-lg p-8 border border-border hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
              <Heart className="w-8 h-8 text-primary" />
              Our Mission
            </h3>
            <p className="text-muted-foreground font-mono leading-relaxed">
              To provide exceptional vintage car rental experiences for weddings, ensuring every bride and groom arrives in style. Our commitment is to deliver punctual service, well-decorated cars, and professional chauffeurs for your special day.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="text-center mb-12">
          <p className="text-secondary font-mono uppercase tracking-wider mb-4">Why Choose Us</p>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Why Choose ROYALS Vintage Cars?
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-background rounded-lg p-8 text-center hover:shadow-xl transition-shadow border border-border"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground font-mono leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Our Services Section */}
        <div id="services" className="mt-20">
          <div className="text-center mb-12">
            <p className="text-secondary font-mono uppercase tracking-wider mb-4">Our Services</p>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
              Vintage Wedding Car Rental Services
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative bg-background rounded-lg p-6 border border-border hover:shadow-xl transition-shadow text-center">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold">1</div>
              <h4 className="text-lg font-bold text-foreground mt-4 mb-3">Baraat Car Rental</h4>
              <p className="text-muted-foreground font-mono text-sm">Grand vintage cars for the groom's baraat procession. Make a royal entry on your wedding day.</p>
            </div>
            <div className="relative bg-background rounded-lg p-6 border border-border hover:shadow-xl transition-shadow text-center">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold">2</div>
              <h4 className="text-lg font-bold text-foreground mt-4 mb-3">Bride's Entry Car</h4>
              <p className="text-muted-foreground font-mono text-sm">Elegant vintage cars decorated beautifully for the bride's grand arrival at the wedding venue.</p>
            </div>
            <div className="relative bg-background rounded-lg p-6 border border-border hover:shadow-xl transition-shadow text-center">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold">3</div>
              <h4 className="text-lg font-bold text-foreground mt-4 mb-3">Vidaai Car Service</h4>
              <p className="text-muted-foreground font-mono text-sm">Memorable vidaai moments with our classic vintage cars. Perfect for the emotional farewell.</p>
            </div>
            <div className="relative bg-background rounded-lg p-6 border border-border hover:shadow-xl transition-shadow text-center">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold">4</div>
              <h4 className="text-lg font-bold text-foreground mt-4 mb-3">Pre-Wedding Shoots</h4>
              <p className="text-muted-foreground font-mono text-sm">Stunning vintage cars as props for your pre-wedding photoshoots and engagement ceremonies.</p>
            </div>
          </div>
        </div>

        {/* Additional About Content */}
        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/classic-vintage-wedding-car-collection.jpg"
              alt="Classic Vintage Wedding Car Collection"
              className="rounded-lg w-full object-cover aspect-square"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground text-balance">Book Your Dream Vintage Wedding Car Today</h3>
            <p className="text-muted-foreground font-mono leading-relaxed text-lg">
              {
                "At ROYALS - THE BARODE VINTAGE CARS, we understand that your wedding day is the most special day of your life. Our vintage car collection adds timeless elegance and royal charm to your celebration, creating memories that last a lifetime."
              }
            </p>
            <p className="text-muted-foreground font-mono leading-relaxed text-lg">
              {
                "From classic Rolls Royce to open top vintage cars, our fleet is perfect for Indian weddings, shaadi ceremonies, baraat processions, and vidaai moments across Gujarat."
              }
            </p>
            <ul className="space-y-3">
              {[
                "Vintage Rolls Royce for wedding ceremonies",
                "Open top classic cars for baraat",
                "Decorated vintage cars for bride & groom",
                "Professional chauffeur in traditional attire",
                "Delivery across Vadodara, Ahmedabad, Surat",
                "Flexible rental packages for all budgets",
                "Pre-wedding photoshoot car props",
                "24/7 customer support for bookings",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <span className="text-foreground font-mono">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
