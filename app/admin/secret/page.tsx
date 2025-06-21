"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { formatPrice } from "@/lib/utils"
import type { Order } from "@/lib/types"
import { Package, Calendar, User } from "lucide-react"

// Mock orders data for demonstration
const mockOrders: Order[] = [
  {
    id: "ORD-001",
    userId: "1",
    items: [
      {
        product: {
          id: "1",
          name: "Blissful Locks Hair Oil",
          price: 34.99,
          description: "",
          image: "",
          category: "",
          inStock: true,
        },
        quantity: 2,
      },
    ],
    total: 69.98,
    customerInfo: {
      name: "Sarah Johnson",
      email: "sarah@example.com",
      phone: "(555) 123-4567",
      address: "123 Main St, New York, NY 10001",
    },
    status: "processing",
    createdAt: "2024-01-15T10:30:00Z",
  },
  {
    id: "ORD-002",
    userId: "2",
    items: [
      {
        product: {
          id: "1",
          name: "Blissful Locks Hair Oil",
          price: 34.99,
          description: "",
          image: "",
          category: "",
          inStock: true,
        },
        quantity: 1,
      },
    ],
    total: 34.99,
    customerInfo: {
      name: "Maria Rodriguez",
      email: "maria@example.com",
      phone: "(555) 987-6543",
      address: "456 Oak Ave, Los Angeles, CA 90210",
    },
    status: "shipped",
    createdAt: "2024-01-14T14:22:00Z",
  },
  {
    id: "ORD-003",
    userId: "3",
    items: [
      {
        product: {
          id: "1",
          name: "Blissful Locks Hair Oil",
          price: 34.99,
          description: "",
          image: "",
          category: "",
          inStock: true,
        },
        quantity: 3,
      },
    ],
    total: 104.97,
    customerInfo: {
      name: "Jennifer Kim",
      email: "jennifer@example.com",
      phone: "(555) 456-7890",
      address: "789 Pine St, Chicago, IL 60601",
    },
    status: "delivered",
    createdAt: "2024-01-13T09:15:00Z",
  },
]

export default function AdminPage() {
  const [orders, setOrders] = useState<Order[]>([])
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // TODO: Check if user is authenticated and has admin role
    // For now, we'll simulate the check
    const checkAdminAccess = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // TODO: Replace with actual Supabase user check
      const isAdmin = true // This should check user.role === 'admin'

      if (!isAdmin) {
        window.location.href = "/"
        return
      }

      setIsAuthorized(true)
      setOrders(mockOrders)
      setIsLoading(false)
    }

    checkAdminAccess()
  }, [])

  const getStatusColor = (status: Order["status"]) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "processing":
        return "bg-blue-100 text-blue-800"
      case "shipped":
        return "bg-purple-100 text-purple-800"
      case "delivered":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const updateOrderStatus = (orderId: string, newStatus: Order["status"]) => {
    setOrders((prev) => prev.map((order) => (order.id === orderId ? { ...order, status: newStatus } : order)))
  }

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sage-700 mx-auto"></div>
          <p className="mt-4 text-sage-600">Checking admin access...</p>
        </div>
      </div>
    )
  }

  if (!isAuthorized) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-red-600 mb-4">Access Denied</h1>
          <p className="text-gray-600">You don't have permission to access this page.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-sage-800 mb-2">Admin Dashboard</h1>
        <p className="text-sage-600">Manage orders and customer information</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-sage-600">Total Orders</p>
                <p className="text-3xl font-bold text-sage-800">{orders.length}</p>
              </div>
              <Package className="h-8 w-8 text-sage-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-sage-600">Total Revenue</p>
                <p className="text-3xl font-bold text-gold-500">
                  {formatPrice(orders.reduce((sum, order) => sum + order.total, 0))}
                </p>
              </div>
              <div className="h-8 w-8 bg-gold-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">$</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-sage-600">Pending Orders</p>
                <p className="text-3xl font-bold text-yellow-600">
                  {orders.filter((order) => order.status === "pending").length}
                </p>
              </div>
              <Calendar className="h-8 w-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-sage-600">Customers</p>
                <p className="text-3xl font-bold text-sage-800">{new Set(orders.map((order) => order.userId)).size}</p>
              </div>
              <User className="h-8 w-8 text-sage-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Orders List */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-sage-800">Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {orders.map((order) => (
              <div key={order.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                    <div>
                      <h3 className="text-lg font-semibold text-sage-800">Order {order.id}</h3>
                      <p className="text-sm text-sage-600">
                        {new Date(order.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Badge className={getStatusColor(order.status)}>
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </Badge>
                    <span className="text-lg font-bold text-gold-500">{formatPrice(order.total)}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-sage-800 mb-2">Customer Information</h4>
                    <div className="text-sm text-sage-600 space-y-1">
                      <p>
                        <strong>Name:</strong> {order.customerInfo.name}
                      </p>
                      <p>
                        <strong>Email:</strong> {order.customerInfo.email}
                      </p>
                      <p>
                        <strong>Phone:</strong> {order.customerInfo.phone}
                      </p>
                      <p>
                        <strong>Address:</strong> {order.customerInfo.address}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sage-800 mb-2">Order Items</h4>
                    <div className="space-y-2">
                      {order.items.map((item, index) => (
                        <div key={index} className="flex justify-between text-sm">
                          <span>
                            {item.product.name} x{item.quantity}
                          </span>
                          <span className="text-gold-500 font-medium">
                            {formatPrice(item.product.price * item.quantity)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t flex flex-wrap gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => updateOrderStatus(order.id, "processing")}
                    disabled={order.status === "processing"}
                  >
                    Mark Processing
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => updateOrderStatus(order.id, "shipped")}
                    disabled={order.status === "shipped" || order.status === "delivered"}
                  >
                    Mark Shipped
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => updateOrderStatus(order.id, "delivered")}
                    disabled={order.status === "delivered"}
                  >
                    Mark Delivered
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
