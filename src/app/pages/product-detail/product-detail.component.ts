import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
import { CartService } from '../../services/cart.service';
import { Product, ProductVariant } from '../../models';

@Component({
  selector: 'kd-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private api = inject(ApiService);
  private auth = inject(AuthService);
  private cart = inject(CartService);

  product = signal<Product | null>(null);
  variant = signal<ProductVariant | null>(null);
  qty = signal(1);
  loading = signal(true);
  status = signal<'idle' | 'adding' | 'added' | 'error'>('idle');

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.loading.set(true);
    this.api.getProduct(id).subscribe({
      next: (p) => {
        this.product.set(p);
        this.variant.set(p.variants?.[0] ?? null);
        this.loading.set(false);
      },
      error: () => this.loading.set(false),
    });
  }

  selectVariant(v: ProductVariant) {
    this.variant.set(v);
  }

  decrement() {
    this.qty.update((q) => Math.max(1, q - 1));
  }

  increment() {
    this.qty.update((q) => q + 1);
  }

  currentPrice(): number {
    const p = this.product();
    const v = this.variant();
    return v ? v.price : p?.price ?? 0;
  }

  currentStock(): number {
    const p = this.product();
    const v = this.variant();
    return v ? v.stock : p?.stock ?? 0;
  }

  async addToCart() {
    const p = this.product();
    if (!p) return;

    if (!this.auth.currentUser()) {
      this.router.navigate(['/login'], { queryParams: { redirectTo: `/products/${p.id}` } });
      return;
    }

    this.status.set('adding');
    try {
      await this.cart.add(p.id, this.qty(), this.variant()?.id);
      this.status.set('added');
    } catch {
      this.status.set('error');
    }
  }
}
