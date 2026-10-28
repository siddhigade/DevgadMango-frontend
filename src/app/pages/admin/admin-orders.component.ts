import { Component, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { catchError, of } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { Order } from '../../models';

const STATUS_OPTIONS = ['PENDING', 'CONFIRMED', 'SHIPPED', 'DELIVERED', 'CANCELLED'];

@Component({
  selector: 'kd-admin-orders',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin-orders.component.html',
})
export class AdminOrdersComponent implements OnInit {
  private api = inject(ApiService);

  orders = signal<Order[]>([]);
  loading = signal(true);
  updatingId = signal<number | null>(null);
  statusOptions = STATUS_OPTIONS;

  statusClasses: Record<string, string> = {
    PENDING: 'bg-mango/20 text-mango',
    CONFIRMED: 'bg-sea/20 text-sea',
    SHIPPED: 'bg-sea/20 text-sea',
    DELIVERED: 'bg-sahyadri/20 text-sahyadri',
    CANCELLED: 'bg-laterite/20 text-laterite',
  };

  ngOnInit() {
    this.load();
  }

  private load() {
  this.loading.set(true);
  this.api.getAllOrders().subscribe({
    next: (orders) => {
      console.log('GET /orders/all succeeded:', orders);
      this.orders.set(orders || []);
      this.loading.set(false);
    },
    error: (err) => {
      console.log('GET /orders/all FAILED:', err.status, err.error);
      this.orders.set([]);
      this.loading.set(false);
    },
  });
}

  formatDate(date: string): string {
    return new Date(date).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  }

  changeStatus(orderId: number, status: string) {
    this.updatingId.set(orderId);
    this.api.updateOrderStatus(orderId, status).subscribe({
      next: () => {
        this.updatingId.set(null);
        this.load();
      },
      error: () => this.updatingId.set(null),
    });
  }
}
