"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import type { Product } from "@/lib/types"
import { useCart } from "@/lib/cart-context"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { dispatch } = useCart()

  const handleAddToCart = () => {
    dispatch({ type: "ADD_ITEM", product })
  }

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64">
        <Image
          src={product.image_url || "/placeholder.svg?height=300&width=300"}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-sage-800 mb-2">{product.name}</h3>
        <p className="text-sage-600 mb-4 line-clamp-3">{product.description}</p>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gold-600">${product.price.toFixed(2)}</span>
          <Button
            onClick={handleAddToCart}
            className="bg-sage-700 hover:bg-sage-800 text-white"
            disabled={!product.in_stock}
          >
            {product.in_stock ? "Add to Cart" : "Out of Stock"}
          </Button>
        </div>
      </div>
    </div>
  )
}
