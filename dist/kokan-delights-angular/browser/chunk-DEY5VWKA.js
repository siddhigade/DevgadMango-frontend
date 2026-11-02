import {
  CartService
} from "./chunk-C6EEQSY7.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  PatternValidator,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-IKDKPOYS.js";
import {
  AuthService
} from "./chunk-7IDUGWI6.js";
import {
  ApiService,
  environment
} from "./chunk-7ZEAQ4KM.js";
import {
  Router
} from "./chunk-3CL6RF4O.js";
import {
  NgZone,
  __async,
  firstValueFrom,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-J35KGWHD.js";

// src/app/pages/checkout/checkout.component.ts
function CheckoutComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "p", 1);
    \u0275\u0275text(2, "Your cart is empty \u2014 add something delicious first.");
    \u0275\u0275elementEnd()();
  }
}
function CheckoutComponent_Conditional_1_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function CheckoutComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "h1", 3);
    \u0275\u0275text(2, "Checkout");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 4);
    \u0275\u0275text(4, "Enter your delivery address to continue to payment.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "form", 5);
    \u0275\u0275listener("ngSubmit", function CheckoutComponent_Conditional_1_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handlePay());
    });
    \u0275\u0275elementStart(6, "div", 6)(7, "input", 7);
    \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_Conditional_1_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.fullName, $event) || (ctx_r1.form.fullName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 8);
    \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_Conditional_1_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.phone, $event) || (ctx_r1.form.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "input", 9);
    \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_Conditional_1_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.addressLine1, $event) || (ctx_r1.form.addressLine1 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 10);
    \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_Conditional_1_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.addressLine2, $event) || (ctx_r1.form.addressLine2 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 11)(12, "input", 12);
    \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_Conditional_1_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.city, $event) || (ctx_r1.form.city = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 13);
    \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_Conditional_1_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.state, $event) || (ctx_r1.form.state = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_Conditional_1_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.pincode, $event) || (ctx_r1.form.pincode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 15)(16, "span", 16);
    \u0275\u0275text(17, "Order total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 17);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, CheckoutComponent_Conditional_1_Conditional_20_Template, 2, 1, "p", 18);
    \u0275\u0275elementStart(21, "button", 19);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.fullName);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.phone);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.addressLine1);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.addressLine2);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.city);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.state);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.pincode);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\u20B9", ctx_r1.cart.total().toFixed(2), "");
    \u0275\u0275advance();
    \u0275\u0275conditional(20, ctx_r1.error() ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.placing());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.placing() ? "Processing\u2026" : "Pay with Razorpay", " ");
  }
}
var RAZORPAY_SCRIPT = "https://checkout.razorpay.com/v1/checkout.js";
function loadRazorpayScript() {
  return new Promise((resolve) => {
    if (document.querySelector(`script[src="${RAZORPAY_SCRIPT}"]`)) {
      resolve(true);
      return;
    }
    const script = document.createElement("script");
    script.src = RAZORPAY_SCRIPT;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}
var CheckoutComponent = class _CheckoutComponent {
  api = inject(ApiService);
  auth = inject(AuthService);
  cart = inject(CartService);
  router = inject(Router);
  zone = inject(NgZone);
  form = {
    fullName: this.auth.currentUser()?.name ?? "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    pincode: ""
  };
  placing = signal(false);
  error = signal(null);
  handlePay() {
    return __async(this, null, function* () {
      this.error.set(null);
      this.placing.set(true);
      try {
        const addr = yield firstValueFrom(this.api.createAddress(this.form));
        const addressId = addr.id;
        const order = yield firstValueFrom(this.api.createOrder({ addressId }));
        const { razorpayOrderId, amount, currency, dbOrderId } = order;
        const loaded = yield loadRazorpayScript();
        if (!loaded) {
          this.error.set("Could not load Razorpay checkout. Check your connection and try again.");
          this.placing.set(false);
          return;
        }
        const rzp = new window.Razorpay({
          key: environment.razorpayKeyId,
          amount,
          currency,
          name: "Kokan Delights",
          description: `Order #${dbOrderId}`,
          order_id: razorpayOrderId,
          prefill: {
            name: this.form.fullName,
            contact: this.form.phone,
            email: this.auth.currentUser()?.email
          },
          theme: { color: "#C1502E" },
          handler: (response) => {
            this.zone.run(() => __async(this, null, function* () {
              try {
                yield firstValueFrom(this.api.verifyPayment({
                  razorpayOrderId: response.razorpay_order_id,
                  razorpayPaymentId: response.razorpay_payment_id,
                  razorpaySignature: response.razorpay_signature
                }));
                yield this.cart.refresh();
                this.router.navigate(["/orders"]);
              } catch {
                this.error.set("Payment succeeded but verification failed. Contact support with your payment ID.");
              }
            }));
          },
          modal: {
            ondismiss: () => {
              this.zone.run(() => this.placing.set(false));
            }
          }
        });
        rzp.open();
      } catch (err) {
        this.error.set(err?.error?.error || "Could not start checkout. Make sure the /api/addresses endpoint exists on the backend.");
      } finally {
        this.placing.set(false);
      }
    });
  }
  static \u0275fac = function CheckoutComponent_Factory(t) {
    return new (t || _CheckoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckoutComponent, selectors: [["kd-checkout"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 1, consts: [[1, "mx-auto", "max-w-2xl", "px-4", "py-16", "text-center"], [1, "text-ink/70"], [1, "mx-auto", "max-w-2xl", "px-4", "py-10"], [1, "font-display", "text-3xl", "font-semibold", "text-sahyadri"], [1, "mt-1", "text-ink/70"], [1, "mt-6", "space-y-4", "card", "p-6", 3, "ngSubmit"], [1, "grid", "gap-4", "md:grid-cols-2"], ["required", "", "name", "fullName", "placeholder", "Full name", 1, "input", 3, "ngModelChange", "ngModel"], ["required", "", "name", "phone", "placeholder", "Phone number", "pattern", "^[6-9]\\d{9}$", "title", "10-digit Indian mobile number", 1, "input", 3, "ngModelChange", "ngModel"], ["required", "", "name", "addressLine1", "placeholder", "Address line 1", 1, "input", 3, "ngModelChange", "ngModel"], ["name", "addressLine2", "placeholder", "Address line 2 (optional)", 1, "input", 3, "ngModelChange", "ngModel"], [1, "grid", "gap-4", "md:grid-cols-3"], ["required", "", "name", "city", "placeholder", "City", 1, "input", 3, "ngModelChange", "ngModel"], ["required", "", "name", "state", "placeholder", "State", 1, "input", 3, "ngModelChange", "ngModel"], ["required", "", "name", "pincode", "placeholder", "Pincode", 1, "input", 3, "ngModelChange", "ngModel"], [1, "flex", "items-center", "justify-between", "border-t", "border-sandDeep", "pt-4"], [1, "font-semibold", "text-ink/70"], [1, "font-display", "text-2xl", "font-bold", "text-laterite"], [1, "text-sm", "font-semibold", "text-laterite"], ["type", "submit", 1, "btn-primary", "w-full", 3, "disabled"]], template: function CheckoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, CheckoutComponent_Conditional_0_Template, 3, 0, "div", 0)(1, CheckoutComponent_Conditional_1_Template, 23, 11);
    }
    if (rf & 2) {
      \u0275\u0275conditional(0, ctx.cart.items().length === 0 ? 0 : 1);
    }
  }, dependencies: [FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, PatternValidator, NgModel, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckoutComponent, { className: "CheckoutComponent", filePath: "src\\app\\pages\\checkout\\checkout.component.ts", lineNumber: 39 });
})();
export {
  CheckoutComponent
};
//# sourceMappingURL=chunk-DEY5VWKA.js.map
