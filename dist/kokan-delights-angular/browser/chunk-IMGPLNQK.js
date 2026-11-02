import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
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
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-J35KGWHD.js";

// src/app/pages/admin/admin-categories.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AdminCategoriesComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 2);
    \u0275\u0275text(1, "Loading categories\u2026");
    \u0275\u0275elementEnd();
  }
}
function AdminCategoriesComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 2);
    \u0275\u0275text(1, "No categories yet \u2014 create one on the right.");
    \u0275\u0275elementEnd();
  }
}
function AdminCategoriesComponent_Conditional_6_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 15);
  }
  if (rf & 2) {
    const c_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", c_r1.imageUrl, \u0275\u0275sanitizeUrl)("alt", c_r1.name);
  }
}
function AdminCategoriesComponent_Conditional_6_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r1.description);
  }
}
function AdminCategoriesComponent_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14);
    \u0275\u0275template(2, AdminCategoriesComponent_Conditional_6_For_2_Conditional_2_Template, 1, 2, "img", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 16)(4, "p", 17);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, AdminCategoriesComponent_Conditional_6_For_2_Conditional_6_Template, 2, 1, "p", 18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275conditional(2, c_r1.imageUrl ? 2 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r1.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(6, c_r1.description ? 6 : -1);
  }
}
function AdminCategoriesComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275repeaterCreate(1, AdminCategoriesComponent_Conditional_6_For_2_Template, 7, 3, "div", 13, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.categories());
  }
}
function AdminCategoriesComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
var AdminCategoriesComponent = class _AdminCategoriesComponent {
  api = inject(ApiService);
  categories = signal([]);
  loading = signal(true);
  form = { name: "", description: "", imageUrl: "" };
  saving = signal(false);
  error = signal(null);
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading.set(true);
    this.api.getCategories().subscribe({
      next: (c) => {
        console.log("GET /categories succeeded:", c);
        this.categories.set(c || []);
        this.loading.set(false);
      },
      error: (err) => {
        console.log("GET /categories FAILED:", err.status, err.error);
        this.categories.set([]);
        this.loading.set(false);
      }
    });
  }
  save() {
    this.error.set(null);
    if (!this.form.name.trim()) {
      this.error.set("Category name is required.");
      return;
    }
    console.log("Submitting category payload:", JSON.stringify(this.form));
    this.saving.set(true);
    this.api.createCategory(this.form).subscribe({
      next: () => {
        this.saving.set(false);
        this.form = { name: "", description: "", imageUrl: "" };
        this.load();
      },
      error: (err) => {
        this.saving.set(false);
        console.log("Category create error response:", err.error);
        if (err.status === 500 || err.status === 400) {
          this.error.set(err?.error?.error || "Could not create the category \u2014 check the name isn't already in use.");
        } else {
          this.error.set("Could not create the category.");
        }
      }
    });
  }
  static \u0275fac = function AdminCategoriesComponent_Factory(t) {
    return new (t || _AdminCategoriesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminCategoriesComponent, selectors: [["kd-admin-categories"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 22, vars: 7, consts: [[1, "grid", "gap-6", "lg:grid-cols-[1fr_320px]"], [1, "font-display", "text-xl", "font-semibold", "text-sahyadri"], [1, "mt-4", "text-ink/60"], [1, "card", "h-fit", "p-5"], [1, "mb-4", "font-display", "text-lg", "font-semibold", "text-sahyadri"], [1, "space-y-3", 3, "ngSubmit"], ["required", "", "name", "name", "placeholder", "Category name", 1, "input", 3, "ngModelChange", "ngModel"], ["name", "description", "placeholder", "Description (optional)", "rows", "2", 1, "input", 3, "ngModelChange", "ngModel"], ["name", "imageUrl", "placeholder", "Image URL (optional)", 1, "input", 3, "ngModelChange", "ngModel"], [1, "text-sm", "font-semibold", "text-laterite"], ["type", "submit", 1, "btn-primary", "w-full", 3, "disabled"], [1, "mt-3", "text-xs", "text-ink/50"], [1, "mt-4", "space-y-3"], [1, "card", "flex", "items-center", "gap-4", "p-4"], [1, "h-12", "w-12", "flex-shrink-0", "overflow-hidden", "rounded-lg", "bg-sandDeep"], [1, "h-full", "w-full", "object-cover", 3, "src", "alt"], [1, "flex-1"], [1, "font-display", "font-semibold", "text-sahyadri"], [1, "text-xs", "text-ink/50"]], template: function AdminCategoriesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h2", 1);
      \u0275\u0275text(3, "Categories");
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, AdminCategoriesComponent_Conditional_4_Template, 2, 0, "p", 2)(5, AdminCategoriesComponent_Conditional_5_Template, 2, 0)(6, AdminCategoriesComponent_Conditional_6_Template, 3, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 3)(8, "h3", 4);
      \u0275\u0275text(9, "New category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "form", 5);
      \u0275\u0275listener("ngSubmit", function AdminCategoriesComponent_Template_form_ngSubmit_10_listener() {
        return ctx.save();
      });
      \u0275\u0275elementStart(11, "input", 6);
      \u0275\u0275twoWayListener("ngModelChange", function AdminCategoriesComponent_Template_input_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.name, $event) || (ctx.form.name = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "textarea", 7);
      \u0275\u0275twoWayListener("ngModelChange", function AdminCategoriesComponent_Template_textarea_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.description, $event) || (ctx.form.description = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function AdminCategoriesComponent_Template_input_ngModelChange_13_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.imageUrl, $event) || (ctx.form.imageUrl = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(14, AdminCategoriesComponent_Conditional_14_Template, 2, 1, "p", 9);
      \u0275\u0275elementStart(15, "button", 10);
      \u0275\u0275text(16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "p", 11);
      \u0275\u0275text(18, " The backend currently only supports creating categories \u2014 editing and deleting would need new endpoints added to ");
      \u0275\u0275elementStart(19, "code");
      \u0275\u0275text(20, "CategoryController");
      \u0275\u0275elementEnd();
      \u0275\u0275text(21, ". ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275conditional(4, ctx.loading() ? 4 : ctx.categories().length === 0 ? 5 : 6);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.name);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.form.description);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.form.imageUrl);
      \u0275\u0275advance();
      \u0275\u0275conditional(14, ctx.error() ? 14 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.saving());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.saving() ? "Saving\u2026" : "Create category", " ");
    }
  }, dependencies: [FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminCategoriesComponent, { className: "AdminCategoriesComponent", filePath: "src\\app\\pages\\admin\\admin-categories.component.ts", lineNumber: 12 });
})();
export {
  AdminCategoriesComponent
};
//# sourceMappingURL=chunk-IMGPLNQK.js.map
