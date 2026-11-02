import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-IKDKPOYS.js";
import {
  ApiService
} from "./chunk-7ZEAQ4KM.js";
import {
  __async,
  __spreadProps,
  __spreadValues,
  inject,
  signal,
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
  ɵɵpropertyInterpolate1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-J35KGWHD.js";

// src/app/pages/admin/admin-products.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AdminProductsComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 2);
    \u0275\u0275text(1, "Loading products\u2026");
    \u0275\u0275elementEnd();
  }
}
function AdminProductsComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 2);
    \u0275\u0275text(1, "No products yet \u2014 create one on the right.");
    \u0275\u0275elementEnd();
  }
}
function AdminProductsComponent_Conditional_6_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 26);
  }
  if (rf & 2) {
    const p_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", p_r2.imageUrl, \u0275\u0275sanitizeUrl)("alt", p_r2.name);
  }
}
function AdminProductsComponent_Conditional_6_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1, "\xB7 Inactive");
    \u0275\u0275elementEnd();
  }
}
function AdminProductsComponent_Conditional_6_For_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function AdminProductsComponent_Conditional_6_For_2_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const p_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.remove(p_r2.id));
    });
    \u0275\u0275text(1, "Deactivate");
    \u0275\u0275elementEnd();
  }
}
function AdminProductsComponent_Conditional_6_For_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function AdminProductsComponent_Conditional_6_For_2_Conditional_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const p_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.reactivate(p_r2.id));
    });
    \u0275\u0275text(1, "Reactivate");
    \u0275\u0275elementEnd();
  }
}
function AdminProductsComponent_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25);
    \u0275\u0275template(2, AdminProductsComponent_Conditional_6_For_2_Conditional_2_Template, 1, 2, "img", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 27)(4, "p", 28);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 29);
    \u0275\u0275text(7);
    \u0275\u0275template(8, AdminProductsComponent_Conditional_6_For_2_Conditional_8_Template, 2, 0, "span", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 31);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 32);
    \u0275\u0275listener("click", function AdminProductsComponent_Conditional_6_For_2_Template_button_click_11_listener() {
      const p_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.startEdit(p_r2));
    });
    \u0275\u0275text(12, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, AdminProductsComponent_Conditional_6_For_2_Conditional_13_Template, 2, 0, "button", 33)(14, AdminProductsComponent_Conditional_6_For_2_Conditional_14_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275conditional(2, p_r2.imageUrl ? 2 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", p_r2.category == null ? null : p_r2.category.name, " \xB7 Stock: ", p_r2.stock, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(8, !p_r2.active ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", p_r2.price.toFixed(2), "");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(13, p_r2.active ? 13 : 14);
  }
}
function AdminProductsComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275repeaterCreate(1, AdminProductsComponent_Conditional_6_For_2_Template, 15, 7, "div", 24, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.products());
  }
}
function AdminProductsComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function AdminProductsComponent_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.startCreate());
    });
    \u0275\u0275text(1, "Cancel");
    \u0275\u0275elementEnd();
  }
}
function AdminProductsComponent_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r7 = ctx.$implicit;
    \u0275\u0275property("value", c_r7.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r7.name);
  }
}
function AdminProductsComponent_For_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "input", 36);
    \u0275\u0275listener("ngModelChange", function AdminProductsComponent_For_31_Template_input_ngModelChange_1_listener($event) {
      const $index_r9 = \u0275\u0275restoreView(_r8).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateVariantField($index_r9, "label", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "input", 37);
    \u0275\u0275listener("ngModelChange", function AdminProductsComponent_For_31_Template_input_ngModelChange_2_listener($event) {
      const $index_r9 = \u0275\u0275restoreView(_r8).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateVariantField($index_r9, "price", +$event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 38);
    \u0275\u0275listener("ngModelChange", function AdminProductsComponent_For_31_Template_input_ngModelChange_3_listener($event) {
      const $index_r9 = \u0275\u0275restoreView(_r8).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateVariantField($index_r9, "stock", +$event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 39);
    \u0275\u0275listener("click", function AdminProductsComponent_For_31_Template_button_click_4_listener() {
      const $index_r9 = \u0275\u0275restoreView(_r8).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeVariantRow($index_r9));
    });
    \u0275\u0275text(5, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const v_r10 = ctx.$implicit;
    const $index_r9 = ctx.$index;
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate1("name", "variantLabel", $index_r9, "");
    \u0275\u0275property("ngModel", v_r10.label);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate1("name", "variantPrice", $index_r9, "");
    \u0275\u0275property("ngModel", v_r10.price);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate1("name", "variantStock", $index_r9, "");
    \u0275\u0275property("ngModel", v_r10.stock);
  }
}
function AdminProductsComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.error());
  }
}
var emptyForm = () => ({
  name: "",
  description: "",
  price: 0,
  categoryId: 0,
  imageUrl: "",
  stock: 0,
  variants: []
});
var AdminProductsComponent = class _AdminProductsComponent {
  api = inject(ApiService);
  products = signal([]);
  categories = signal([]);
  loading = signal(true);
  editingId = signal(null);
  form = signal(emptyForm());
  saving = signal(false);
  error = signal(null);
  ngOnInit() {
    this.loadCategories();
    this.loadProducts();
  }
  loadCategories() {
    this.api.getCategories().subscribe({
      next: (c) => this.categories.set(c || []),
      error: (err) => console.log("GET /categories FAILED:", err.status, err.error)
    });
  }
  loadProducts() {
    this.loading.set(true);
    this.api.getAllProductsForAdmin().subscribe({
      next: (p) => {
        this.products.set(p || []);
        this.loading.set(false);
      },
      error: (err) => {
        console.log("GET /products/admin/all FAILED:", err.status, err.error);
        this.products.set([]);
        this.loading.set(false);
      }
    });
  }
  startCreate() {
    this.editingId.set(null);
    this.form.set(emptyForm());
    this.error.set(null);
  }
  startEdit(p) {
    this.editingId.set(p.id);
    this.form.set({
      name: p.name,
      description: p.description ?? "",
      price: p.price,
      categoryId: p.category?.id ?? 0,
      imageUrl: p.imageUrl ?? "",
      stock: p.stock ?? 0,
      variants: (p.variants ?? []).map((v) => ({ label: v.label, price: v.price, stock: v.stock }))
    });
    this.error.set(null);
  }
  updateField(field, value) {
    this.form.update((f) => __spreadProps(__spreadValues({}, f), { [field]: value }));
  }
  updateVariantField(index, field, value) {
    this.form.update((f) => {
      const variants = [...f.variants ?? []];
      variants[index] = __spreadProps(__spreadValues({}, variants[index]), { [field]: value });
      return __spreadProps(__spreadValues({}, f), { variants });
    });
  }
  addVariantRow() {
    this.form.update((f) => __spreadProps(__spreadValues({}, f), {
      variants: [...f.variants ?? [], { label: "", price: 0, stock: 0 }]
    }));
  }
  removeVariantRow(index) {
    this.form.update((f) => __spreadProps(__spreadValues({}, f), {
      variants: (f.variants ?? []).filter((_, i) => i !== index)
    }));
  }
  reactivate(id) {
    this.api.reactivateProduct(id).subscribe(() => this.loadProducts());
  }
  save() {
    return __async(this, null, function* () {
      this.error.set(null);
      const raw = this.form();
      const payload = __spreadProps(__spreadValues({}, raw), {
        variants: (raw.variants ?? []).filter((v) => v.label.trim().length > 0)
      });
      if (!payload.name.trim()) {
        this.error.set("Product name is required.");
        return;
      }
      if (!payload.categoryId) {
        this.error.set("Please select a category.");
        return;
      }
      console.log("Submitting product payload:", JSON.stringify(payload));
      this.saving.set(true);
      const id = this.editingId();
      const req = id ? this.api.updateProduct(id, payload) : this.api.createProduct(payload);
      req.subscribe({
        next: () => {
          this.saving.set(false);
          this.startCreate();
          this.loadProducts();
        },
        error: (err) => {
          this.saving.set(false);
          console.log("Product save error:", err.status, err.error);
          this.error.set(err?.error?.error || "Could not save the product.");
        }
      });
    });
  }
  remove(id) {
    if (!confirm("Deactivate this product?"))
      return;
    this.api.deleteProduct(id).subscribe(() => this.loadProducts());
  }
  static \u0275fac = function AdminProductsComponent_Factory(t) {
    return new (t || _AdminProductsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminProductsComponent, selectors: [["kd-admin-products"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 35, vars: 13, consts: [[1, "grid", "gap-6", "lg:grid-cols-[1fr_360px]"], [1, "font-display", "text-xl", "font-semibold", "text-sahyadri"], [1, "mt-4", "text-ink/60"], [1, "card", "h-fit", "p-5"], [1, "mb-4", "flex", "items-center", "justify-between"], [1, "font-display", "text-lg", "font-semibold", "text-sahyadri"], [1, "text-xs", "font-semibold", "text-laterite", "hover:underline"], [1, "space-y-3", 3, "ngSubmit"], ["required", "", "name", "name", "placeholder", "Product name", 1, "input", 3, "ngModelChange", "ngModel"], ["name", "description", "placeholder", "Description", "rows", "2", 1, "input", 3, "ngModelChange", "ngModel"], [1, "grid", "grid-cols-2", "gap-3"], ["required", "", "type", "number", "step", "0.01", "min", "0", "name", "price", "placeholder", "Price", 1, "input", 3, "ngModelChange", "ngModel"], ["required", "", "type", "number", "min", "0", "name", "stock", "placeholder", "Stock", 1, "input", 3, "ngModelChange", "ngModel"], ["required", "", "name", "categoryId", 1, "input", 3, "ngModelChange", "ngModel"], ["disabled", "", 3, "value"], [3, "value"], ["name", "imageUrl", "placeholder", "Image URL", 1, "input", 3, "ngModelChange", "ngModel"], [1, "mb-1", "flex", "items-center", "justify-between"], [1, "text-sm", "font-semibold", "text-ink/70"], ["type", "button", 1, "text-xs", "font-semibold", "text-sea", "hover:underline", 3, "click"], [1, "mb-2", "grid", "grid-cols-[1fr_70px_70px_auto]", "gap-2"], [1, "text-sm", "font-semibold", "text-laterite"], ["type", "submit", 1, "btn-primary", "w-full", 3, "disabled"], [1, "mt-4", "space-y-3"], [1, "card", "flex", "items-center", "gap-4", "p-4"], [1, "h-14", "w-14", "flex-shrink-0", "overflow-hidden", "rounded-lg", "bg-sandDeep"], [1, "h-full", "w-full", "object-cover", 3, "src", "alt"], [1, "flex-1"], [1, "font-display", "font-semibold", "text-sahyadri"], [1, "text-xs", "text-ink/50"], [1, "text-laterite"], [1, "font-semibold", "text-laterite"], [1, "text-sm", "font-semibold", "text-sea", "hover:underline", 3, "click"], [1, "text-sm", "font-semibold", "text-laterite", "hover:underline"], [1, "text-sm", "font-semibold", "text-laterite", "hover:underline", 3, "click"], [1, "text-xs", "font-semibold", "text-laterite", "hover:underline", 3, "click"], ["placeholder", "Label", 1, "input", 3, "ngModelChange", "ngModel", "name"], ["type", "number", "step", "0.01", "placeholder", "Price", 1, "input", 3, "ngModelChange", "ngModel", "name"], ["type", "number", "placeholder", "Stock", 1, "input", 3, "ngModelChange", "ngModel", "name"], ["type", "button", 1, "text-laterite", 3, "click"]], template: function AdminProductsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h2", 1);
      \u0275\u0275text(3, "Products");
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, AdminProductsComponent_Conditional_4_Template, 2, 0, "p", 2)(5, AdminProductsComponent_Conditional_5_Template, 2, 0)(6, AdminProductsComponent_Conditional_6_Template, 3, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 3)(8, "div", 4)(9, "h3", 5);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275template(11, AdminProductsComponent_Conditional_11_Template, 2, 0, "button", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "form", 7);
      \u0275\u0275listener("ngSubmit", function AdminProductsComponent_Template_form_ngSubmit_12_listener() {
        return ctx.save();
      });
      \u0275\u0275elementStart(13, "input", 8);
      \u0275\u0275listener("ngModelChange", function AdminProductsComponent_Template_input_ngModelChange_13_listener($event) {
        return ctx.updateField("name", $event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "textarea", 9);
      \u0275\u0275listener("ngModelChange", function AdminProductsComponent_Template_textarea_ngModelChange_14_listener($event) {
        return ctx.updateField("description", $event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 10)(16, "input", 11);
      \u0275\u0275listener("ngModelChange", function AdminProductsComponent_Template_input_ngModelChange_16_listener($event) {
        return ctx.updateField("price", +$event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "input", 12);
      \u0275\u0275listener("ngModelChange", function AdminProductsComponent_Template_input_ngModelChange_17_listener($event) {
        return ctx.updateField("stock", +$event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "select", 13);
      \u0275\u0275listener("ngModelChange", function AdminProductsComponent_Template_select_ngModelChange_18_listener($event) {
        return ctx.updateField("categoryId", +$event);
      });
      \u0275\u0275elementStart(19, "option", 14);
      \u0275\u0275text(20, "Select a category");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(21, AdminProductsComponent_For_22_Template, 2, 2, "option", 15, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "input", 16);
      \u0275\u0275listener("ngModelChange", function AdminProductsComponent_Template_input_ngModelChange_23_listener($event) {
        return ctx.updateField("imageUrl", $event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div")(25, "div", 17)(26, "p", 18);
      \u0275\u0275text(27, "Variants (optional)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "button", 19);
      \u0275\u0275listener("click", function AdminProductsComponent_Template_button_click_28_listener() {
        return ctx.addVariantRow();
      });
      \u0275\u0275text(29, " + Add variant ");
      \u0275\u0275elementEnd()();
      \u0275\u0275repeaterCreate(30, AdminProductsComponent_For_31_Template, 6, 9, "div", 20, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd();
      \u0275\u0275template(32, AdminProductsComponent_Conditional_32_Template, 2, 1, "p", 21);
      \u0275\u0275elementStart(33, "button", 22);
      \u0275\u0275text(34);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275conditional(4, ctx.loading() ? 4 : ctx.products().length === 0 ? 5 : 6);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.editingId() ? "Edit product" : "New product", " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(11, ctx.editingId() ? 11 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngModel", ctx.form().name);
      \u0275\u0275advance();
      \u0275\u0275property("ngModel", ctx.form().description);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngModel", ctx.form().price);
      \u0275\u0275advance();
      \u0275\u0275property("ngModel", ctx.form().stock);
      \u0275\u0275advance();
      \u0275\u0275property("ngModel", ctx.form().categoryId);
      \u0275\u0275advance();
      \u0275\u0275property("value", 0);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.categories());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngModel", ctx.form().imageUrl);
      \u0275\u0275advance(7);
      \u0275\u0275repeater(ctx.form().variants);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(32, ctx.error() ? 32 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.saving());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.saving() ? "Saving\u2026" : ctx.editingId() ? "Save changes" : "Create product", " ");
    }
  }, dependencies: [FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinValidator, NgModel, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminProductsComponent, { className: "AdminProductsComponent", filePath: "src\\app\\pages\\admin\\admin-products.component.ts", lineNumber: 22 });
})();
export {
  AdminProductsComponent
};
//# sourceMappingURL=chunk-NP7RSGIJ.js.map
