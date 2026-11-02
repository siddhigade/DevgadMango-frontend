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
  AuthService
} from "./chunk-7IDUGWI6.js";
import "./chunk-7ZEAQ4KM.js";
import {
  ActivatedRoute,
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

// src/app/pages/login/login.component.ts
function LoginComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
var LoginComponent = class _LoginComponent {
  auth = inject(AuthService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  form = { email: "", password: "" };
  error = signal(null);
  loading = signal(false);
  submit() {
    return __async(this, null, function* () {
      this.error.set(null);
      this.loading.set(true);
      try {
        yield firstValueFrom(this.auth.login(this.form.email, this.form.password));
        const redirectTo = this.route.snapshot.queryParamMap.get("redirectTo") || "/";
        this.router.navigateByUrl(redirectTo);
      } catch (err) {
        this.error.set(err?.error?.error || "Invalid email or password.");
      } finally {
        this.loading.set(false);
      }
    });
  }
  static \u0275fac = function LoginComponent_Factory(t) {
    return new (t || _LoginComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["kd-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 15, vars: 5, consts: [[1, "mx-auto", "flex", "max-w-md", "flex-col", "px-4", "py-16"], [1, "font-display", "text-3xl", "font-semibold", "text-sahyadri"], [1, "mt-1", "text-ink/70"], [1, "mt-6", "space-y-4", "card", "p-6", 3, "ngSubmit"], ["required", "", "type", "email", "name", "email", "placeholder", "Email", 1, "input", 3, "ngModelChange", "ngModel"], ["required", "", "type", "password", "name", "password", "placeholder", "Password", 1, "input", 3, "ngModelChange", "ngModel"], [1, "text-sm", "font-semibold", "text-laterite"], ["type", "submit", 1, "btn-primary", "w-full", 3, "disabled"], [1, "mt-4", "text-center", "text-sm", "text-ink/70"], ["routerLink", "/register", 1, "font-semibold", "text-laterite", "hover:underline"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "Welcome back");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p", 2);
      \u0275\u0275text(4, "Log in to order your Kokan favourites.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "form", 3);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_5_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(6, "input", 4);
      \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_6_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.email, $event) || (ctx.form.email = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "input", 5);
      \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_7_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.password, $event) || (ctx.form.password = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(8, LoginComponent_Conditional_8_Template, 2, 1, "p", 6);
      \u0275\u0275elementStart(9, "button", 7);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "p", 8);
      \u0275\u0275text(12, " New to Kokan Delights? ");
      \u0275\u0275elementStart(13, "a", 9);
      \u0275\u0275text(14, "Create an account");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.email);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.form.password);
      \u0275\u0275advance();
      \u0275\u0275conditional(8, ctx.error() ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading() ? "Logging in\u2026" : "Log in", " ");
    }
  }, dependencies: [FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src\\app\\pages\\login\\login.component.ts", lineNumber: 13 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-L7JLDCSK.js.map
