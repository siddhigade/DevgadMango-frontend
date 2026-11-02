import {
  RouterLink
} from "./chunk-3CL6RF4O.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-J35KGWHD.js";

// src/app/pages/not-found/not-found.component.ts
var NotFoundComponent = class _NotFoundComponent {
  static \u0275fac = function NotFoundComponent_Factory(t) {
    return new (t || _NotFoundComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotFoundComponent, selectors: [["kd-not-found"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 0, consts: [[1, "mx-auto", "flex", "max-w-lg", "flex-col", "items-center", "px-4", "py-24", "text-center"], [1, "font-display", "text-4xl", "font-bold", "text-sahyadri"], [1, "mt-2", "text-ink/70"], ["routerLink", "/", 1, "btn-primary", "mt-6"]], template: function NotFoundComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "404");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p", 2);
      \u0275\u0275text(4, "This page has drifted off the coast.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "a", 3);
      \u0275\u0275text(6, "Back to Home");
      \u0275\u0275elementEnd()();
    }
  }, dependencies: [RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotFoundComponent, { className: "NotFoundComponent", filePath: "src\\app\\pages\\not-found\\not-found.component.ts", lineNumber: 16 });
})();
export {
  NotFoundComponent
};
//# sourceMappingURL=chunk-W3I5AMLJ.js.map
