import {
  ProductCardComponent,
  getAccentColor
} from "./chunk-YK2LRYWB.js";
import {
  ApiService
} from "./chunk-7ZEAQ4KM.js";
import {
  RouterLink
} from "./chunk-3CL6RF4O.js";
import {
  catchError,
  computed,
  inject,
  of,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-J35KGWHD.js";

// src/app/components/category-tile/category-tile.component.ts
var _c0 = () => ["/products"];
var _c1 = (a0) => ({ category: a0 });
function CategoryTileComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.category.imageUrl, \u0275\u0275sanitizeUrl)("alt", ctx_r0.category.name);
  }
}
var CategoryTileComponent = class _CategoryTileComponent {
  category;
  accentColor = computed(() => getAccentColor(this.category.id));
  static \u0275fac = function CategoryTileComponent_Factory(t) {
    return new (t || _CategoryTileComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategoryTileComponent, selectors: [["kd-category-tile"]], inputs: { category: "category" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 9, consts: [[1, "group", "block", "overflow-hidden", "border", "border-sandDeep", 3, "routerLink", "queryParams"], [1, "aspect-[4/3]", "w-full", "overflow-hidden"], [1, "h-full", "w-full", "object-cover", "transition", "duration-300", "group-hover:scale-105", 3, "src", "alt"], [1, "p-4", "text-center"], [1, "font-display", "text-base", "font-bold", "uppercase", "tracking-wide", "text-white", "md:text-lg"]], template: function CategoryTileComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "a", 0)(1, "div", 1);
      \u0275\u0275template(2, CategoryTileComponent_Conditional_2_Template, 1, 2, "img", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 3)(4, "span", 4);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(6, _c0))("queryParams", \u0275\u0275pureFunction1(7, _c1, ctx.category.id));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(2, ctx.category.imageUrl ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275styleProp("background", ctx.accentColor());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.category.name, " ");
    }
  }, dependencies: [RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategoryTileComponent, { className: "CategoryTileComponent", filePath: "src\\app\\components\\category-tile\\category-tile.component.ts", lineNumber: 13 });
})();

