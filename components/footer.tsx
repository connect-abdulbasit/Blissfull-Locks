import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-sage-800 text-cream-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-gold-400">Blissful Locks</h3>
            <p className="text-cream-200 mb-4">Premium natural hair oils crafted with love for your beautiful locks.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gold-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-cream-200 hover:text-gold-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-cream-200 hover:text-gold-400 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-cream-200 hover:text-gold-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-cream-200 hover:text-gold-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gold-400">Customer Care</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/shipping" className="text-cream-200 hover:text-gold-400 transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-cream-200 hover:text-gold-400 transition-colors">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-cream-200 hover:text-gold-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-cream-200 hover:text-gold-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gold-400">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gold-400" />
                <span className="text-cream-200">hello@blissfullocks.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gold-400" />
                <span className="text-cream-200">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gold-400" />
                <span className="text-cream-200">123 Beauty Lane, Wellness City</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-sage-700 mt-8 pt-8 text-center">
          <p className="text-cream-200">&copy; {new Date().getFullYear()} Blissful Locks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
