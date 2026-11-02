import {
  ApiService
} from "./chunk-7ZEAQ4KM.js";
import {
  RouterLink
} from "./chunk-3CL6RF4O.js";
import {
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3
} from "./chunk-J35KGWHD.js";

// src/app/pages/orders/orders.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function OrdersComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 2);
    \u0275\u0275text(1, "Loading orders\u2026");
    \u0275\u0275elementEnd();
  }
}
function OrdersComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "p", 4);
    \u0275\u0275text(2, "You haven't placed any orders yet.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 5);
    \u0275\u0275text(4, "Start shopping");
    \u0275\u0275elementEnd()();
  }
}
function OrdersComponent_Conditional_5_For_2_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 13)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 16);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", item_r1.product == null ? null : item_r1.product.name, "", item_r1.variantLabel ? " (" + item_r1.variantLabel + ")" : "", " \xD7 ", item_r1.quantity, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", ctx_r1.itemTotal(item_r1).toFixed(2), "");
  }
}
function OrdersComponent_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "div")(3, "p", 9);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 10);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 11);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "ul", 12);
    \u0275\u0275repeaterCreate(10, OrdersComponent_Conditional_5_For_2_For_11_Template, 5, 4, "li", 13, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 14)(13, "span", 15);
    \u0275\u0275text(14, " Payment: ");
    \u0275\u0275elementStart(15, "span", 16);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "span", 17);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const order_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Order #", order_r3.id, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(order_r3.createdAt));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.statusClasses[order_r3.status] || "bg-sandDeep text-ink/70");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", order_r3.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(order_r3.items);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(order_r3.paymentStatus);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", order_r3.totalAmount.toFixed(2), "");
  }
}
function OrdersComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275repeaterCreate(1, OrdersComponent_Conditional_5_For_2_Template, 19, 7, "div", 7, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.orders());
  }
}
var OrdersComponent = class _OrdersComponent {
  api = inject(ApiService);
  orders = signal([]);
  loading = signal(true);
  statusClasses = {
    PENDING: "bg-mango/20 text-mango",
    CONFIRMED: "bg-sea/20 text-sea",
    SHIPPED: "bg-sea/20 text-sea",
    DELIVERED: "bg-sahyadri/20 text-sahyadri",
    CANCELLED: "bg-laterite/20 text-laterite"
  };
  ngOnInit() {
    this.api.getMyOrders().subscribe({
      next: (orders) => {
        console.log("GET /orders/my succeeded:", orders);
        this.orders.set(orders || []);
        this.loading.set(false);
      },
      error: (err) => {
        console.log("GET /orders/my FAILED:", err.status, err.error);
        this.loading.set(false);
      }
    });
  }
  itemTotal(item) {
    return Number(item.priceAtPurchase) * item.quantity;
  }
  formatDate(date) {
    return new Date(date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric"
    });
  }
  static \u0275fac = function OrdersComponent_Factory(t) {
    return new (t || _OrdersComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrdersComponent, selectors: [["kd-orders"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 1, consts: [[1, "mx-auto", "max-w-3xl", "px-4", "py-10"], [1, "font-display", "text-3xl", "font-semibold", "text-sahyadri"], [1, "mt-6", "text-ink/60"], [1, "mt-8", "card", "p-10", "text-center"], [1, "text-ink/70"], ["routerLink", "/products", 1, "btn-primary", "mt-4", "inline-flex"], [1, "mt-6", "space-y-4"], [1, "card", "p-5"], [1, "flex", "flex-wrap", "items-center", "justify-between", "gap-2"], [1, "font-display", "font-semibold", "text-sahyadri"], [1, "text-xs", "text-ink/50"], [1, "rounded-full", "px-3", "py-1", "text-xs", "font-semibold"], [1, "mt-3", "divide-y", "divide-sandDeep", "text-sm"], [1, "flex", "justify-between", "py-2"], [1, "mt-3", "flex", "items-center", "justify-between", "border-t", "border-sandDeep", "pt-3"], [1, "text-sm", "text-ink/60"], [1, "font-semibold"], [1, "font-display", "text-lg", "font-bold", "text-laterite"]], template: function OrdersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "My Orders");
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, OrdersComponent_Conditional_3_Template, 2, 0, "p", 2)(4, OrdersComponent_Conditional_4_Template, 5, 0)(5, OrdersComponent_Conditional_5_Template, 3, 0);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275conditional(3, ctx.loading() ? 3 : ctx.orders().length === 0 ? 4 : 5);
    }
  }, dependencies: [RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrdersComponent, { className: "OrdersComponent", filePath: "src\\app\\pages\\orders\\orders.component.ts", lineNumber: 12 });
})();
export {
  OrdersComponent
};
//# sourceMappingURL=chunk-F74ACW7L.js.map
