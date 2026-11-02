import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from "./chunk-3CL6RF4O.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-J35KGWHD.js";

// src/app/pages/admin/admin-layout.component.ts
var _forTrack0 = ($index, $item) => $item.to;
var _c0 = (a0) => ({ exact: a0 });
function AdminLayoutComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r1.to)("routerLinkActiveOptions", \u0275\u0275pureFunction1(3, _c0, item_r1.exact));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r1.label, " ");
  }
}
var AdminLayoutComponent = class _AdminLayoutComponent {
  navItems = [
    { to: "/admin", label: "Overview", exact: true },
    { to: "/admin/products", label: "Products", exact: false },
    { to: "/admin/categories", label: "Categories", exact: false },
    { to: "/admin/orders", label: "Orders", exact: false }
  ];
  static \u0275fac = function AdminLayoutComponent_Factory(t) {
    return new (t || _AdminLayoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminLayoutComponent, selectors: [["kd-admin-layout"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 0, consts: [[1, "mx-auto", "max-w-6xl", "px-4", "py-8"], [1, "font-display", "text-2xl", "font-semibold", "text-sahyadri"], [1, "mt-6", "grid", "gap-6", "md:grid-cols-[180px_1fr]"], [1, "flex", "gap-2", "overflow-x-auto", "md:flex-col", "md:overflow-visible"], ["routerLinkActive", "bg-sahyadri text-sand", 1, "whitespace-nowrap", "rounded-full", "px-4", "py-2", "text-sm", "font-semibold", "text-sahyadri", "transition", "hover:bg-sahyadri/10", "md:rounded-lg", 3, "routerLink", "routerLinkActiveOptions"]], template: function AdminLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "Admin Dashboard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2)(4, "nav", 3);
      \u0275\u0275repeaterCreate(5, AdminLayoutComponent_For_6_Template, 2, 5, "a", 4, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div");
      \u0275\u0275element(8, "router-outlet");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.navItems);
    }
  }, dependencies: [RouterLink, RouterLinkActive, RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminLayoutComponent, { className: "AdminLayoutComponent", filePath: "src\\app\\pages\\admin\\admin-layout.component.ts", lineNumber: 10 });
})();
export {
  AdminLayoutComponent
};
//# sourceMappingURL=chunk-6JYP3S2U.js.map
