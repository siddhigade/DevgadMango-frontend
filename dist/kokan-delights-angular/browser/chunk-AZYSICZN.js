import {
  CartService
} from "./chunk-C6EEQSY7.js";
import {
  AuthService
} from "./chunk-7IDUGWI6.js";
import {
  ApiService
} from "./chunk-7ZEAQ4KM.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-3CL6RF4O.js";
import {
  __async,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-J35KGWHD.js";

// src/app/pages/product-detail/product-detail.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ProductDetailComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275text(1, "Loading\u2026");
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275text(1, "Product not found.");
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 4);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.product().imageUrl, \u0275\u0275sanitizeUrl)("alt", ctx_r1.product().name);
  }
}
function ProductDetailComponent_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1, " Kokan Delights ");
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_Conditional_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.product().description);
  }
}
function ProductDetailComponent_Conditional_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1, "In stock");
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_Conditional_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1, "Sold out");
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_Conditional_2_Conditional_14_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function ProductDetailComponent_Conditional_2_Conditional_14_For_5_Template_button_click_0_listener() {
      const v_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectVariant(v_r4));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_12_0;
    let tmp_13_0;
    let tmp_14_0;
    let tmp_15_0;
    let tmp_16_0;
    const v_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("border-laterite", ((tmp_12_0 = ctx_r1.variant()) == null ? null : tmp_12_0.id) === v_r4.id)("bg-laterite", ((tmp_13_0 = ctx_r1.variant()) == null ? null : tmp_13_0.id) === v_r4.id)("text-sand", ((tmp_14_0 = ctx_r1.variant()) == null ? null : tmp_14_0.id) === v_r4.id)("border-sandDeep", ((tmp_15_0 = ctx_r1.variant()) == null ? null : tmp_15_0.id) !== v_r4.id)("text-ink", ((tmp_16_0 = ctx_r1.variant()) == null ? null : tmp_16_0.id) !== v_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", v_r4.label, " ");
  }
}
function ProductDetailComponent_Conditional_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "p", 24);
    \u0275\u0275text(2, "Size / weight");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 25);
    \u0275\u0275repeaterCreate(4, ProductDetailComponent_Conditional_2_Conditional_14_For_5_Template, 2, 11, "button", 26, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.product().variants);
  }
}
function ProductDetailComponent_Conditional_2_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 20);
    \u0275\u0275text(1, "Added to your cart.");
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_Conditional_2_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1, "Couldn't add to cart. Please try again.");
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
    \u0275\u0275template(3, ProductDetailComponent_Conditional_2_Conditional_3_Template, 1, 2, "img", 4)(4, ProductDetailComponent_Conditional_2_Conditional_4_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "h1", 5);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ProductDetailComponent_Conditional_2_Conditional_8_Template, 2, 1, "p", 6);
    \u0275\u0275elementStart(9, "div", 7)(10, "span", 8);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, ProductDetailComponent_Conditional_2_Conditional_12_Template, 2, 0, "span", 9)(13, ProductDetailComponent_Conditional_2_Conditional_13_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, ProductDetailComponent_Conditional_2_Conditional_14_Template, 6, 0, "div", 10);
    \u0275\u0275elementStart(15, "div", 11)(16, "label", 12);
    \u0275\u0275text(17, "Qty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 13)(19, "button", 14);
    \u0275\u0275listener("click", function ProductDetailComponent_Conditional_2_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.decrement());
    });
    \u0275\u0275text(20, "\u2212");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 15);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 16);
    \u0275\u0275listener("click", function ProductDetailComponent_Conditional_2_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.increment());
    });
    \u0275\u0275text(24, "+");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 17)(26, "button", 18);
    \u0275\u0275listener("click", function ProductDetailComponent_Conditional_2_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addToCart());
    });
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "a", 19);
    \u0275\u0275text(29, " Order Through WhatsApp ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(30, ProductDetailComponent_Conditional_2_Conditional_30_Template, 2, 0, "p", 20)(31, ProductDetailComponent_Conditional_2_Conditional_31_Template, 2, 0, "p", 21);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(3, ctx_r1.product().imageUrl ? 3 : 4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.product().name);
    \u0275\u0275advance();
    \u0275\u0275conditional(8, ctx_r1.product().description ? 8 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u20B9", ctx_r1.currentPrice().toFixed(2), "");
    \u0275\u0275advance();
    \u0275\u0275conditional(12, ctx_r1.currentStock() > 0 ? 12 : 13);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(14, ((tmp_6_0 = ctx_r1.product().variants) == null ? null : tmp_6_0.length) ? 14 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.qty());
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.currentStock() <= 0 || ctx_r1.status() === "adding");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.status() === "adding" ? "Adding\u2026" : "Add to Cart", " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(30, ctx_r1.status() === "added" ? 30 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(31, ctx_r1.status() === "error" ? 31 : -1);
  }
}
var ProductDetailComponent = class _ProductDetailComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  api = inject(ApiService);
  auth = inject(AuthService);
  cart = inject(CartService);
  product = signal(null);
  variant = signal(null);
  qty = signal(1);
  loading = signal(true);
  status = signal("idle");
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    this.loading.set(true);
    this.api.getProduct(id).subscribe({
      next: (p) => {
        this.product.set(p);
        this.variant.set(p.variants?.[0] ?? null);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  selectVariant(v) {
    this.variant.set(v);
  }
  decrement() {
    this.qty.update((q) => Math.max(1, q - 1));
  }
  increment() {
    this.qty.update((q) => q + 1);
  }
  currentPrice() {
    const p = this.product();
    const v = this.variant();
    return v ? v.price : p?.price ?? 0;
  }
  currentStock() {
    const p = this.product();
    const v = this.variant();
    return v ? v.stock : p?.stock ?? 0;
  }
  addToCart() {
    return __async(this, null, function* () {
      const p = this.product();
      if (!p)
        return;
      if (!this.auth.currentUser()) {
        this.router.navigate(["/login"], { queryParams: { redirectTo: `/products/${p.id}` } });
        return;
      }
      this.status.set("adding");
      try {
        yield this.cart.add(p.id, this.qty(), this.variant()?.id);
        this.status.set("added");
      } catch {
        this.status.set("error");
      }
    });
  }
  static \u0275fac = function ProductDetailComponent_Factory(t) {
    return new (t || _ProductDetailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductDetailComponent, selectors: [["kd-product-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 1, consts: [[1, "mx-auto", "max-w-6xl", "px-4", "py-16", "text-ink/60"], [1, "mx-auto", "max-w-6xl", "px-4", "py-10"], [1, "grid", "gap-10", "md:grid-cols-2"], [1, "aspect-square", "overflow-hidden", "rounded-2xl", "bg-sandDeep"], [1, "h-full", "w-full", "object-cover", 3, "src", "alt"], [1, "font-display", "text-3xl", "font-semibold", "text-sahyadri"], [1, "mt-3", "leading-relaxed", "text-ink/70"], [1, "mt-6", "flex", "items-baseline", "gap-3"], [1, "font-display", "text-3xl", "font-bold", "text-laterite"], [1, "text-sm", "font-semibold", "text-sea"], [1, "mt-6"], [1, "mt-6", "flex", "items-center", "gap-3"], [1, "text-sm", "font-semibold", "text-ink/70"], [1, "flex", "items-center", "rounded-full", "border-2", "border-sandDeep"], ["aria-label", "Decrease quantity", 1, "px-3", "py-1.5", "text-lg", "text-sahyadri", 3, "click"], [1, "w-8", "text-center", "font-semibold"], ["aria-label", "Increase quantity", 1, "px-3", "py-1.5", "text-lg", "text-sahyadri", 3, "click"], [1, "mt-8", "flex", "flex-wrap", "gap-4"], [1, "btn-primary", 3, "click", "disabled"], ["href", "https://wa.me/7972889731", "target", "_blank", "rel", "noreferrer", 1, "btn-secondary"], [1, "mt-3", "text-sm", "font-semibold", "text-sea"], [1, "mt-3", "text-sm", "font-semibold", "text-laterite"], [1, "flex", "h-full", "w-full", "items-center", "justify-center", "font-display", "text-sahyadri/40"], [1, "text-sm", "font-semibold", "text-ink/40"], [1, "mb-2", "text-sm", "font-semibold", "text-ink/70"], [1, "flex", "flex-wrap", "gap-2"], [1, "rounded-full", "border-2", "px-4", "py-1.5", "text-sm", "font-semibold", "transition", 3, "border-laterite", "bg-laterite", "text-sand", "border-sandDeep", "text-ink"], [1, "rounded-full", "border-2", "px-4", "py-1.5", "text-sm", "font-semibold", "transition", 3, "click"]], template: function ProductDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ProductDetailComponent_Conditional_0_Template, 2, 0, "div", 0)(1, ProductDetailComponent_Conditional_1_Template, 2, 0)(2, ProductDetailComponent_Conditional_2_Template, 32, 11);
    }
    if (rf & 2) {
      \u0275\u0275conditional(0, ctx.loading() ? 0 : !ctx.product() ? 1 : 2);
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductDetailComponent, { className: "ProductDetailComponent", filePath: "src\\app\\pages\\product-detail\\product-detail.component.ts", lineNumber: 14 });
})();
export {
  ProductDetailComponent
};
//# sourceMappingURL=chunk-AZYSICZN.js.map
