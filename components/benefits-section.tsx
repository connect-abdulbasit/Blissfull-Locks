import { Leaf, Sparkles, Heart, Shield } from "lucide-react"

const benefits = [
  {
    icon: Leaf,
    title: "All Natural Ingredients",
    description: "Pure, organic oils sourced from the finest ingredients nature has to offer.",
  },
  {
    icon: Sparkles,
    title: "Instant Shine & Softness",
    description: "See immediate results with enhanced shine and silky smooth texture.",
  },
  {
    icon: Heart,
    title: "Promotes Hair Growth",
    description: "Nourishes hair follicles and scalp to encourage healthy hair growth.",
  },
  {
    icon: Shield,
    title: "Protects & Repairs",
    description: "Shields hair from damage while repairing existing split ends and breakage.",
  },
]

export default function BenefitsSection() {
  return (
    <section className="py-20 bg-sage-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-4">Why Choose Our Hair Oils?</h2>
          <p className="text-xl text-sage-600 max-w-2xl mx-auto">
            Experience the transformative power of nature's finest ingredients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-100 rounded-full mb-6">
                <benefit.icon className="h-8 w-8 text-gold-600" />
              </div>
              <h3 className="text-xl font-semibold text-sage-800 mb-3">{benefit.title}</h3>
              <p className="text-sage-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
