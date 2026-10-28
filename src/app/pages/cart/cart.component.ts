import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'kd-cart',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cart.component.html',
})
export class CartComponent {
  cart = inject(CartService);
  private router = inject(Router);

  priceFor(item: { variant?: { price: number } | null; product: { price: number } }): number {
    return item.variant ? item.variant.price : item.product?.price ?? 0;
  }

  decrement(itemId: number, quantity: number) {
    this.cart.updateQuantity(itemId, quantity - 1);
  }

  increment(itemId: number, quantity: number) {
    this.cart.updateQuantity(itemId, quantity + 1);
  }

  remove(itemId: number) {
    this.cart.remove(itemId);
  }

  goToCheckout() {
    this.router.navigate(['/checkout']);
  }
}
