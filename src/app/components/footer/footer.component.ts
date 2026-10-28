import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'kd-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="mt-16">
      <div class="coastline-divider"></div>
      <div class="bg-cream text-ink/70">
        <div class="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
          <div>
            <h3 class="mb-2 font-display text-lg font-semibold text-brand">Kokan Delights</h3>
            <p class="text-sm leading-relaxed">
              Authentic flavours from the Aparaant coast, mangoes, pickles, syrups and more,
              handpicked from Ratnagiri and delivered fresh to your door.
            </p>
          </div>
          <div>
            <h4 class="mb-2 font-semibold text-ink">Explore</h4>
            <ul class="space-y-1 text-sm">
              <li><a routerLink="/" class="hover:text-brand">Home</a></li>
              <li><a routerLink="/products" class="hover:text-brand">Products</a></li>
              <li><a routerLink="/cart" class="hover:text-brand">Cart</a></li>
              <li><a routerLink="/orders" class="hover:text-brand">My Orders</a></li>
            </ul>
          </div>
          <div>
            <h4 class="mb-2 font-semibold text-ink">Order via WhatsApp</h4>
            <a
              href="https://wa.me/7972889731"
              target="_blank"
              rel="noreferrer"
              class="text-sm text-brand hover:underline"
            >
              +91 7972889731
            </a>
          </div>
        </div>
        <div class="border-t border-sandDeep py-4 text-center text-xs text-ink/50">
          Kokan Delights. All rights reserved.
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  year = new Date().getFullYear();
}