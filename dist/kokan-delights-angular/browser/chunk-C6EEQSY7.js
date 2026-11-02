import {
  AuthService
} from "./chunk-7IDUGWI6.js";
import {
  ApiService
} from "./chunk-7ZEAQ4KM.js";
import {
  __async,
  computed,
  effect,
  firstValueFrom,
  inject,
  signal,
  ɵɵdefineInjectable
} from "./chunk-J35KGWHD.js";

// src/app/services/cart.service.ts
var CartService = class _CartService {
  api = inject(ApiService);
  auth = inject(AuthService);
  items = signal([]);
  loading = signal(false);
  count = computed(() => this.items().reduce((sum, i) => sum + i.quantity, 0));
  total = computed(() => this.items().reduce((sum, i) => {
    const price = i.variant ? i.variant.price : i.product?.price ?? 0;
    return sum + Number(price) * i.quantity;
  }, 0));
  constructor() {
    effect(() => {
      this.auth.currentUser();
      this.refresh();
    }, { allowSignalWrites: true });
  }
  refresh() {
    return __async(this, null, function* () {
      if (!this.auth.currentUser()) {
        this.items.set([]);
        return;
      }
      this.loading.set(true);
      try {
        const data = yield firstValueFrom(this.api.getCart());
        this.items.set(data || []);
      } finally {
        this.loading.set(false);
      }
    });
  }
  add(productId, quantity, variantId) {
    return __async(this, null, function* () {
      yield firstValueFrom(this.api.addToCart({ productId, variantId: variantId ?? null, quantity }));
      yield this.refresh();
    });
  }
  updateQuantity(itemId, quantity) {
    return __async(this, null, function* () {
      yield firstValueFrom(this.api.updateCartQuantity(itemId, quantity));
      yield this.refresh();
    });
  }
  remove(itemId) {
    return __async(this, null, function* () {
      yield firstValueFrom(this.api.removeCartItem(itemId));
      yield this.refresh();
    });
  }
  static \u0275fac = function CartService_Factory(t) {
    return new (t || _CartService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CartService, factory: _CartService.\u0275fac, providedIn: "root" });
};

export {
  CartService
};
//# sourceMappingURL=chunk-C6EEQSY7.js.map
