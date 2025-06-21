"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { products } from "@/lib/mock-data"
import { formatPrice } from "@/lib/utils"
import { useCart } from "@/contexts/cart-context"
import { ShoppingCart, Star, Minus, Plus, Leaf, Heart, Sparkles } from "lucide-react"

export default function ProductPage() {
  const { dispatch } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  const product = products[0]

  // Mock additional product images
  const productImages = [
    product.image,
    "/placeholder.svg?height=400&width=400",
    "/placeholder.svg?height=400&width=400",
    "/placeholder.svg?height=400&width=400",
  ]

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch({ type: "ADD_ITEM", product })
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div>
          <div className="mb-4">
            <Image
              src={productImages[selectedImage] || "/placeholder.svg"}
              alt={product.name}
              width={600}
              height={600}
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {productImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative rounded-lg overflow-hidden ${
                  selectedImage === index ? "ring-2 ring-gold-500" : ""
                }`}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} view ${index + 1}`}
                  width={150}
                  height={150}
                  className="w-full h-24 object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-4xl font-bold text-sage-800 mb-4">{product.name}</h1>

          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-gold-500 fill-current" />
              ))}
            </div>
            <span className="text-sage-600">(1,247 reviews)</span>
          </div>

          <p className="text-xl text-sage-600 mb-8 leading-relaxed">{product.description}</p>

          <div className="text-4xl font-bold text-gold-500 mb-8">{formatPrice(product.price)}</div>

          {/* Quantity Selector */}
          <div className="flex items-center space-x-4 mb-8">
            <span className="text-lg font-semibold text-sage-800">Quantity:</span>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                <Minus className="h-4 w-4" />
              </Button>
              <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
              <Button variant="outline" size="sm" onClick={() => setQuantity(quantity + 1)}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <Button
            onClick={handleAddToCart}
            size="lg"
            className="w-full bg-sage-700 hover:bg-sage-800 text-white mb-8 py-4 text-lg"
          >
            <ShoppingCart className="h-5 w-5 mr-2" />
            Add to Cart - {formatPrice(product.price * quantity)}
          </Button>

          {/* Key Benefits */}
          <div className="space-y-4 mb-8">
            <h3 className="text-xl font-semibold text-sage-800">Key Benefits:</h3>
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center space-x-3">
                <Leaf className="h-5 w-5 text-sage-700" />
                <span className="text-sage-700">100% Natural & Organic Ingredients</span>
              </div>
              <div className="flex items-center space-x-3">
                <Heart className="h-5 w-5 text-gold-500" />
                <span className="text-sage-700">Deep Nourishment & Repair</span>
              </div>
              <div className="flex items-center space-x-3">
                <Sparkles className="h-5 w-5 text-gold-500" />
                <span className="text-sage-700">Instant Shine & Softness</span>
              </div>
            </div>
          </div>

          {/* Free Shipping Notice */}
          <div className="bg-sage-50 p-4 rounded-lg">
            <p className="text-sage-700 text-center">
              ✨ <strong>Free shipping</strong> on all orders • <strong>30-day money-back guarantee</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Detailed Information Sections */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-sage-800 mb-4">Ingredients</h3>
            <ul className="space-y-2 text-sage-600">
              <li>• Organic Argan Oil</li>
              <li>• Cold-pressed Jojoba Oil</li>
              <li>• Rosemary Essential Oil</li>
              <li>• Vitamin E</li>
              <li>• Coconut Oil</li>
              <li>• Lavender Essential Oil</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-sage-800 mb-4">How to Use</h3>
            <ol className="space-y-2 text-sage-600">
              <li>1. Apply 2-3 drops to damp hair</li>
              <li>2. Massage gently into scalp</li>
              <li>3. Distribute through hair lengths</li>
              <li>4. Leave in or rinse after 30 mins</li>
              <li>5. Use 2-3 times per week</li>
            </ol>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-sage-800 mb-4">Product Details</h3>
            <ul className="space-y-2 text-sage-600">
              <li>• Size: 2 fl oz (60ml)</li>
              <li>• Suitable for all hair types</li>
              <li>• Cruelty-free & vegan</li>
              <li>• No sulfates or parabens</li>
              <li>• Made in USA</li>
              <li>• Shelf life: 24 months</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
