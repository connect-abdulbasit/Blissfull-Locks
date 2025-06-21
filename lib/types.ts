export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  inStock: boolean
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface User {
  id: string
  email: string
  name?: string
  phone?: string
  address?: string
  role?: "admin" | "user"
}

export interface Order {
  id: string
  userId: string
  items: CartItem[]
  total: number
  customerInfo: {
    name: string
    email: string
    phone: string
    address: string
  }
  status: "pending" | "processing" | "shipped" | "delivered"
  createdAt: string
}

export interface Testimonial {
  id: string
  name: string
  rating: number
  comment: string
  image?: string
}
