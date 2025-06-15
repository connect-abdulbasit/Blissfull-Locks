"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function OrderSuccessPage() {
  const searchParams = useSearchParams()
  const orderId = searchParams.get("orderId")

  return (
    <div className="py-20 bg-cream-50 min-h-screen">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-sage-800 mb-4">Order Confirmed!</h1>
          <p className="text-sage-600 mb-6">Thank you for your purchase! Your order has been successfully placed.</p>
          {orderId && <p className="text-sm text-sage-500 mb-6">Order ID: {orderId}</p>}
          <div className="space-y-4">
            <Link href="/products">
              <Button className="w-full bg-gold-500 hover:bg-gold-600 text-white">Continue Shopping</Button>
            </Link>
            <Link href="/">
              <Button variant="outline" className="w-full border-sage-300 text-sage-700 hover:bg-sage-50">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
