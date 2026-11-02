import {
  DefaultValueAccessor,
  FormsModule,
  MinLengthValidator,
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
import "./chunk-7ZEAQ4KM.js";
import {
  Router,
  RouterLink
} from "./chunk-3CL6RF4O.js";
import {
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-J35KGWHD.js";

// src/app/pages/register/register.component.ts
function RegisterComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
var RegisterComponent = class _RegisterComponent {
  auth = inject(AuthService);
  router = inject(Router);
  form = { name: "", email: "", password: "", phone: "" };
  error = signal(null);
  loading = signal(false);
  submit() {
    return __async(this, null, function* () {
      this.error.set(null);
      this.loading.set(true);
      try {
        yield firstValueFrom(this.auth.register(this.form));
        this.router.navigate(["/"]);
      } catch (err) {
        this.error.set(err?.error?.error || "Could not create your account.");
      } finally {
        this.loading.set(false);
      }
    });
  }
  static \u0275fac = function RegisterComponent_Factory(t) {
    return new (t || _RegisterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["kd-register"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 17, vars: 7, consts: [[1, "mx-auto", "flex", "max-w-md", "flex-col", "px-4", "py-16"], [1, "font-display", "text-3xl", "font-semibold", "text-sahyadri"], [1, "mt-1", "text-ink/70"], [1, "mt-6", "space-y-4", "card", "p-6", 3, "ngSubmit"], ["required", "", "name", "name", "placeholder", "Full name", 1, "input", 3, "ngModelChange", "ngModel"], ["required", "", "type", "email", "name", "email", "placeholder", "Email", 1, "input", 3, "ngModelChange", "ngModel"], ["required", "", "name", "phone", "placeholder", "Phone number", "pattern", "^[6-9]\\d{9}$", "title", "10-digit Indian mobile number", 1, "input", 3, "ngModelChange", "ngModel"], ["required", "", "type", "password", "name", "password", "placeholder", "Password (min 6 characters)", "minlength", "6", 1, "input", 3, "ngModelChange", "ngModel"], [1, "text-sm", "font-semibold", "text-laterite"], ["type", "submit", 1, "btn-primary", "w-full", 3, "disabled"], [1, "mt-4", "text-center", "text-sm", "text-ink/70"], ["routerLink", "/login", 1, "font-semibold", "text-laterite", "hover:underline"]], template: function RegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "Create an account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p", 2);
      \u0275\u0275text(4, "Join us for authentic Kokan flavours, delivered fresh.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "form", 3);
      \u0275\u0275listener("ngSubmit", function RegisterComponent_Template_form_ngSubmit_5_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(6, "input", 4);
      \u0275\u0275twoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_6_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.name, $event) || (ctx.form.name = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "input", 5);
      \u0275\u0275twoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_7_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.email, $event) || (ctx.form.email = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "input", 6);
      \u0275\u0275twoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_8_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.phone, $event) || (ctx.form.phone = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "input", 7);
      \u0275\u0275twoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_9_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.password, $event) || (ctx.form.password = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(10, RegisterComponent_Conditional_10_Template, 2, 1, "p", 8);
      \u0275\u0275elementStart(11, "button", 9);
      \u0275\u0275text(12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "p", 10);
      \u0275\u0275text(14, " Already have an account? ");
      \u0275\u0275elementStart(15, "a", 11);
      \u0275\u0275text(16, "Log in");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.name);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.form.email);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.form.phone);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.form.password);
      \u0275\u0275advance();
      \u0275\u0275conditional(10, ctx.error() ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading() ? "Creating account\u2026" : "Create account", " ");
    }
  }, dependencies: [FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, PatternValidator, NgModel, NgForm, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "src\\app\\pages\\register\\register.component.ts", lineNumber: 13 });
})();
export {
  RegisterComponent
};
//# sourceMappingURL=chunk-EYRPSGI7.js.map
