# Kokan Delights — Angular Frontend

A standalone-components Angular 17 storefront for the Kokan Delights Spring Boot backend, styled
after [kokandelights.com](https://kokandelights.com) — deep Sahyadri green, laterite red-soil
accents, mango yellow, sand/cream backgrounds, with a "coastline" divider motif running through
the page. Same design and API surface as the React version, ported to Angular idioms
(standalone components, signals, `HttpClient`, functional interceptor/guard).

## Setup

```bash
npm install
npm start
```

The app runs at `http://localhost:4200`. Backend URL and Razorpay key are set in
`src/environments/environment.ts` (dev) / `environment.prod.ts` (prod) — defaults to
`http://localhost:8080/api`.

## Structure

- `services/api.service.ts` — thin `HttpClient` wrapper over every backend endpoint
- `services/auth.service.ts` — JWT session as an Angular signal, persisted to `localStorage`
- `services/cart.service.ts` — cart state as signals, synced to the backend, auto-refreshes on login/logout
- `interceptors/auth.interceptor.ts` — attaches `Authorization: Bearer <token>` to every request
- `guards/auth.guard.ts` — protects `/checkout` and `/orders`
- `pages/*` — one folder per route, each a standalone component with its own template
- `components/*` — `navbar`, `footer`, `product-card`, `category-tile`

## Backend integration notes

**One gap to close on the backend:** there's no `AddressController` in the code you shared, but
`OrderRequest` requires an `addressId`, and the `Address` entity + `AddressRepository` already
exist. The checkout page assumes a standard REST resource:

- `POST /api/addresses` — create an address for the logged-in user, returns the saved address (with `id`)
- `GET /api/addresses` — list the logged-in user's addresses

Add an `AddressService` + `AddressController` mirroring your existing `CartController` pattern
and checkout will work end-to-end.

**CORS:** make sure `CorsConfig.java` on the backend allows `http://localhost:4200` (and your
production frontend origin), or the browser will block requests from this app.

**Razorpay:** the checkout page loads `checkout.razorpay.com/v1/checkout.js` and opens Razorpay's
hosted modal using the `razorpayOrderId`/`amount`/`currency` returned by `POST /api/orders/create`,
then verifies via `POST /api/payments/verify` on success.
