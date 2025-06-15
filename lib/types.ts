export interface Product {
  id: string
  name: string
  description: string | null
  price: number
  image_url: string | null
  category: string
  in_stock: boolean
  featured: boolean
  created_at: string
  updated_at: string
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface Profile {
  id: string
  email: string | null
  full_name: string | null
  phone: string | null
  address: string | null
  city: string | null
  state: string | null
  zip_code: string | null
  role: string
  created_at: string
  updated_at: string
}

export interface Order {
  id: string
  user_id: string | null
  total_amount: number
  status: string
  customer_name: string
  customer_email: string
  customer_phone: string | null
  shipping_address: string
  shipping_city: string
  shipping_state: string
  shipping_zip: string
  created_at: string
  updated_at: string
}
