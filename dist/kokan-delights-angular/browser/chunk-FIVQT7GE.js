import {
  CartService
} from "./chunk-C6EEQSY7.js";
import "./chunk-7IDUGWI6.js";
import "./chunk-7ZEAQ4KM.js";
import {
  Router,
  RouterLink
} from "./chunk-3CL6RF4O.js";
import {
  inject,
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

// src/app/pages/cart/cart.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function CartComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 2);
    \u0275\u0275text(1, "Loading cart\u2026");
    \u0275\u0275elementEnd();
  }
}
function CartComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "p", 4);
    \u0275\u0275text(2, "Your cart is empty.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 5);
    \u0275\u0275text(4, "Browse products");
    \u0275\u0275elementEnd()();
  }
}
function CartComponent_Conditional_5_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 13);
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", item_r3.product.imageUrl, \u0275\u0275sanitizeUrl)("alt", item_r3.product.name);
  }
}
function CartComponent_Conditional_5_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r3.variant.label);
  }
}
function CartComponent_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 12);
    \u0275\u0275template(2, CartComponent_Conditional_5_For_2_Conditional_2_Template, 1, 2, "img", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 14)(4, "p", 15);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, CartComponent_Conditional_5_For_2_Conditional_6_Template, 2, 1, "p", 16);
    \u0275\u0275elementStart(7, "p", 17);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 18)(10, "button", 19);
    \u0275\u0275listener("click", function CartComponent_Conditional_5_For_2_Template_button_click_10_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.decrement(item_r3.id, item_r3.quantity));
    });
    \u0275\u0275text(11, "\u2212");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 20);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 21);
    \u0275\u0275listener("click", function CartComponent_Conditional_5_For_2_Template_button_click_14_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.increment(item_r3.id, item_r3.quantity));
    });
    \u0275\u0275text(15, "+");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "button", 22);
    \u0275\u0275listener("click", function CartComponent_Conditional_5_For_2_Template_button_click_16_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.remove(item_r3.id));
    });
    \u0275\u0275text(17, " Remove ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(2, (item_r3.product == null ? null : item_r3.product.imageUrl) ? 2 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r3.product == null ? null : item_r3.product.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(6, item_r3.variant ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", ctx_r3.priceFor(item_r3).toFixed(2), "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(item_r3.quantity);
  }
}
function CartComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275repeaterCreate(1, CartComponent_Conditional_5_For_2_Template, 18, 5, "div", 7, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 8)(4, "span", 9);
    \u0275\u0275text(5, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 10);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 11);
    \u0275\u0275listener("click", function CartComponent_Conditional_5_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.goToCheckout());
    });
    \u0275\u0275text(9, "Proceed to Checkout");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.cart.items());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\u20B9", ctx_r3.cart.total().toFixed(2), "");
  }
}
var CartComponent = class _CartComponent {
  cart = inject(CartService);
  router = inject(Router);
  priceFor(item) {
    return item.variant ? item.variant.price : item.product?.price ?? 0;
  }
  decrement(itemId, quantity) {
    this.cart.updateQuantity(itemId, quantity - 1);
  }
  increment(itemId, quantity) {
    this.cart.updateQuantity(itemId, quantity + 1);
  }
  remove(itemId) {
    this.cart.remove(itemId);
  }
  goToCheckout() {
    this.router.navigate(["/checkout"]);
  }
  static \u0275fac = function CartComponent_Factory(t) {
    return new (t || _CartComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CartComponent, selectors: [["kd-cart"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 1, consts: [[1, "mx-auto", "max-w-4xl", "px-4", "py-10"], [1, "font-display", "text-3xl", "font-semibold", "text-sahyadri"], [1, "mt-6", "text-ink/60"], [1, "mt-8", "card", "p-10", "text-center"], [1, "text-ink/70"], ["routerLink", "/products", 1, "btn-primary", "mt-4", "inline-flex"], [1, "mt-6", "space-y-4"], [1, "card", "flex", "items-center", "gap-4", "p-4"], [1, "mt-8", "flex", "items-center", "justify-between", "card", "p-5"], [1, "font-display", "text-lg", "font-semibold", "text-sahyadri"], [1, "font-display", "text-2xl", "font-bold", "text-laterite"], [1, "btn-primary", "mt-6", "w-full", 3, "click"], [1, "h-20", "w-20", "flex-shrink-0", "overflow-hidden", "rounded-xl", "bg-sandDeep"], [1, "h-full", "w-full", "object-cover", 3, "src", "alt"], [1, "flex-1"], [1, "font-display", "font-semibold", "text-sahyadri"], [1, "text-sm", "text-ink/60"], [1, "text-sm", "font-semibold", "text-laterite"], [1, "flex", "items-center", "rounded-full", "border-2", "border-sandDeep"], ["aria-label", "Decrease quantity", 1, "px-3", "py-1", "text-lg", "text-sahyadri", 3, "click"], [1, "w-8", "text-center", "font-semibold"], ["aria-label", "Increase quantity", 1, "px-3", "py-1", "text-lg", "text-sahyadri", 3, "click"], [1, "text-sm", "font-semibold", "text-laterite", "hover:underline", 3, "click"]], template: function CartComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "Your Cart");
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, CartComponent_Conditional_3_Template, 2, 0, "p", 2)(4, CartComponent_Conditional_4_Template, 5, 0)(5, CartComponent_Conditional_5_Template, 10, 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275conditional(3, ctx.cart.loading() ? 3 : ctx.cart.items().length === 0 ? 4 : 5);
    }
  }, dependencies: [RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CartComponent, { className: "CartComponent", filePath: "src\\app\\pages\\cart\\cart.component.ts", lineNumber: 11 });
})();
export {
  CartComponent
};
//# sourceMappingURL=chunk-FIVQT7GE.js.map
