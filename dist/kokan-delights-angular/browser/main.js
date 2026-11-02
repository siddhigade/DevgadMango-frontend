import {
  CartService
} from "./chunk-C6EEQSY7.js";
import {
  AuthService
} from "./chunk-7IDUGWI6.js";
import "./chunk-7ZEAQ4KM.js";
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  bootstrapApplication,
  provideRouter
} from "./chunk-3CL6RF4O.js";
import {
  CommonModule,
  catchError,
  inject,
  provideHttpClient,
  signal,
  throwError,
  withInterceptors,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-J35KGWHD.js";

// src/app/guards/auth.guard.ts
var authGuard = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (auth.currentUser())
    return true;
  return router.createUrlTree(["/login"], { queryParams: { redirectTo: state.url } });
};

// src/app/guards/admin.guard.ts
var adminGuard = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (!auth.currentUser()) {
    return router.createUrlTree(["/login"], { queryParams: { redirectTo: state.url } });
  }
  if (!auth.isAdmin()) {
    return router.createUrlTree(["/"]);
  }
  return true;
};

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    loadComponent: () => import("./chunk-U7VXQM6H.js").then((m) => m.HomeComponent)
  },
  {
    path: "products",
    loadComponent: () => import("./chunk-QHNPESJS.js").then((m) => m.ProductsComponent)
  },
  {
    path: "products/:id",
    loadComponent: () => import("./chunk-AZYSICZN.js").then((m) => m.ProductDetailComponent)
  },
  {
    path: "cart",
    loadComponent: () => import("./chunk-FIVQT7GE.js").then((m) => m.CartComponent)
  },
  {
    path: "login",
    loadComponent: () => import("./chunk-L7JLDCSK.js").then((m) => m.LoginComponent)
  },
  {
    path: "register",
    loadComponent: () => import("./chunk-EYRPSGI7.js").then((m) => m.RegisterComponent)
  },
  {
    path: "checkout",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-DEY5VWKA.js").then((m) => m.CheckoutComponent)
  },
  {
    path: "orders",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-F74ACW7L.js").then((m) => m.OrdersComponent)
  },
  {
    path: "admin",
    canActivate: [adminGuard],
    loadComponent: () => import("./chunk-6JYP3S2U.js").then((m) => m.AdminLayoutComponent),
    children: [
      {
        path: "",
        loadComponent: () => import("./chunk-RJHJLRGJ.js").then((m) => m.AdminOverviewComponent)
      },
      {
        path: "products",
        loadComponent: () => import("./chunk-NP7RSGIJ.js").then((m) => m.AdminProductsComponent)
      },
      {
        path: "categories",
        loadComponent: () => import("./chunk-IMGPLNQK.js").then((m) => m.AdminCategoriesComponent)
      },
      {
        path: "orders",
        loadComponent: () => import("./chunk-GGDPNKA3.js").then((m) => m.AdminOrdersComponent)
      }
    ]
  },
  {
    path: "**",
    loadComponent: () => import("./chunk-W3I5AMLJ.js").then((m) => m.NotFoundComponent)
  }
];

// src/app/interceptors/auth.interceptor.ts
var authInterceptor = (req, next) => {
  const token = localStorage.getItem("kd_token");
  const authedReq = token ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } }) : req;
  return next(authedReq).pipe(catchError((err) => {
    if (err.status === 401) {
      localStorage.removeItem("kd_token");
      localStorage.removeItem("kd_user");
    }
    return throwError(() => err);
  }));
};

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
};

