import {
  HttpClient,
  inject,
  ɵɵdefineInjectable
} from "./chunk-J35KGWHD.js";

// src/environments/environment.ts
var environment = {
  production: false,
  apiBaseUrl: "http://localhost:8080/api",
  razorpayKeyId: "rzp_test_T6d5WxhAigxezS"
};

// src/app/services/api.service.ts
var ApiService = class _ApiService {
  http = inject(HttpClient);
  base = environment.apiBaseUrl;
  // ---- Auth ----
  register(payload) {
    return this.http.post(`${this.base}/auth/register`, payload);
  }
  login(payload) {
    return this.http.post(`${this.base}/auth/login`, payload);
  }
  // ---- Categories ----
  getCategories() {
    return this.http.get(`${this.base}/categories`);
  }
  // ---- Products ----
  getProducts() {
    return this.http.get(`${this.base}/products`);
  }
  getProduct(id) {
    return this.http.get(`${this.base}/products/${id}`);
  }
  getProductsByCategory(categoryId) {
    return this.http.get(`${this.base}/products/category/${categoryId}`);
  }
  searchProducts(keyword) {
    return this.http.get(`${this.base}/products/search`, { params: { keyword } });
  }
  // ---- Cart ----
  getCart() {
    return this.http.get(`${this.base}/cart`);
  }
  addToCart(payload) {
    return this.http.post(`${this.base}/cart/add`, payload);
  }
  updateCartQuantity(itemId, quantity) {
    return this.http.put(`${this.base}/cart/${itemId}`, null, {
      params: { quantity }
    });
  }
  removeCartItem(itemId) {
    return this.http.delete(`${this.base}/cart/${itemId}`);
  }
  // ---- Orders ----
  createOrder(payload) {
    return this.http.post(`${this.base}/orders/create`, payload);
  }
  getMyOrders() {
    return this.http.get(`${this.base}/orders/my`);
  }
  // ---- Payments ----
  verifyPayment(payload) {
    return this.http.post(`${this.base}/payments/verify`, payload, { responseType: "text" });
  }
  // ---- Admin: Categories ----
  createCategory(payload) {
    return this.http.post(`${this.base}/categories`, payload);
  }
  // ---- Admin: Products ----
  createProduct(payload) {
    return this.http.post(`${this.base}/products`, payload);
  }
  updateProduct(id, payload) {
    return this.http.put(`${this.base}/products/${id}`, payload);
  }
  deleteProduct(id) {
    return this.http.delete(`${this.base}/products/${id}`);
  }
  // ---- Admin: Orders ----
  getAllOrders() {
    return this.http.get(`${this.base}/orders/all`);
  }
  updateOrderStatus(orderId, status) {
    return this.http.put(`${this.base}/orders/${orderId}/status`, null, {
      params: { status }
    });
  }
  getAllProductsForAdmin() {
    return this.http.get(`${this.base}/products/admin/all`);
  }
  reactivateProduct(id) {
    return this.http.put(`${this.base}/products/${id}/reactivate`, null);
  }
  // ---- Addresses ----
  // NOTE: the shared backend does not yet expose an AddressController.
  // These calls assume a standard REST resource at /api/addresses
  // (GET list, POST create) — add that controller/service (Address entity +
  // AddressRepository already exist) for checkout to work end-to-end.
  getAddresses() {
    return this.http.get(`${this.base}/addresses`);
  }
  createAddress(payload) {
    return this.http.post(`${this.base}/addresses`, payload);
  }
  static \u0275fac = function ApiService_Factory(t) {
    return new (t || _ApiService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApiService, factory: _ApiService.\u0275fac, providedIn: "root" });
};

export {
  environment,
  ApiService
};
//# sourceMappingURL=chunk-7ZEAQ4KM.js.map
