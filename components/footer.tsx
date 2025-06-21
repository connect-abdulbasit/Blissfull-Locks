import Link from "next/link"
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-sage-800 text-cream-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gold-400">Blissful Locks</h3>
            <p className="text-cream-200 mb-4">Natural hair oils crafted with love for beautiful, healthy hair.</p>
            <div className="flex space-x-4">
              <Instagram className="h-5 w-5 hover:text-gold-400 cursor-pointer transition-colors" />
              <Facebook className="h-5 w-5 hover:text-gold-400 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-gold-400 cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/products" className="block text-cream-200 hover:text-gold-400 transition-colors">
                Shop Now
              </Link>
              <Link href="/about" className="block text-cream-200 hover:text-gold-400 transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="block text-cream-200 hover:text-gold-400 transition-colors">
                Contact
              </Link>
              <Link href="/shipping" className="block text-cream-200 hover:text-gold-400 transition-colors">
                Shipping Info
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Customer Care</h4>
            <div className="space-y-2">
              <Link href="/faq" className="block text-cream-200 hover:text-gold-400 transition-colors">
                FAQ
              </Link>
              <Link href="/returns" className="block text-cream-200 hover:text-gold-400 transition-colors">
                Returns
              </Link>
              <Link href="/privacy" className="block text-cream-200 hover:text-gold-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block text-cream-200 hover:text-gold-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-cream-200">hello@blissfullocks.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-cream-200">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-cream-200">123 Beauty Ave, NY 10001</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-sage-700 mt-8 pt-8 text-center text-cream-200">
          <p>&copy; 2024 Blissful Locks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
