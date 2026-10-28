import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import {
  Address,
  AuthResponse,
  CartItem,
  Category,
  CategoryRequest,
  Order,
  Product,
  ProductRequest,
  RazorpayOrderResponse,
} from '../models';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  private base = environment.apiBaseUrl;

  // ---- Auth ----
  register(payload: { name: string; email: string; password: string; phone: string }) {
    return this.http.post<AuthResponse>(`${this.base}/auth/register`, payload);
  }
  login(payload: { email: string; password: string }) {
    return this.http.post<AuthResponse>(`${this.base}/auth/login`, payload);
  }

  // ---- Categories ----
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.base}/categories`);
  }

  // ---- Products ----
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.base}/products`);
  }
  getProduct(id: number | string): Observable<Product> {
    return this.http.get<Product>(`${this.base}/products/${id}`);
  }
  getProductsByCategory(categoryId: number | string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.base}/products/category/${categoryId}`);
  }
  searchProducts(keyword: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.base}/products/search`, { params: { keyword } });
  }

  // ---- Cart ----
  getCart(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(`${this.base}/cart`);
  }
  addToCart(payload: { productId: number; variantId: number | null; quantity: number }) {
    return this.http.post<CartItem>(`${this.base}/cart/add`, payload);
  }
  updateCartQuantity(itemId: number, quantity: number) {
    return this.http.put<CartItem | string>(`${this.base}/cart/${itemId}`, null, {
      params: { quantity },
    });
  }
  removeCartItem(itemId: number) {
    return this.http.delete<string>(`${this.base}/cart/${itemId}`);
  }

  // ---- Orders ----
  createOrder(payload: { addressId: number }): Observable<RazorpayOrderResponse> {
    return this.http.post<RazorpayOrderResponse>(`${this.base}/orders/create`, payload);
  }
  getMyOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.base}/orders/my`);
  }

  // ---- Payments ----
  verifyPayment(payload: {
  razorpayOrderId: string;
  razorpayPaymentId: string;
  razorpaySignature: string;
}) {
  return this.http.post(`${this.base}/payments/verify`, payload, { responseType: 'text' as const });
}

  // ---- Admin: Categories ----
  createCategory(payload: CategoryRequest): Observable<Category> {
    return this.http.post<Category>(`${this.base}/categories`, payload);
  }

  // ---- Admin: Products ----
  createProduct(payload: ProductRequest): Observable<Product> {
    return this.http.post<Product>(`${this.base}/products`, payload);
  }
  updateProduct(id: number, payload: ProductRequest): Observable<Product> {
    return this.http.put<Product>(`${this.base}/products/${id}`, payload);
  }
  deleteProduct(id: number) {
    return this.http.delete<string>(`${this.base}/products/${id}`);
  }

  // ---- Admin: Orders ----
  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.base}/orders/all`);
  }
  updateOrderStatus(orderId: number, status: string) {
    return this.http.put<string>(`${this.base}/orders/${orderId}/status`, null, {
      params: { status },
    });
  }
  getAllProductsForAdmin(): Observable<Product[]> {
  return this.http.get<Product[]>(`${this.base}/products/admin/all`);
}
reactivateProduct(id: number) {
  return this.http.put<Product>(`${this.base}/products/${id}/reactivate`, null);
}

  // ---- Addresses ----
  // NOTE: the shared backend does not yet expose an AddressController.
  // These calls assume a standard REST resource at /api/addresses
  // (GET list, POST create) — add that controller/service (Address entity +
  // AddressRepository already exist) for checkout to work end-to-end.
  getAddresses(): Observable<Address[]> {
    return this.http.get<Address[]>(`${this.base}/addresses`);
  }
  createAddress(payload: Address): Observable<Address> {
    return this.http.post<Address>(`${this.base}/addresses`, payload);
  }
}
