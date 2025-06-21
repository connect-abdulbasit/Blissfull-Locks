"use client"

import Link from "next/link"
import { ShoppingBag, User, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart-context"
import { useState } from "react"

export default function Header() {
  const { state } = useCart()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="bg-cream-50 border-b border-sage-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-sage-800">
            Blissful Locks
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sage-700 hover:text-sage-900 transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-sage-700 hover:text-sage-900 transition-colors">
              Shop
            </Link>
            <Link href="/about" className="text-sage-700 hover:text-sage-900 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sage-700 hover:text-sage-900 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="/auth" className="text-sage-700 hover:text-sage-900">
              <User className="h-6 w-6" />
            </Link>
            <Link href="/cart" className="relative text-sage-700 hover:text-sage-900">
              <ShoppingBag className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-sage-200 pt-4">
            <div className="flex flex-col space-y-2">
              <Link href="/" className="text-sage-700 hover:text-sage-900 py-2">
                Home
              </Link>
              <Link href="/products" className="text-sage-700 hover:text-sage-900 py-2">
                Shop
              </Link>
              <Link href="/about" className="text-sage-700 hover:text-sage-900 py-2">
                About
              </Link>
              <Link href="/contact" className="text-sage-700 hover:text-sage-900 py-2">
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
