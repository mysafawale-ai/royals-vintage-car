/**
 * All static routes for SSG (Static Site Generation)
 * Used by generateStaticParams to pre-generate all pages at build time
 */

export const allRoutes = [
  // Vadodara Areas
  "vadodara", "adajan", "akota", "alkapuri", "althan", "atladara",
  "ellora-park", "fatehgunj", "gotri", "karelibaug", "makarpura",
  "maninagar", "manjalpur", "majura-gate", "mujpur", "nizampura",
  "piplod", "raopura", "ranoli", "sangam-society", "sayajigunj",
  "sevasi", "vadsala", "waghodia-road", "wadi", "chhani",
  "vasna-bhayali", "itari",

  // Ahmedabad Areas
  "ahmedabad", "ashram-road", "bopal", "chandkheda", "cg-road",
  "ghatlodia", "maninagar", "motera", "navrangpura", "prahlad-nagar",
  "satellite", "sg-highway", "thaltej", "vastrapur",

  // Surat Areas
  "surat", "adajan", "althan", "athwa", "city-light", "dumas-road",
  "katargam", "majura-gate", "pal", "piplod", "udhna", "varachha", "vesu",

  // Other Cities
  "anand", "ankleshwar", "bardoli", "bharuch", "champaner", "dakor",
  "gandhinagar", "kevadia", "mehsana", "nadiad", "navsari", "palanpur",
  "patan", "saputara", "statue-of-unity", "valsad", "vapi", "vyara",

  // Service Pages
  "antique-car-wedding", "baraat-car", "bride-entry-car", "classic-car-wedding",
  "doli-car", "dulhan-car", "groom-entry-car", "luxury-vintage-car",
  "marriage-car-rental", "open-top-vintage-car", "pre-wedding-shoot-car",
  "reception-car", "rolls-royce-wedding", "shaadi-car", "vintage-car-for-wedding",
  "vintage-car-photoshoot", "vintage-car-rental", "vintage-car-rental-vadodara",
  "vintage-wedding-car", "vintage-wedding-car-hire", "vintage-wedding-car-rental",
  "vintage-wedding-car-service", "wedding-car", "wedding-vintage-car-on-rent",
  "wedding-vintage-car-rental-service", "wedding-vintage-cars-delivery",

  // Additional Service Pages
  "leads", "vintage-wedding-car-rental",
]

export const routeMetadata: Record<string, { title: string; description: string }> = {
  "vadodara": {
    title: "Vintage Car Rental in Vadodara",
    description: "Premier vintage car rental and classic car wedding services in Vadodara. Rolls Royce, open top vintage cars for wedding ceremonies."
  },
  "ahmedabad": {
    title: "Vintage Car Rental in Ahmedabad",
    description: "Luxury vintage wedding car rental in Ahmedabad. Book premium vintage cars for your wedding."
  },
  "surat": {
    title: "Vintage Car Rental in Surat",
    description: "Classic and vintage car rental services in Surat for weddings. Premium wedding car hire."
  },
}
