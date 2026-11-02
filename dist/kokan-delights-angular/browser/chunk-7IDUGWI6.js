import {
  ApiService
} from "./chunk-7ZEAQ4KM.js";
import {
  computed,
  inject,
  signal,
  tap,
  ɵɵdefineInjectable
} from "./chunk-J35KGWHD.js";

// src/app/services/auth.service.ts
function loadStoredUser() {
  const raw = localStorage.getItem("kd_user");
  return raw ? JSON.parse(raw) : null;
}
var AuthService = class _AuthService {
  api = inject(ApiService);
  currentUser = signal(loadStoredUser());
  isAdmin = computed(() => this.currentUser()?.role === "ADMIN");
  persist(res) {
    localStorage.setItem("kd_token", res.token);
    const user = { name: res.name, email: res.email, role: res.role };
    localStorage.setItem("kd_user", JSON.stringify(user));
    this.currentUser.set(user);
  }
  login(email, password) {
    return this.api.login({ email, password }).pipe(tap((res) => this.persist(res)));
  }
  register(payload) {
    return this.api.register(payload).pipe(tap((res) => this.persist(res)));
  }
  logout() {
    localStorage.removeItem("kd_token");
    localStorage.removeItem("kd_user");
    this.currentUser.set(null);
  }
  static \u0275fac = function AuthService_Factory(t) {
    return new (t || _AuthService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};

export {
  AuthService
};
//# sourceMappingURL=chunk-7IDUGWI6.js.map
