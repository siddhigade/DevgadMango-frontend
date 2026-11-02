import {
  ApiService
} from "./chunk-7ZEAQ4KM.js";
import {
  RouterLink
} from "./chunk-3CL6RF4O.js";
import {
  catchError,
  inject,
  of,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-J35KGWHD.js";

// src/app/pages/admin/admin-overview.component.ts
var AdminOverviewComponent = class _AdminOverviewComponent {
  api = inject(ApiService);
  productCount = signal(null);
  categoryCount = signal(null);
  orderCount = signal(null);
  pendingOrders = signal(null);
  ngOnInit() {
    this.api.getProducts().pipe(catchError(() => of([]))).subscribe((p) => this.productCount.set(p.length));
    this.api.getCategories().pipe(catchError(() => of([]))).subscribe((c) => this.categoryCount.set(c.length));
    this.api.getAllOrders().pipe(catchError(() => of([]))).subscribe((orders) => {
      this.orderCount.set(orders.length);
      this.pendingOrders.set(orders.filter((o) => o.status === "PENDING").length);
    });
  }
  static \u0275fac = function AdminOverviewComponent_Factory(t) {
    return new (t || _AdminOverviewComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminOverviewComponent, selectors: [["kd-admin-overview"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 28, vars: 4, consts: [[1, "grid", "grid-cols-2", "gap-4", "md:grid-cols-4"], [1, "card", "p-5"], [1, "text-xs", "font-semibold", "uppercase", "text-ink/50"], [1, "mt-1", "font-display", "text-2xl", "font-bold", "text-sahyadri"], [1, "mt-1", "font-display", "text-2xl", "font-bold", "text-laterite"], [1, "mt-8", "flex", "flex-wrap", "gap-4"], ["routerLink", "/admin/products", 1, "btn-primary"], ["routerLink", "/admin/categories", 1, "btn-secondary"], ["routerLink", "/admin/orders", 1, "btn-secondary"]], template: function AdminOverviewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
      \u0275\u0275text(3, "Products");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 1)(7, "p", 2);
      \u0275\u0275text(8, "Categories");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 3);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 1)(12, "p", 2);
      \u0275\u0275text(13, "Total Orders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "p", 3);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 1)(17, "p", 2);
      \u0275\u0275text(18, "Pending Orders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "p", 4);
      \u0275\u0275text(20);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 5)(22, "a", 6);
      \u0275\u0275text(23, "Manage Products");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "a", 7);
      \u0275\u0275text(25, "Manage Categories");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "a", 8);
      \u0275\u0275text(27, "Manage Orders");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_1_0;
      let tmp_2_0;
      let tmp_3_0;
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate((tmp_0_0 = ctx.productCount()) !== null && tmp_0_0 !== void 0 ? tmp_0_0 : "\u2014");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate((tmp_1_0 = ctx.categoryCount()) !== null && tmp_1_0 !== void 0 ? tmp_1_0 : "\u2014");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate((tmp_2_0 = ctx.orderCount()) !== null && tmp_2_0 !== void 0 ? tmp_2_0 : "\u2014");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate((tmp_3_0 = ctx.pendingOrders()) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : "\u2014");
    }
  }, dependencies: [RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminOverviewComponent, { className: "AdminOverviewComponent", filePath: "src\\app\\pages\\admin\\admin-overview.component.ts", lineNumber: 12 });
})();
export {
  AdminOverviewComponent
};
//# sourceMappingURL=chunk-RJHJLRGJ.js.map
