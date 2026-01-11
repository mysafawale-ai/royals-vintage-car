import { Car } from "lucide-react"

export function ServiceBanner() {
  return (
    <div className="relative bg-gradient-to-r from-primary via-primary/90 to-secondary text-white py-4 md:py-6 px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-2 md:gap-4 text-center">
          <Car className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 animate-bounce" />
          <h3 className="text-sm md:text-lg font-bold">
            Premium Vintage Car Rental in Vadodara, Ahmedabad & Surat
            <span className="block md:inline md:ml-2">
              <em className="text-xs md:text-base not-italic">— Book Now for Your Dream Wedding!</em>
            </span>
          </h3>
          <Car className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 animate-bounce" />
        </div>
      </div>
    </div>
  )
}
