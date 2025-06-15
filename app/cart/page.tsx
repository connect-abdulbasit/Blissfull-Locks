"use client"

import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { Minus, Plus, Trash2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CartPage() {
  const { state, dispatch } = useCart()

  const updateQuantity = (productId: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", productId, quantity })
  }

  const removeItem = (productId: string) => {
    dispatch({ type: "REMOVE_ITEM", productId })
  }

  if (state.items.length === 0) {
    return (
      <div className="py-20 bg-cream-50 min-h-screen">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-sage-800 mb-8">Your Cart</h1>
          <p className="text-xl text-sage-600 mb-8">Your cart is empty</p>
          <Link href="/products">
            <Button className="bg-gold-500 hover:bg-gold-600 text-white">Continue Shopping</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="py-20 bg-cream-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-sage-800 mb-8 text-center">Your Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {state.items.map((item) => (
              <div key={item.product.id} className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center space-x-4">
                  <Image
                    src={item.product.image_url || "/placeholder.svg?height=100&width=100"}
                    alt={item.product.name}
                    width={100}
                    height={100}
                    className="rounded-lg object-cover"
                  />

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-sage-800">{item.product.name}</h3>
                    <p className="text-sage-600">${item.product.price.toFixed(2)}</p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeItem(item.product.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg h-fit">
            <h2 className="text-2xl font-semibold text-sage-800 mb-4">Order Summary</h2>

            <div className="space-y-2 mb-4">
              {state.items.map((item) => (
                <div key={item.product.id} className="flex justify-between text-sage-600">
                  <span>
                    {item.product.name} x {item.quantity}
                  </span>
                  <span>${(item.product.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="border-t pt-4 mb-6">
              <div className="flex justify-between text-xl font-semibold text-sage-800">
                <span>Total</span>
                <span>${state.total.toFixed(2)}</span>
              </div>
            </div>

            <Link href="/checkout" className="w-full">
              <Button className="w-full bg-gold-500 hover:bg-gold-600 text-white">Proceed to Checkout</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
