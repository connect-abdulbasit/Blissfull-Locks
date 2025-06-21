import type { Product, Testimonial } from "./types"

export const products: Product[] = [
  {
    id: "1",
    name: "Blissful Locks Hair Oil",
    description:
      "Premium natural hair oil blend with argan, jojoba, and rosemary oils for ultimate hair nourishment and growth",
    price: 34.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "Hair Oil",
    inStock: true,
  },
]

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    rating: 5,
    comment: "Blissful Locks Hair Oil transformed my dry hair into silky smooth locks. I've never felt more confident!",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    id: "2",
    name: "Maria Rodriguez",
    rating: 5,
    comment: "After using Blissful Locks for 3 months, I can see noticeable hair growth. Amazing results!",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    id: "3",
    name: "Jennifer Kim",
    rating: 5,
    comment: "Natural ingredients that actually work. My hairstylist noticed the difference immediately.",
    image: "/placeholder.svg?height=60&width=60",
  },
]
