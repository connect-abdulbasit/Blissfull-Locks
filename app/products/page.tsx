import type { Product } from "@/lib/types"
import ProductCard from "@/components/product-card"

// Mock data for preview
const mockProducts: Product[] = [
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
  {
    id: "4",
    name: "Castor Root Strength",
    description: "Cold-pressed castor oil with peppermint for promoting hair thickness and strength.",
    price: 19.99,
    image_url: "/placeholder.svg?height=300&width=300",
    category: "hair-oil",
    in_stock: true,
    featured: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "5",
    name: "Rosehip Glow Treatment",
    description: "Vitamin C rich rosehip oil for damaged hair repair and natural shine restoration.",
    price: 39.99,
    image_url: "/placeholder.svg?height=300&width=300",
    category: "hair-oil",
    in_stock: true,
    featured: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "6",
    name: "Sweet Almond Softness",
    description: "Gentle sweet almond oil perfect for sensitive scalps and daily hair care routine.",
    price: 22.99,
    image_url: "/placeholder.svg?height=300&width=300",
    category: "hair-oil",
    in_stock: true,
    featured: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
]

async function getAllProducts(): Promise<Product[]> {
  // Check if we're in a demo environment
  if (
    process.env.NEXT_PUBLIC_SUPABASE_URL === undefined ||
    process.env.NEXT_PUBLIC_SUPABASE_URL === "https://demo.supabase.co"
  ) {
    return mockProducts
  }

  try {
    const { supabase } = await import("@/lib/supabase")
    const { data, error } = await supabase.from("products").select("*").order("created_at", { ascending: false })

    if (error) {
      console.error("Error fetching products:", error)
      return mockProducts
    }

    return data || mockProducts
  } catch (error) {
    console.error("Supabase error:", error)
    return mockProducts
  }
}

export default async function ProductsPage() {
  const products = await getAllProducts()

  return (
    <div className="py-20 bg-cream-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-sage-800 mb-4">Our Products</h1>
          <p className="text-xl text-sage-600 max-w-2xl mx-auto">
            Discover our complete collection of premium natural hair oils
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-sage-600">No products available at the moment.</p>
          </div>
        )}
      </div>
    </div>
  )
}
