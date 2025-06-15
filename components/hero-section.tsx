import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-cream-50 to-sage-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-sage-800 leading-tight">
              Nourish Your Hair with
              <span className="text-gold-600"> Nature's Best</span>
            </h1>
            <p className="text-xl text-sage-600 leading-relaxed">
              Discover our premium collection of natural hair oils, carefully crafted to restore shine, promote growth,
              and give you the beautiful locks you deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products">
                <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-3 text-lg">
                  Shop Now
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-sage-300 text-sage-700 hover:bg-sage-50 px-8 py-3 text-lg"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Beautiful woman with healthy hair using natural oils"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-gold-200 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
