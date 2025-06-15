import { createClient } from "@supabase/supabase-js"

// Check if environment variables are available
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://demo.supabase.co"
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "demo-key"

// Create a mock client for preview environments
const createMockClient = () => ({
  auth: {
    getUser: async () => ({ data: { user: null }, error: null }),
    getSession: async () => ({ data: { session: null }, error: null }),
    signUp: async () => ({ data: { user: null }, error: { message: "Demo mode - Supabase not configured" } }),
    signInWithPassword: async () => ({
      data: { user: null },
      error: { message: "Demo mode - Supabase not configured" },
    }),
    signOut: async () => ({ error: null }),
    onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
  },
  from: (table: string) => ({
    select: (columns?: string) => ({
      eq: () => ({
        single: async () => ({ data: null, error: null }),
        limit: () => ({ data: [], error: null }),
      }),
      order: () => ({ data: [], error: null }),
      limit: () => ({ data: [], error: null }),
      data: [],
      error: null,
    }),
    insert: () => ({
      select: () => ({
        single: async () => ({ data: { id: "demo-id" }, error: null }),
      }),
      error: null,
    }),
    delete: () => ({
      eq: () => ({ error: null }),
    }),
  }),
})

// Use mock client if environment variables are not properly set
export const supabase =
  supabaseUrl === "https://demo.supabase.co" || supabaseAnonKey === "demo-key"
    ? (createMockClient() as any)
    : createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
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
        Insert: {
          id: string
          email?: string | null
          full_name?: string | null
          phone?: string | null
          address?: string | null
          city?: string | null
          state?: string | null
          zip_code?: string | null
          role?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string | null
          full_name?: string | null
          phone?: string | null
          address?: string | null
          city?: string | null
          state?: string | null
          zip_code?: string | null
          role?: string
          created_at?: string
          updated_at?: string
        }
      }
      products: {
        Row: {
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
        Insert: {
          id?: string
          name: string
          description?: string | null
          price: number
          image_url?: string | null
          category?: string
          in_stock?: boolean
          featured?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          price?: number
          image_url?: string | null
          category?: string
          in_stock?: boolean
          featured?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      orders: {
        Row: {
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
        Insert: {
          id?: string
          user_id?: string | null
          total_amount: number
          status?: string
          customer_name: string
          customer_email: string
          customer_phone?: string | null
          shipping_address: string
          shipping_city: string
          shipping_state: string
          shipping_zip: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string | null
          total_amount?: number
          status?: string
          customer_name?: string
          customer_email?: string
          customer_phone?: string | null
          shipping_address?: string
          shipping_city?: string
          shipping_state?: string
          shipping_zip?: string
          created_at?: string
          updated_at?: string
        }
      }
      order_items: {
        Row: {
          id: string
          order_id: string
          product_id: string
          quantity: number
          price: number
          created_at: string
        }
        Insert: {
          id?: string
          order_id: string
          product_id: string
          quantity: number
          price: number
          created_at?: string
        }
        Update: {
          id?: string
          order_id?: string
          product_id?: string
          quantity?: number
          price?: number
          created_at?: string
        }
      }
    }
  }
}
