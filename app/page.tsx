import type { Product } from "@/lib/types"
import HeroSection from "@/components/hero-section"
import FeaturedProducts from "@/components/featured-products"
import BenefitsSection from "@/components/benefits-section"
import TestimonialsSection from "@/components/testimonials-section"

// Mock data for preview
const mockFeaturedProducts: Product[] = [
  {
    id: "1",
    name: "Argan Miracle Oil",
    description: "Pure Moroccan argan oil for deep nourishment and shine. Rich in vitamin E and essential fatty acids.",
    price: 29.99,
    image_url: "/placeholder.svg?height=300&width=300",
    category: "hair-oil",
    in_stock: true,
    featured: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "2",
    name: "Coconut Bliss Elixir",
    description: "Organic coconut oil blend with rosemary and lavender for healthy hair growth and scalp care.",
    price: 24.99,
    image_url: "/placeholder.svg?height=300&width=300",
    category: "hair-oil",
    in_stock: true,
    featured: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "3",
    name: "Jojoba Silk Serum",
    description: "Lightweight jojoba oil serum that mimics natural sebum for balanced, silky hair.",
    price: 34.99,
    image_url: "/placeholder.svg?height=300&width=300",
    category: "hair-oil",
    in_stock: true,
    featured: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
]

async function getFeaturedProducts(): Promise<Product[]> {
  // Check if we're in a demo environment
  if (
    process.env.NEXT_PUBLIC_SUPABASE_URL === undefined ||
    process.env.NEXT_PUBLIC_SUPABASE_URL === "https://demo.supabase.co"
  ) {
    return mockFeaturedProducts
  }

  try {
    const { supabase } = await import("@/lib/supabase")
    const { data, error } = await supabase.from("products").select("*").eq("featured", true).limit(3)

    if (error) {
      console.error("Error fetching featured products:", error)
      return mockFeaturedProducts
    }

    return data || mockFeaturedProducts
  } catch (error) {
    console.error("Supabase error:", error)
    return mockFeaturedProducts
  }
}

export default async function Home() {
  const featuredProducts = await getFeaturedProducts()

  return (
    <div>
      <HeroSection />
      <FeaturedProducts products={featuredProducts} />
      <BenefitsSection />
      <TestimonialsSection />
    </div>
  )
}
