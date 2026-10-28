export interface Category {
  id: number;
  name: string;
  description?: string;
  imageUrl?: string;
}

export interface ProductVariant {
  id: number;
  label: string;
  price: number;
  stock: number;
}

export interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  imageUrl?: string;
  stock: number;
  active?: boolean;
  category?: Category;
  variants?: ProductVariant[];
}

export interface CartItem {
  id: number;
  quantity: number;
  product: Product;
  variant?: ProductVariant | null;
}

export interface Address {
  id?: number;
  fullName: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  pincode: string;
}

export interface OrderItem {
  id: number;
  quantity: number;
  priceAtPurchase: number;
  variantLabel?: string;
  product: Product;
}

export interface Order {
  id: number;
  totalAmount: number;
  status: 'PENDING' | 'CONFIRMED' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED';
  paymentStatus: 'PENDING' | 'PAID' | 'FAILED' | 'REFUNDED';
  razorpayOrderId?: string;
  razorpayPaymentId?: string;
  createdAt: string;
  shippingAddress: Address;
  items: OrderItem[];
}

export interface RazorpayOrderResponse {
  razorpayOrderId: string;
  amount: number;
  currency: string;
  dbOrderId: number;
}

export interface AuthResponse {
  token: string;
  name: string;
  email: string;
  role: 'USER' | 'ADMIN';
}

export interface AuthUser {
  name: string;
  email: string;
  role: 'USER' | 'ADMIN';
}

export interface CategoryRequest {
  name: string;
  description?: string;
  imageUrl?: string;
}

export interface ProductVariantRequest {
  label: string;
  price: number;
  stock: number;
}

export interface ProductRequest {
  name: string;
  description?: string;
  price: number;
  categoryId: number;
  imageUrl?: string;
  stock: number;
  variants?: ProductVariantRequest[];
}
