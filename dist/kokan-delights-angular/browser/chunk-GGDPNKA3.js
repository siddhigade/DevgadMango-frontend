import {
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-IKDKPOYS.js";
import {
  ApiService
} from "./chunk-7ZEAQ4KM.js";
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-J35KGWHD.js";

// src/app/pages/admin/admin-orders.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AdminOrdersComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 1);
    \u0275\u0275text(1, "Loading orders\u2026");
    \u0275\u0275elementEnd();
  }
}
function AdminOrdersComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 1);
    \u0275\u0275text(1, "No orders yet.");
    \u0275\u0275elementEnd();
  }
}
function AdminOrdersComponent_Conditional_4_For_2_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 9)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 16);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", item_r2.product == null ? null : item_r2.product.name, "", item_r2.variantLabel ? " (" + item_r2.variantLabel + ")" : "", " \xD7 ", item_r2.quantity, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", (item_r2.priceAtPurchase * item_r2.quantity).toFixed(2), "");
  }
}
function AdminOrdersComponent_Conditional_4_For_2_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r5 = ctx.$implicit;
    \u0275\u0275property("value", s_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r5);
  }
}
function AdminOrdersComponent_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div")(3, "p", 5);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 6);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 7);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "ul", 8);
    \u0275\u0275repeaterCreate(10, AdminOrdersComponent_Conditional_4_For_2_For_11_Template, 5, 4, "li", 9, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 10)(13, "span", 11);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 12)(16, "label", 13);
    \u0275\u0275text(17, "Update status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "select", 14);
    \u0275\u0275listener("ngModelChange", function AdminOrdersComponent_Conditional_4_For_2_Template_select_ngModelChange_18_listener($event) {
      const order_r3 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.changeStatus(order_r3.id, $event));
    });
    \u0275\u0275repeaterCreate(19, AdminOrdersComponent_Conditional_4_For_2_For_20_Template, 2, 2, "option", 15, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const order_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Order #", order_r3.id, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r3.formatDate(order_r3.createdAt), " \xB7 ", order_r3.shippingAddress == null ? null : order_r3.shippingAddress.fullName, "");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r3.statusClasses[order_r3.status] || "bg-sandDeep text-ink/70");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", order_r3.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(order_r3.items);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u20B9", order_r3.totalAmount.toFixed(2), "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", order_r3.status)("disabled", ctx_r3.updatingId() === order_r3.id);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.statusOptions);
  }
}
function AdminOrdersComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275repeaterCreate(1, AdminOrdersComponent_Conditional_4_For_2_Template, 21, 9, "div", 3, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.orders());
  }
}
var STATUS_OPTIONS = ["PENDING", "CONFIRMED", "SHIPPED", "DELIVERED", "CANCELLED"];
var AdminOrdersComponent = class _AdminOrdersComponent {
  api = inject(ApiService);
  orders = signal([]);
  loading = signal(true);
  updatingId = signal(null);
  statusOptions = STATUS_OPTIONS;
  statusClasses = {
    PENDING: "bg-mango/20 text-mango",
    CONFIRMED: "bg-sea/20 text-sea",
    SHIPPED: "bg-sea/20 text-sea",
    DELIVERED: "bg-sahyadri/20 text-sahyadri",
    CANCELLED: "bg-laterite/20 text-laterite"
  };
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading.set(true);
    this.api.getAllOrders().subscribe({
      next: (orders) => {
        console.log("GET /orders/all succeeded:", orders);
        this.orders.set(orders || []);
        this.loading.set(false);
      },
      error: (err) => {
        console.log("GET /orders/all FAILED:", err.status, err.error);
        this.orders.set([]);
        this.loading.set(false);
      }
    });
  }
  formatDate(date) {
    return new Date(date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric"
    });
  }
  changeStatus(orderId, status) {
    this.updatingId.set(orderId);
    this.api.updateOrderStatus(orderId, status).subscribe({
      next: () => {
        this.updatingId.set(null);
        this.load();
      },
      error: () => this.updatingId.set(null)
    });
  }
  static \u0275fac = function AdminOrdersComponent_Factory(t) {
    return new (t || _AdminOrdersComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminOrdersComponent, selectors: [["kd-admin-orders"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 1, consts: [[1, "font-display", "text-xl", "font-semibold", "text-sahyadri"], [1, "mt-4", "text-ink/60"], [1, "mt-4", "space-y-4"], [1, "card", "p-5"], [1, "flex", "flex-wrap", "items-center", "justify-between", "gap-2"], [1, "font-display", "font-semibold", "text-sahyadri"], [1, "text-xs", "text-ink/50"], [1, "rounded-full", "px-3", "py-1", "text-xs", "font-semibold"], [1, "mt-3", "divide-y", "divide-sandDeep", "text-sm"], [1, "flex", "justify-between", "py-2"], [1, "mt-3", "flex", "flex-wrap", "items-center", "justify-between", "gap-3", "border-t", "border-sandDeep", "pt-3"], [1, "font-display", "text-lg", "font-bold", "text-laterite"], [1, "flex", "items-center", "gap-2"], [1, "text-xs", "font-semibold", "text-ink/60"], [1, "input", "!w-auto", "!py-1.5", "text-sm", 3, "ngModelChange", "ngModel", "disabled"], [3, "value"], [1, "font-semibold"]], template: function AdminOrdersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h2", 0);
      \u0275\u0275text(1, "All Orders");
      \u0275\u0275elementEnd();
      \u0275\u0275template(2, AdminOrdersComponent_Conditional_2_Template, 2, 0, "p", 1)(3, AdminOrdersComponent_Conditional_3_Template, 2, 0)(4, AdminOrdersComponent_Conditional_4_Template, 3, 0);
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(2, ctx.loading() ? 2 : ctx.orders().length === 0 ? 3 : 4);
    }
  }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminOrdersComponent, { className: "AdminOrdersComponent", filePath: "src\\app\\pages\\admin\\admin-orders.component.ts", lineNumber: 15 });
})();
export {
  AdminOrdersComponent
};
//# sourceMappingURL=chunk-GGDPNKA3.js.map
