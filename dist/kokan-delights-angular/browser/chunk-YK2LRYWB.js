import {
  RouterLink
} from "./chunk-3CL6RF4O.js";
import {
  computed,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-J35KGWHD.js";

// src/app/utils/accent-colors.ts
var ACCENT_COLORS = [
  "#8B1E2B",
  // maroon
  "#C4720E",
  // burnt orange
  "#D9862A",
  // amber
  "#2F4A2F",
  // dark green
  "#7A1638",
  // wine
  "#9C6B12",
  // mustard-brown
  "#6B2B1F",
  // brick
  "#B8860B"
  // gold-brown
];
function getAccentColor(id) {
  return ACCENT_COLORS[id % ACCENT_COLORS.length];
}

// src/app/components/product-card/product-card.component.ts
var _c0 = (a0) => ["/products", a0];
function ProductCardComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.product.imageUrl, \u0275\u0275sanitizeUrl)("alt", ctx_r0.product.name);
  }
}
function ProductCardComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "span", 14);
    \u0275\u0275text(2, "Kokan Delights");
    \u0275\u0275elementEnd()();
  }
}
function ProductCardComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.product.description);
  }
}
function ProductCardComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1, " Sold out ");
    \u0275\u0275elementEnd();
  }
}
var ProductCardComponent = class _ProductCardComponent {
  product;
  accentColor = computed(() => getAccentColor(this.product.id));
  static \u0275fac = function ProductCardComponent_Factory(t) {
    return new (t || _ProductCardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductCardComponent, selectors: [["kd-product-card"]], inputs: { product: "product" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 16, vars: 10, consts: [[1, "group", "relative", "flex", "h-full", "flex-col", "overflow-hidden", 3, "routerLink"], [1, "aspect-square", "w-full", "overflow-hidden"], [1, "h-full", "w-full", "object-cover", "transition", "duration-300", "group-hover:scale-105", 3, "src", "alt"], [1, "relative", "flex", "flex-1", "flex-col", "p-4", "pt-8"], [1, "font-display", "text-lg", "font-bold", "leading-tight", "text-white", "md:text-xl"], [1, "mt-2", "line-clamp-2", "text-sm", "text-white/85"], [1, "mt-auto", "pt-3", "font-display", "text-lg", "font-bold", "text-white"], [1, "absolute", "-top-5", "right-4", "flex", "h-11", "w-11", "items-center", "justify-center", "rounded", "bg-white", "shadow-md", "transition", "group-hover:bg-brand", "group-hover:text-white"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "h-5", "w-5"], ["cx", "9", "cy", "21", "r", "1"], ["cx", "20", "cy", "21", "r", "1"], ["d", "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"], [1, "absolute", "left-4", "top-4", "rounded-full", "bg-white/90", "px-3", "py-1", "text-xs", "font-semibold", "uppercase", "text-ink"], [1, "flex", "h-full", "w-full", "items-center", "justify-center", "bg-sandDeep", "text-ink/30"], [1, "font-display", "text-sm"]], template: function ProductCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "a", 0)(1, "div", 1);
      \u0275\u0275template(2, ProductCardComponent_Conditional_2_Template, 1, 2, "img", 2)(3, ProductCardComponent_Conditional_3_Template, 3, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 3)(5, "h3", 4);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275template(7, ProductCardComponent_Conditional_7_Template, 2, 1, "p", 5);
      \u0275\u0275elementStart(8, "p", 6);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 7);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(11, "svg", 8);
      \u0275\u0275element(12, "circle", 9)(13, "circle", 10)(14, "path", 11);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(15, ProductCardComponent_Conditional_15_Template, 2, 0, "span", 12);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_6_0;
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c0, ctx.product.id));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(2, ctx.product.imageUrl ? 2 : 3);
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("background", ctx.accentColor());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.product.name, " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(7, ctx.product.description ? 7 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" Rs.", ctx.product.price.toFixed(2), " ");
      \u0275\u0275advance(6);
      \u0275\u0275conditional(15, ((tmp_6_0 = ctx.product.stock) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : 0) <= 0 ? 15 : -1);
    }
  }, dependencies: [RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductCardComponent, { className: "ProductCardComponent", filePath: "src\\app\\components\\product-card\\product-card.component.ts", lineNumber: 12 });
})();

export {
  getAccentColor,
  ProductCardComponent
};
//# sourceMappingURL=chunk-YK2LRYWB.js.map