// src/app/components/hero-carousel/hero-carousel.component.ts
var _forTrack0 = ($index, $item) => $item.title;
function HeroCarouselComponent_For_2_Conditional_0_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "p", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 19);
    \u0275\u0275text(4, "Special Offer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 21);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const slide_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(slide_r1.badge.originalPrice);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(slide_r1.badge.salePrice);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(slide_r1.badge.savings);
  }
}
function HeroCarouselComponent_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "img", 6)(2, "div", 7);
    \u0275\u0275elementStart(3, "div", 8)(4, "div", 9)(5, "div", 10)(6, "p", 11);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h1", 12);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 13);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 14)(13, "a", 15);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "a", 16);
    \u0275\u0275text(16, " Order Through WhatsApp ");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(17, HeroCarouselComponent_For_2_Conditional_0_Conditional_17_Template, 9, 3, "div", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const slide_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", slide_r1.imageUrl, \u0275\u0275sanitizeUrl)("alt", slide_r1.title);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", slide_r1.eyebrow, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", slide_r1.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(slide_r1.subtitle);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", slide_r1.ctaLink);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", slide_r1.ctaLabel, " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(17, slide_r1.badge ? 17 : -1);
  }
}
function HeroCarouselComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, HeroCarouselComponent_For_2_Conditional_0_Template, 18, 8, "div", 5);
  }
  if (rf & 2) {
    const i_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(0, ctx_r2.active() === i_r2 ? 0 : -1);
  }
}
function HeroCarouselComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function HeroCarouselComponent_For_9_Template_button_click_0_listener() {
      const i_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goTo(i_r5));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r5 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("w-8", ctx_r2.active() === i_r5)("w-2", ctx_r2.active() !== i_r5)("bg-brand", ctx_r2.active() === i_r5)("bg-white", ctx_r2.active() !== i_r5);
    \u0275\u0275attribute("aria-label", "Go to slide " + (i_r5 + 1));
  }
}
var HeroCarouselComponent = class _HeroCarouselComponent {
  // EDIT ME: replace with your real promos, images, and links
  slides = [
    {
      eyebrow: "Limited Time Deal",
      title: "Summer Sanjeevani Syrup Combo",
      subtitle: "3 Bottles. 1 Summer Solution. Natural Ingredients. Authentic Kokan Taste.",
      ctaLabel: "Order Now",
      ctaLink: "/products",
      imageUrl: "https://static.vecteezy.com/system/resources/previews/039/629/893/non_2x/ai-generated-fresh-ripe-fruit-slice-on-wooden-table-healthy-snack-generated-by-ai-free-photo.jpg",
      badge: { originalPrice: "\u20B9597", salePrice: "\u20B9525", savings: "YOU SAVE \u20B972" }
    },
    {
      eyebrow: "Fresh This Season",
      title: "Carbide-Free Ratnagiri Alphonso",
      subtitle: "Chemical-free ripened, handpicked, and delivered with love.",
      ctaLabel: "Shop Mangoes",
      ctaLink: "/products",
      imageUrl: "https://static.vecteezy.com/system/resources/previews/039/629/893/non_2x/ai-generated-fresh-ripe-fruit-slice-on-wooden-table-healthy-snack-generated-by-ai-free-photo.jpg"
    },
    {
      eyebrow: "Gift Something Authentic",
      title: "Pack of Happiness",
      subtitle: "Experience the essence of Kokan in every bite with this special combo.",
      ctaLabel: "View Combo",
      ctaLink: "/products",
      imageUrl: "https://static.vecteezy.com/system/resources/previews/039/629/893/non_2x/ai-generated-fresh-ripe-fruit-slice-on-wooden-table-healthy-snack-generated-by-ai-free-photo.jpg"
    }
  ];
  active = signal(0);
  timer;
  ngOnInit() {
    this.startAutoplay();
  }
  ngOnDestroy() {
    this.stopAutoplay();
  }
  startAutoplay() {
    this.stopAutoplay();
    this.timer = setInterval(() => this.next(), 5e3);
  }
  stopAutoplay() {
    if (this.timer)
      clearInterval(this.timer);
  }
  next() {
    this.active.update((i) => (i + 1) % this.slides.length);
  }
  prev() {
    this.active.update((i) => (i - 1 + this.slides.length) % this.slides.length);
  }
  goTo(i) {
    this.active.set(i);
    this.startAutoplay();
  }
  static \u0275fac = function HeroCarouselComponent_Factory(t) {
    return new (t || _HeroCarouselComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeroCarouselComponent, selectors: [["kd-hero-carousel"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 0, consts: [[1, "relative", "h-[480px]", "w-full", "overflow-hidden", "md:h-[560px]"], ["aria-label", "Previous slide", 1, "absolute", "left-4", "top-1/2", "z-10", "-translate-y-1/2", "rounded-full", "bg-white/90", "p-3", "text-xl", "shadow-lg", "transition", "hover:bg-brand", "hover:text-white", "md:left-8", 3, "click"], ["aria-label", "Next slide", 1, "absolute", "right-4", "top-1/2", "z-10", "-translate-y-1/2", "rounded-full", "bg-white/90", "p-3", "text-xl", "shadow-lg", "transition", "hover:bg-brand", "hover:text-white", "md:right-8", 3, "click"], [1, "absolute", "bottom-6", "left-1/2", "z-10", "flex", "-translate-x-1/2", "gap-3"], [1, "h-2.5", "rounded-full", "transition-all", 3, "w-8", "w-2", "bg-brand", "bg-white"], [1, "absolute", "inset-0"], [1, "h-full", "w-full", "object-cover", 3, "src", "alt"], [1, "absolute", "inset-0", "bg-gradient-to-r", "from-black/70", "via-black/30", "to-transparent"], [1, "absolute", "inset-0", "flex", "items-center"], [1, "mx-auto", "w-full", "max-w-6xl", "px-4"], [1, "max-w-xl"], [1, "mb-4", "inline-block", "rounded-full", "bg-brand", "px-4", "py-1.5", "text-sm", "font-bold", "uppercase", "tracking-wider", "text-white"], [1, "font-display", "text-5xl", "font-bold", "leading-[1.05]", "text-white", "drop-shadow-lg", "md:text-7xl"], [1, "mt-5", "text-lg", "text-white/90", "drop-shadow", "md:text-xl"], [1, "mt-8", "flex", "flex-wrap", "gap-4"], [1, "btn-primary", "px-8", "py-4", "text-lg", 3, "routerLink"], ["href", "https://wa.me/918484884271", "target", "_blank", "rel", "noreferrer", 1, "inline-flex", "items-center", "justify-center", "rounded-full", "border-2", "border-white", "px-8", "py-4", "text-lg", "font-semibold", "text-white", "transition", "hover:bg-white", "hover:text-ink"], [1, "absolute", "right-6", "top-1/2", "-translate-y-1/2", "rounded-2xl", "bg-maroon", "px-6", "py-5", "text-center", "text-white", "shadow-2xl", "md:right-16"], [1, "text-sm", "line-through", "opacity-60"], [1, "mb-1", "rounded", "bg-gold", "px-2", "py-0.5", "text-xs", "font-bold", "uppercase", "text-ink"], [1, "font-display", "text-4xl", "font-bold"], [1, "text-xs", "font-semibold", "text-gold"], [1, "h-2.5", "rounded-full", "transition-all", 3, "click"]], template: function HeroCarouselComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0);
      \u0275\u0275repeaterCreate(1, HeroCarouselComponent_For_2_Template, 1, 1, null, null, _forTrack0);
      \u0275\u0275elementStart(3, "button", 1);
      \u0275\u0275listener("click", function HeroCarouselComponent_Template_button_click_3_listener() {
        return ctx.prev();
      });
      \u0275\u0275text(4, " \u2039 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 2);
      \u0275\u0275listener("click", function HeroCarouselComponent_Template_button_click_5_listener() {
        return ctx.next();
      });
      \u0275\u0275text(6, " \u203A ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 3);
      \u0275\u0275repeaterCreate(8, HeroCarouselComponent_For_9_Template, 1, 9, "button", 4, _forTrack0);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.slides);
      \u0275\u0275advance(7);
      \u0275\u0275repeater(ctx.slides);
    }
  }, dependencies: [RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeroCarouselComponent, { className: "HeroCarouselComponent", filePath: "src\\app\\components\\hero-carousel\\hero-carousel.component.ts", lineNumber: 20 });
})();

// src/app/components/mango-size-guide/mango-size-guide.component.ts
var MangoSizeGuideComponent = class _MangoSizeGuideComponent {
  static \u0275fac = function MangoSizeGuideComponent_Factory(t) {
    return new (t || _MangoSizeGuideComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MangoSizeGuideComponent, selectors: [["kd-mango-size-guide"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 0, consts: [[1, "py-16", "text-center"], [1, "mx-auto", "max-w-5xl", "px-4"], [1, "font-display", "text-3xl", "font-bold", "text-brand", "md:text-4xl"], [1, "mx-auto", "mt-4", "max-w-2xl", "text-ink/60"], [1, "relative", "left-1/2", "mt-10", "w-screen", "-translate-x-1/2", "bg-white"], ["src", "/assets/different-category-according-to-weight.webp", "alt", "Mango size categories: Size A/4D Extra Large 270gm+, Size B/5D Large 241-270gm, Size C/6D Medium 211-240gm, Size D/7D Small less than 180gm", 1, "mx-auto", "w-full", "max-w-[1400px]"]], template: function MangoSizeGuideComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "h2", 2);
      \u0275\u0275text(3, " Different categories according to weights ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, " Weights are indicative and to get an idea of the size of the fruit. These weights are measured on the day of harvest, mangoes tend to lose approximately 20-25% weight during the ripening process. Orders for Size D are subject to availability. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 4);
      \u0275\u0275element(7, "img", 5);
      \u0275\u0275elementEnd()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MangoSizeGuideComponent, { className: "MangoSizeGuideComponent", filePath: "src\\app\\components\\mango-size-guide\\mango-size-guide.component.ts", lineNumber: 8 });
})();

// src/app/components/alphonso-story/alphonso-story.component.ts
var AlphonsoStoryComponent = class _AlphonsoStoryComponent {
  static \u0275fac = function AlphonsoStoryComponent_Factory(t) {
    return new (t || _AlphonsoStoryComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AlphonsoStoryComponent, selectors: [["kd-alphonso-story"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 17, vars: 0, consts: [[1, "relative", "left-1/2", "w-screen", "-translate-x-1/2"], [1, "grid", "grid-cols-1", "md:grid-cols-[1fr_1.1fr_1fr]"], ["src", "/assets/alphonso-left.jpg", "alt", "Fresh Ratnagiri Alphonso mangoes", 1, "hidden", "h-full", "max-h-[420px]", "w-full", "object-cover", "md:block"], [1, "flex", "flex-col", "items-center", "justify-center", "bg-brand", "px-8", "py-14", "text-center", "md:py-0"], [1, "font-display", "text-xl", "italic", "text-white/90"], [1, "font-display", "text-4xl", "font-bold", "text-white", "md:text-5xl"], [1, "mt-6", "max-w-md", "text-white/90"], [1, "mt-4", "max-w-md", "text-white/90"], ["src", "/assets/alphonso-right.jpg", "alt", "Fresh Ratnagiri Alphonso mangoes", 1, "hidden", "h-full", "max-h-[420px]", "w-full", "object-cover", "md:block"]], template: function AlphonsoStoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
      \u0275\u0275element(2, "img", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "p", 4);
      \u0275\u0275text(5, "Ratnagiri");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h2", 5);
      \u0275\u0275text(7, "Alphonso");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 6);
      \u0275\u0275text(9, " Where the mountains meet the sea, our Alphonso mangoes grow in nature's perfect harmony. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p", 7);
      \u0275\u0275text(11, " Nourished by rich red soil on the sun-kissed slopes and soaked in salty sea-breeze \u2014 each mango tells a tale of Ratnagiri's unique terroir. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "p", 7);
      \u0275\u0275text(13, " This exceptional environment, combined with generations of careful cultivation, creates the signature flavor of Ratnagiri Alphonso that makes every bite delightfully sweet and aromatic. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "p", 7);
      \u0275\u0275text(15, " From our orchards to your table, savor the true taste of Kokan in every bite. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(16, "img", 8);
      \u0275\u0275elementEnd()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AlphonsoStoryComponent, { className: "AlphonsoStoryComponent", filePath: "src\\app\\components\\alphonso-story\\alphonso-story.component.ts", lineNumber: 8 });
})();

// src/app/pages/home/home.component.ts
var _forTrack02 = ($index, $item) => $item.id;
function HomeComponent_Conditional_10_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "kd-category-tile", 22);
  }
  if (rf & 2) {
    const c_r1 = ctx.$implicit;
    \u0275\u0275property("category", c_r1);
  }
}
function HomeComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 4)(1, "h2", 20);
    \u0275\u0275text(2, "Our Product Range");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 21);
    \u0275\u0275repeaterCreate(4, HomeComponent_Conditional_10_For_5_Template, 1, 1, "kd-category-tile", 22, _forTrack02);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.categories());
  }
}
function HomeComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1, "Loading products\u2026");
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1, " No products yet \u2014 add some from the admin panel and they'll show up here. ");
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_Conditional_19_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "kd-product-card", 24);
  }
  if (rf & 2) {
    const p_r3 = ctx.$implicit;
    \u0275\u0275property("product", p_r3);
  }
}
function HomeComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275repeaterCreate(1, HomeComponent_Conditional_19_For_2_Template, 1, 1, "kd-product-card", 24, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.products());
  }
}
var HomeComponent = class _HomeComponent {
  api = inject(ApiService);
  categories = signal([]);
  products = signal([]);
  loading = signal(true);
  features = [
    {
      title: "Free Shipping",
      body: "Free shipping across Pune and PCMC. Nominal charges apply elsewhere in India."
    },
    {
      title: "Home Delivery",
      body: "Hundreds of dozens of mangoes delivered \u2014 our finest delights, just a click away."
    },
    {
      title: "Quality Assurance",
      body: "Committed to delivering authentic flavours with the highest quality standards, always."
    }
  ];
  ngOnInit() {
    this.api.getCategories().pipe(catchError(() => of([]))).subscribe((categories) => this.categories.set(categories || []));
    this.api.getProducts().pipe(catchError(() => of([]))).subscribe((products) => {
      this.products.set((products || []).slice(0, 8));
      this.loading.set(false);
    });
  }
  static \u0275fac = function HomeComponent_Factory(t) {
    return new (t || _HomeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["kd-home"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 54, vars: 2, consts: [[1, "mx-auto", "max-w-3xl", "px-4", "py-20", "text-center"], [1, "font-devanagari", "text-5xl", "font-bold", "tracking-wide", "text-brand", "sm:text-6xl", "md:text-7xl"], [1, "mx-auto", "mt-4", "h-1", "w-24", "rounded-full", "bg-brand/60"], [1, "mt-8", "text-lg", "leading-relaxed", "text-ink/70", "sm:text-xl"], [1, "mx-auto", "max-w-7xl", "px-4", "py-10"], [1, "mb-6", "flex", "items-center", "justify-between"], [1, "font-display", "text-2xl", "font-semibold", "text-ink"], ["routerLink", "/products", 1, "text-sm", "font-semibold", "text-brand", "hover:underline"], [1, "text-ink/60"], [1, "bg-cream", "py-20"], [1, "mx-auto", "max-w-6xl", "px-4"], [1, "grid", "gap-12", "text-center", "md:grid-cols-3"], [1, "mb-4", "text-6xl"], [1, "mb-3", "font-display", "text-2xl", "font-semibold", "text-ink"], [1, "mx-auto", "max-w-xs", "text-base", "leading-relaxed", "text-ink/60"], [1, "mx-auto", "mt-20", "max-w-3xl", "text-center"], [1, "section-eyebrow", "mb-3"], [1, "font-display", "text-4xl", "font-bold", "text-brand", "md:text-5xl"], [1, "divider-dot", "mt-5"], [1, "mt-8", "text-lg", "leading-relaxed", "text-ink/70"], [1, "mb-6", "font-display", "text-2xl", "font-semibold", "text-ink"], [1, "grid", "grid-cols-2", "gap-4", "md:grid-cols-4"], [3, "category"], [1, "grid", "grid-cols-2", "gap-5", "sm:grid-cols-3", "md:grid-cols-4"], [3, "product"]], template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div");
      \u0275\u0275element(1, "kd-hero-carousel");
      \u0275\u0275elementStart(2, "section", 0)(3, "h2", 1);
      \u0275\u0275text(4, " \u0905\u092A\u0930\u093E\u0902\u0924\n");
      \u0275\u0275elementEnd();
      \u0275\u0275element(5, "div", 2);
      \u0275\u0275elementStart(6, "p", 3)(7, "em");
      \u0275\u0275text(8, "Aparaant");
      \u0275\u0275elementEnd();
      \u0275\u0275text(9, `, an ancient Marathi and Sanskrit word, means "the land beyond" \u2014 a poetic reference to Kokan's mesmerizing coastal expanse. At Kokan Delights we celebrate the soul of Aparaant Bhumi: a treasure trove of traditions, culinary delights, and breathtaking landscapes between the mountains and the sea. `);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(10, HomeComponent_Conditional_10_Template, 6, 0, "section", 4);
      \u0275\u0275elementStart(11, "section", 4)(12, "div", 5)(13, "h2", 6);
      \u0275\u0275text(14, "Popular Picks");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "a", 7);
      \u0275\u0275text(16, " View all \u2192 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(17, HomeComponent_Conditional_17_Template, 2, 0, "p", 8)(18, HomeComponent_Conditional_18_Template, 2, 0)(19, HomeComponent_Conditional_19_Template, 3, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275element(20, "kd-mango-size-guide")(21, "kd-alphonso-story");
      \u0275\u0275elementStart(22, "section", 9)(23, "div", 10)(24, "div", 11)(25, "div")(26, "div", 12);
      \u0275\u0275text(27, "\u{1F6CD}\uFE0F");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "h3", 13);
      \u0275\u0275text(29, "Free Shipping");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "p", 14);
      \u0275\u0275text(31, " Free shipping across Pune and PCMC. Nominal charges apply elsewhere in India. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div")(33, "div", 12);
      \u0275\u0275text(34, "\u{1F69A}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "h3", 13);
      \u0275\u0275text(36, "Home Delivery");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "p", 14);
      \u0275\u0275text(38, " Hundreds of dozens of mangoes delivered \u2014 our finest delights, just a click away. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div")(40, "div", 12);
      \u0275\u0275text(41, "\u{1F3C5}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "h3", 13);
      \u0275\u0275text(43, "Quality Assurance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "p", 14);
      \u0275\u0275text(45, " Committed to delivering authentic flavours with the highest quality standards, always. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(46, "div", 15)(47, "p", 16);
      \u0275\u0275text(48, "Our Promise");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "h2", 17);
      \u0275\u0275text(50, "Why Kokan Delights?");
      \u0275\u0275elementEnd();
      \u0275\u0275element(51, "div", 18);
      \u0275\u0275elementStart(52, "p", 19);
      \u0275\u0275text(53, ' At Kokan Delights, we bring you the vibrant flavours and rich heritage of Kokan, delivered straight to your doorstep. What makes us truly unique is our commitment to quality \u2014 our Ratnagiri Mangoes are "chemical free ripened," ensuring they are fresh, handpicked, packed and delivered with love. Purity and authentic taste are at the heart of everything we do. ');
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275conditional(10, ctx.categories().length > 0 ? 10 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275conditional(17, ctx.loading() ? 17 : ctx.products().length === 0 ? 18 : 19);
    }
  }, dependencies: [RouterLink, ProductCardComponent, CategoryTileComponent, HeroCarouselComponent, MangoSizeGuideComponent, AlphonsoStoryComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src\\app\\pages\\home\\home.component.ts", lineNumber: 18 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-U7VXQM6H.js.map
