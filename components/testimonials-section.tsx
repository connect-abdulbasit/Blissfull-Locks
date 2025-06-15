import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    rating: 5,
    text: "The Argan Miracle Oil has completely transformed my hair! It's shinier, softer, and grows faster than ever before.",
    location: "New York, NY",
  },
  {
    name: "Maria Rodriguez",
    rating: 5,
    text: "I've tried many hair oils, but nothing compares to Blissful Locks. My hair has never looked healthier!",
    location: "Los Angeles, CA",
  },
  {
    name: "Emily Chen",
    rating: 5,
    text: "The Coconut Bliss Elixir smells amazing and makes my hair so manageable. I get compliments every day!",
    location: "Chicago, IL",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-sage-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have transformed their hair
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-cream-50 rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-gold-500 fill-current" />
                ))}
              </div>
              <p className="text-sage-700 mb-6 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold text-sage-800">{testimonial.name}</p>
                <p className="text-sage-600 text-sm">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
