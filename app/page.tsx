import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Leaf, Heart, Sparkles } from "lucide-react"
import { products, testimonials } from "@/lib/mock-data"
import { formatPrice } from "@/lib/utils"

export default function HomePage() {
  const featuredProducts = products.slice(0, 3)

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cream-50 to-sage-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-sage-800 mb-6 leading-tight">
                Discover the Magic of Our <span className="text-gold-500">Signature Hair Oil</span>
              </h1>
              <p className="text-xl text-sage-700 mb-8 leading-relaxed">
                Transform your locks with our premium natural hair oil, carefully crafted to bring out the natural
                beauty and health of your hair.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 text-lg">
                  <Link href="/products">Shop Now</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-sage-700 text-sage-700 hover:bg-sage-50 px-8 py-4 text-lg"
                >
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Beautiful hair transformation"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl"
                priority
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-gold-500 fill-current" />
                  <span className="font-semibold">4.9/5 Rating</span>
                </div>
                <p className="text-sm text-gray-600">From 1000+ happy customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-sage-800 mb-4">Our Signature Hair Oil</h2>
            <p className="text-xl text-sage-600 max-w-2xl mx-auto">
              A carefully crafted blend of nature's finest oils for beautiful, healthy hair
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <Image
                  src={products[0].image || "/placeholder.svg"}
                  alt={products[0].name}
                  width={500}
                  height={500}
                  className="w-full rounded-2xl shadow-2xl"
                />
                <div className="absolute top-6 right-6 bg-gold-500 text-white px-4 py-2 rounded-full font-semibold">
                  Bestseller
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-sage-800 mb-4">{products[0].name}</h3>
                <p className="text-lg text-sage-600 mb-6 leading-relaxed">{products[0].description}</p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                    <span className="text-sage-700">100% Natural & Organic</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                    <span className="text-sage-700">Promotes Hair Growth</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                    <span className="text-sage-700">Deep Nourishment & Shine</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                    <span className="text-sage-700">Suitable for All Hair Types</span>
                  </div>
                </div>

                <div className="flex items-center space-x-6 mb-8">
                  <span className="text-4xl font-bold text-gold-500">{formatPrice(products[0].price)}</span>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-gold-500 fill-current" />
                    ))}
                    <span className="text-sage-600 ml-2">(1000+ reviews)</span>
                  </div>
                </div>

                <Button asChild size="lg" className="bg-sage-700 hover:bg-sage-800 text-white px-8 py-4 text-lg">
                  <Link href="/products">Shop Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-sage-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-sage-800 mb-4">Why Choose Natural Hair Oils?</h2>
            <p className="text-xl text-sage-600 max-w-3xl mx-auto">
              Experience the transformative power of nature's finest ingredients for healthier, more beautiful hair
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Leaf className="h-8 w-8 text-sage-700" />
              </div>
              <h3 className="text-xl font-semibold text-sage-800 mb-2">100% Natural</h3>
              <p className="text-sage-600">
                Pure, organic ingredients with no harmful chemicals or synthetic additives
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Heart className="h-8 w-8 text-gold-500" />
              </div>
              <h3 className="text-xl font-semibold text-sage-800 mb-2">Deep Nourishment</h3>
              <p className="text-sage-600">Penetrates deeply to repair and strengthen hair from root to tip</p>
            </div>

            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Sparkles className="h-8 w-8 text-gold-500" />
              </div>
              <h3 className="text-xl font-semibold text-sage-800 mb-2">Instant Shine</h3>
              <p className="text-sage-600">Adds luminous shine and softness that's visible from the first use</p>
            </div>

            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Star className="h-8 w-8 text-gold-500" />
              </div>
              <h3 className="text-xl font-semibold text-sage-800 mb-2">Proven Results</h3>
              <p className="text-sage-600">Trusted by thousands with visible improvements in hair health</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-sage-800 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-sage-600">Real stories from real customers who transformed their hair</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-cream-50 border-none">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-gold-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-sage-700 mb-6 italic leading-relaxed">"{testimonial.comment}"</p>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.image || "/placeholder.svg?height=50&width=50"}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <p className="font-semibold text-sage-800">{testimonial.name}</p>
                      <p className="text-sm text-sage-600">Verified Customer</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sage-700 to-sage-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Hair?</h2>
          <p className="text-xl mb-8 text-cream-200 max-w-2xl mx-auto">
            Join thousands of happy customers and discover the secret to beautiful, healthy hair
          </p>
          <Button asChild size="lg" className="bg-gold-500 hover:bg-gold-600 text-white px-12 py-4 text-lg">
            <Link href="/products">Shop Now</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
