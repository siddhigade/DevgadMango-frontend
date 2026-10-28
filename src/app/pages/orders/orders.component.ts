import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Order } from '../../models';

@Component({
  selector: 'kd-orders',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './orders.component.html',
})
export class OrdersComponent implements OnInit {
  private api = inject(ApiService);

  orders = signal<Order[]>([]);
  loading = signal(true);

  statusClasses: Record<string, string> = {
    PENDING: 'bg-mango/20 text-mango',
    CONFIRMED: 'bg-sea/20 text-sea',
    SHIPPED: 'bg-sea/20 text-sea',
    DELIVERED: 'bg-sahyadri/20 text-sahyadri',
    CANCELLED: 'bg-laterite/20 text-laterite',
  };

  ngOnInit() {
    this.api.getMyOrders().subscribe({
      next: (orders) => {
        console.log('GET /orders/my succeeded:', orders);
        this.orders.set(orders || []);
        this.loading.set(false);
      },
      error: (err) => {
        console.log('GET /orders/my FAILED:', err.status, err.error);
        this.loading.set(false);
      },
    });
  }

  itemTotal(item: { priceAtPurchase: number; quantity: number }): number {
    return Number(item.priceAtPurchase) * item.quantity;
  }

  formatDate(date: string): string {
    return new Date(date).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  }
}
