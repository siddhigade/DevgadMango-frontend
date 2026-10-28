import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';
import { CartItem } from '../models';

@Injectable({ providedIn: 'root' })
export class CartService {
  private api = inject(ApiService);
  private auth = inject(AuthService);

  items = signal<CartItem[]>([]);
  loading = signal(false);

  count = computed(() => this.items().reduce((sum, i) => sum + i.quantity, 0));
  total = computed(() =>
    this.items().reduce((sum, i) => {
      const price = i.variant ? i.variant.price : i.product?.price ?? 0;
      return sum + Number(price) * i.quantity;
    }, 0)
  );

  constructor() {
    // Re-sync whenever the logged-in user changes (login/logout).
    effect(
      () => {
        this.auth.currentUser();
        this.refresh();
      },
      { allowSignalWrites: true }
    );
  }

  async refresh() {
    if (!this.auth.currentUser()) {
      this.items.set([]);
      return;
    }
    this.loading.set(true);
    try {
      const data = await firstValueFrom(this.api.getCart());
      this.items.set(data || []);
    } finally {
      this.loading.set(false);
    }
  }

  async add(productId: number, quantity: number, variantId?: number | null) {
    await firstValueFrom(this.api.addToCart({ productId, variantId: variantId ?? null, quantity }));
    await this.refresh();
  }

  async updateQuantity(itemId: number, quantity: number) {
    await firstValueFrom(this.api.updateCartQuantity(itemId, quantity));
    await this.refresh();
  }

  async remove(itemId: number) {
    await firstValueFrom(this.api.removeCartItem(itemId));
    await this.refresh();
  }
}