// src/app/components/navbar/navbar.component.ts
var _forTrack0 = ($index, $item) => $item.to;
var _c0 = (a0) => ({ exact: a0 });
function NavbarComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const l_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", l_r1.to)("routerLinkActiveOptions", \u0275\u0275pureFunction1(3, _c0, l_r1.to === "/"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", l_r1.label, " ");
  }
}
function NavbarComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 6);
    \u0275\u0275text(1, " Admin ");
    \u0275\u0275elementEnd();
  }
}
function NavbarComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "span", 16);
    \u0275\u0275text(2, " Hi, ");
    \u0275\u0275elementStart(3, "span", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 18);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_10_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.logout());
    });
    \u0275\u0275text(6, " Logout ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx.name.split(" ")[0]);
  }
}
function NavbarComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 19);
    \u0275\u0275text(1, " Login ");
    \u0275\u0275elementEnd();
  }
}
function NavbarComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 13);
  }
}
function NavbarComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 20);
  }
}
function NavbarComponent_Conditional_21_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 26);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_21_For_3_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.open.set(false));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const l_r5 = ctx.$implicit;
    \u0275\u0275property("routerLink", l_r5.to)("routerLinkActiveOptions", \u0275\u0275pureFunction1(3, _c0, l_r5.to === "/"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", l_r5.label, " ");
  }
}
function NavbarComponent_Conditional_21_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 27);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_21_Conditional_4_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.open.set(false));
    });
    \u0275\u0275text(1, " Admin ");
    \u0275\u0275elementEnd();
  }
}
function NavbarComponent_Conditional_21_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_21_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.logout());
    });
    \u0275\u0275text(1, "Logout");
    \u0275\u0275elementEnd();
  }
}
function NavbarComponent_Conditional_21_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 29);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_21_Conditional_7_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.open.set(false));
    });
    \u0275\u0275text(1, "Login");
    \u0275\u0275elementEnd();
  }
}
function NavbarComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 21);
    \u0275\u0275repeaterCreate(2, NavbarComponent_Conditional_21_For_3_Template, 2, 5, "a", 22, _forTrack0);
    \u0275\u0275template(4, NavbarComponent_Conditional_21_Conditional_4_Template, 2, 0, "a", 23);
    \u0275\u0275elementStart(5, "div", 24);
    \u0275\u0275template(6, NavbarComponent_Conditional_21_Conditional_6_Template, 2, 0, "button", 25)(7, NavbarComponent_Conditional_21_Conditional_7_Template, 2, 0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.navLinks);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(4, ctx_r2.auth.isAdmin() ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(6, ctx_r2.auth.currentUser() ? 6 : 7);
  }
}
var NavbarComponent = class _NavbarComponent {
  auth = inject(AuthService);
  cart = inject(CartService);
  router = inject(Router);
  open = signal(false);
  navLinks = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/orders", label: "My Orders" }
  ];
  toggleMenu() {
    this.open.update((o) => !o);
  }
  logout() {
    this.auth.logout();
    this.open.set(false);
    this.router.navigate(["/"]);
  }
  static \u0275fac = function NavbarComponent_Factory(t) {
    return new (t || _NavbarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NavbarComponent, selectors: [["kd-navbar"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 23, vars: 6, consts: [[1, "sticky", "top-0", "z-40", "border-b", "border-sandDeep/60", "bg-gradient-to-r", "from-white", "via-cream", "to-white", "shadow-md", "backdrop-blur"], [1, "mx-auto", "flex", "max-w-6xl", "items-center", "justify-between", "px-4", "py-5"], ["routerLink", "/", 1, "flex", "items-center", "gap-2"], [1, "font-display", "text-3xl", "font-bold", "tracking-wide", "text-brand"], [1, "hidden", "items-center", "gap-2", "md:flex"], ["routerLinkActive", "bg-brand text-white shadow-sm", 1, "rounded-full", "px-5", "py-2.5", "font-body", "text-base", "font-semibold", "text-ink/70", "transition", "hover:bg-brand/10", "hover:text-brand", 3, "routerLink", "routerLinkActiveOptions"], ["routerLink", "/admin", "routerLinkActive", "bg-brand text-white shadow-sm", 1, "rounded-full", "px-5", "py-2.5", "font-body", "text-base", "font-semibold", "text-ink/70", "transition", "hover:bg-brand/10", "hover:text-brand"], [1, "flex", "items-center", "gap-4"], [1, "hidden", "items-center", "gap-3", "md:flex"], ["routerLink", "/cart", 1, "flex", "items-center", "gap-2", "rounded-full", "bg-brand", "px-5", "py-2.5", "font-body", "text-base", "font-semibold", "text-white", "shadow-md", "transition", "hover:bg-brandDark", "hover:shadow-lg"], [1, "text-lg"], ["aria-label", "Toggle menu", 1, "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-full", "text-ink", "transition", "hover:bg-brand/10", "md:hidden", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "h-7", "w-7"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6 18L18 6M6 6l12 12"], [1, "border-t", "border-sandDeep", "bg-white", "px-4", "py-4", "md:hidden"], [1, "coastline-divider"], [1, "font-body", "text-base", "text-ink/60"], [1, "font-semibold", "text-ink"], [1, "font-body", "text-base", "font-semibold", "text-brand", "transition", "hover:text-brandDark", "hover:underline", 3, "click"], ["routerLink", "/login", 1, "hidden", "font-body", "text-base", "font-semibold", "text-brand", "transition", "hover:text-brandDark", "hover:underline", "md:block"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M4 6h16M4 12h16M4 18h16"], [1, "flex", "flex-col", "gap-1"], ["routerLinkActive", "bg-brand text-white", 1, "rounded-lg", "px-4", "py-3", "font-body", "text-base", "font-medium", "text-ink/70", "transition", "hover:bg-brand/10", 3, "routerLink", "routerLinkActiveOptions"], ["routerLink", "/admin", 1, "rounded-lg", "px-4", "py-3", "font-body", "text-base", "font-medium", "text-ink/70", "transition", "hover:bg-brand/10"], [1, "mt-2", "border-t", "border-sandDeep", "pt-3"], [1, "px-4", "py-3", "text-left", "font-body", "text-base", "font-semibold", "text-brand"], ["routerLinkActive", "bg-brand text-white", 1, "rounded-lg", "px-4", "py-3", "font-body", "text-base", "font-medium", "text-ink/70", "transition", "hover:bg-brand/10", 3, "click", "routerLink", "routerLinkActiveOptions"], ["routerLink", "/admin", 1, "rounded-lg", "px-4", "py-3", "font-body", "text-base", "font-medium", "text-ink/70", "transition", "hover:bg-brand/10", 3, "click"], [1, "px-4", "py-3", "text-left", "font-body", "text-base", "font-semibold", "text-brand", 3, "click"], ["routerLink", "/login", 1, "block", "px-4", "py-3", "font-body", "text-base", "font-semibold", "text-brand", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "div", 1)(2, "a", 2)(3, "span", 3);
      \u0275\u0275text(4, "Amba Ratna");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "nav", 4);
      \u0275\u0275repeaterCreate(6, NavbarComponent_For_7_Template, 2, 5, "a", 5, _forTrack0);
      \u0275\u0275template(8, NavbarComponent_Conditional_8_Template, 2, 0, "a", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 7);
      \u0275\u0275template(10, NavbarComponent_Conditional_10_Template, 7, 1, "div", 8)(11, NavbarComponent_Conditional_11_Template, 2, 0);
      \u0275\u0275elementStart(12, "a", 9)(13, "span", 10);
      \u0275\u0275text(14, "\u{1F6D2}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "span");
      \u0275\u0275text(16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "button", 11);
      \u0275\u0275listener("click", function NavbarComponent_Template_button_click_17_listener() {
        return ctx.toggleMenu();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(18, "svg", 12);
      \u0275\u0275template(19, NavbarComponent_Conditional_19_Template, 1, 0, ":svg:path", 13)(20, NavbarComponent_Conditional_20_Template, 1, 0);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(21, NavbarComponent_Conditional_21_Template, 8, 2, "div", 14);
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(22, "div", 15);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_2_0;
      \u0275\u0275advance(6);
      \u0275\u0275repeater(ctx.navLinks);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(8, ctx.auth.isAdmin() ? 8 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(10, (tmp_2_0 = ctx.auth.currentUser()) ? 10 : 11, tmp_2_0);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate2("", ctx.cart.count(), " / Rs.", ctx.cart.total().toFixed(2), "");
      \u0275\u0275advance(3);
      \u0275\u0275conditional(19, ctx.open() ? 19 : 20);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(21, ctx.open() ? 21 : -1);
    }
  }, dependencies: [CommonModule, RouterLink, RouterLinkActive], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NavbarComponent, { className: "NavbarComponent", filePath: "src\\app\\components\\navbar\\navbar.component.ts", lineNumber: 13 });
})();

// src/app/components/footer/footer.component.ts
var FooterComponent = class _FooterComponent {
  year = (/* @__PURE__ */ new Date()).getFullYear();
  static \u0275fac = function FooterComponent_Factory(t) {
    return new (t || _FooterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["kd-footer"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 32, vars: 0, consts: [[1, "mt-16"], [1, "coastline-divider"], [1, "bg-cream", "text-ink/70"], [1, "mx-auto", "grid", "max-w-6xl", "gap-8", "px-4", "py-10", "md:grid-cols-3"], [1, "mb-2", "font-display", "text-lg", "font-semibold", "text-brand"], [1, "text-sm", "leading-relaxed"], [1, "mb-2", "font-semibold", "text-ink"], [1, "space-y-1", "text-sm"], ["routerLink", "/", 1, "hover:text-brand"], ["routerLink", "/products", 1, "hover:text-brand"], ["routerLink", "/cart", 1, "hover:text-brand"], ["routerLink", "/orders", 1, "hover:text-brand"], ["href", "https://wa.me/7972889731", "target", "_blank", "rel", "noreferrer", 1, "text-sm", "text-brand", "hover:underline"], [1, "border-t", "border-sandDeep", "py-4", "text-center", "text-xs", "text-ink/50"]], template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "footer", 0);
      \u0275\u0275element(1, "div", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div")(5, "h3", 4);
      \u0275\u0275text(6, "Kokan Delights");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 5);
      \u0275\u0275text(8, " Authentic flavours from the Aparaant coast, mangoes, pickles, syrups and more, handpicked from Ratnagiri and delivered fresh to your door. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div")(10, "h4", 6);
      \u0275\u0275text(11, "Explore");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "ul", 7)(13, "li")(14, "a", 8);
      \u0275\u0275text(15, "Home");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "li")(17, "a", 9);
      \u0275\u0275text(18, "Products");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "li")(20, "a", 10);
      \u0275\u0275text(21, "Cart");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "li")(23, "a", 11);
      \u0275\u0275text(24, "My Orders");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(25, "div")(26, "h4", 6);
      \u0275\u0275text(27, "Order via WhatsApp");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "a", 12);
      \u0275\u0275text(29, " +91 7972889731 ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(30, "div", 13);
      \u0275\u0275text(31, " Kokan Delights. All rights reserved. ");
      \u0275\u0275elementEnd()()();
    }
  }, dependencies: [RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src\\app\\components\\footer\\footer.component.ts", lineNumber: 48 });
})();

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  static \u0275fac = function AppComponent_Factory(t) {
    return new (t || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["kd-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 0, consts: [[1, "flex", "min-h-screen", "flex-col"], [1, "flex-1"]], template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "kd-navbar");
      \u0275\u0275elementStart(2, "main", 1);
      \u0275\u0275element(3, "router-outlet");
      \u0275\u0275elementEnd();
      \u0275\u0275element(4, "kd-footer");
      \u0275\u0275elementEnd();
    }
  }, dependencies: [RouterOutlet, NavbarComponent, FooterComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src\\app\\app.component.ts", lineNumber: 20 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
