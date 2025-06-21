"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useCart } from "@/contexts/cart-context"
import { formatPrice } from "@/lib/utils"
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"
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
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto text-center">
          <ShoppingBag className="h-24 w-24 text-sage-300 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-sage-800 mb-4">Your Cart is Empty</h1>
          <p className="text-sage-600 mb-8">Looks like you haven't added any products to your cart yet.</p>
          <Button asChild size="lg" className="bg-gold-500 hover:bg-gold-600 text-white">
            <Link href="/products">Start Shopping</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-sage-800 mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {state.items.map((item) => (
            <Card key={item.product.id}>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <Image
                    src={item.product.image || "/placeholder.svg"}
                    alt={item.product.name}
                    width={120}
                    height={120}
                    className="rounded-lg object-cover"
                  />

                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-sage-800 mb-2">{item.product.name}</h3>
                    <p className="text-sage-600 mb-4">{item.product.description}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="text-lg font-semibold">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="flex items-center space-x-4">
                        <span className="text-xl font-bold text-gold-500">
                          {formatPrice(item.product.price * item.quantity)}
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => removeItem(item.product.id)}
                          className="text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Order Summary */}
        <div>
          <Card className="sticky top-4">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-sage-800 mb-4">Order Summary</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>{formatPrice(state.total)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>{formatPrice(state.total * 0.08)}</span>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span className="text-gold-500">{formatPrice(state.total * 1.08)}</span>
                </div>
              </div>

              <Button asChild size="lg" className="w-full bg-gold-500 hover:bg-gold-600 text-white">
                <Link href="/checkout">Proceed to Checkout</Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full mt-3 border-sage-700 text-sage-700 hover:bg-sage-50"
              >
                <Link href="/products">Continue Shopping</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
