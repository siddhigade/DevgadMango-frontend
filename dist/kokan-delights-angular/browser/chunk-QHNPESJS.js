import {
  ProductCardComponent
} from "./chunk-YK2LRYWB.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-IKDKPOYS.js";
import {
  ApiService
} from "./chunk-7ZEAQ4KM.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-3CL6RF4O.js";
import {
  catchError,
  inject,
  of,
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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-J35KGWHD.js";

// src/app/pages/products/products.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ProductsComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 5);
    \u0275\u0275listener("click", function ProductsComponent_For_10_Template_button_click_0_listener() {
      const c_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectCategory(c_r2.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-sahyadri", ctx_r2.categoryId() === c_r2.id.toString())("text-sand", ctx_r2.categoryId() === c_r2.id.toString())("bg-sandDeep", ctx_r2.categoryId() !== c_r2.id.toString())("text-sahyadri", ctx_r2.categoryId() !== c_r2.id.toString());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r2.name, " ");
  }
}
function ProductsComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275text(1, "Loading products\u2026");
    \u0275\u0275elementEnd();
  }
}
function ProductsComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275text(1, "No products found.");
    \u0275\u0275elementEnd();
  }
}
function ProductsComponent_Conditional_15_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "kd-product-card", 11);
  }
  if (rf & 2) {
    const p_r4 = ctx.$implicit;
    \u0275\u0275property("product", p_r4);
  }
}
function ProductsComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275repeaterCreate(1, ProductsComponent_Conditional_15_For_2_Template, 1, 1, "kd-product-card", 11, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.products());
  }
}
var ProductsComponent = class _ProductsComponent {
  api = inject(ApiService);
  route = inject(ActivatedRoute);
  router = inject(Router);
  categories = signal([]);
  products = signal([]);
  loading = signal(true);
  keyword = signal("");
  categoryId = signal("");
  ngOnInit() {
    this.api.getCategories().pipe(catchError(() => of([]))).subscribe((c) => this.categories.set(c || []));
    this.route.queryParamMap.subscribe((params) => {
      this.categoryId.set(params.get("category") || "");
      this.loadProducts();
    });
  }
  onKeywordChange(value) {
    this.keyword.set(value);
    this.loadProducts();
  }
  selectCategory(id) {
    this.router.navigate(["/products"], { queryParams: id ? { category: id } : {} });
  }
  loadProducts() {
    this.loading.set(true);
    const kw = this.keyword().trim();
    const req = kw ? this.api.searchProducts(kw) : this.categoryId() ? this.api.getProductsByCategory(this.categoryId()) : this.api.getProducts();
    req.pipe(catchError(() => of([]))).subscribe((products) => {
      this.products.set(products || []);
      this.loading.set(false);
    });
  }
  static \u0275fac = function ProductsComponent_Factory(t) {
    return new (t || _ProductsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductsComponent, selectors: [["kd-products"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 16, vars: 10, consts: [[1, "mx-auto", "max-w-7xl", "px-4", "py-10"], [1, "font-display", "text-3xl", "font-semibold", "text-sahyadri"], [1, "mt-1", "text-ink/70"], [1, "mt-6", "flex", "flex-col", "gap-3", "md:flex-row", "md:items-center", "md:justify-between"], [1, "flex", "flex-wrap", "gap-2"], [1, "rounded-full", "px-4", "py-1.5", "text-sm", "font-semibold", "transition", 3, "click"], [1, "rounded-full", "px-4", "py-1.5", "text-sm", "font-semibold", "transition", 3, "bg-sahyadri", "text-sand", "bg-sandDeep", "text-sahyadri"], ["type", "search", "placeholder", "Search products\u2026", 1, "input", "md:w-64", 3, "ngModelChange", "ngModel"], [1, "mt-8"], [1, "text-ink/60"], [1, "grid", "grid-cols-2", "gap-5", "sm:grid-cols-3", "md:grid-cols-4"], [3, "product"]], template: function ProductsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "Our Products");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p", 2);
      \u0275\u0275text(4, "Authentic products and handcrafted flavours from the heart of Kokan.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 3)(6, "div", 4)(7, "button", 5);
      \u0275\u0275listener("click", function ProductsComponent_Template_button_click_7_listener() {
        return ctx.selectCategory("");
      });
      \u0275\u0275text(8, " All ");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(9, ProductsComponent_For_10_Template, 2, 9, "button", 6, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "input", 7);
      \u0275\u0275listener("ngModelChange", function ProductsComponent_Template_input_ngModelChange_11_listener($event) {
        return ctx.onKeywordChange($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 8);
      \u0275\u0275template(13, ProductsComponent_Conditional_13_Template, 2, 0, "p", 9)(14, ProductsComponent_Conditional_14_Template, 2, 0)(15, ProductsComponent_Conditional_15_Template, 3, 0);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275classProp("bg-sahyadri", !ctx.categoryId())("text-sand", !ctx.categoryId())("bg-sandDeep", ctx.categoryId())("text-sahyadri", ctx.categoryId());
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.categories());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngModel", ctx.keyword());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(13, ctx.loading() ? 13 : ctx.products().length === 0 ? 14 : 15);
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, ProductCardComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductsComponent, { className: "ProductsComponent", filePath: "src\\app\\pages\\products\\products.component.ts", lineNumber: 15 });
})();
export {
  ProductsComponent
};
//# sourceMappingURL=chunk-QHNPESJS.js.map
