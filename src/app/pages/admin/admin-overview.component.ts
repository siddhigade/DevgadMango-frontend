import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { catchError, of } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'kd-admin-overview',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './admin-overview.component.html',
})
export class AdminOverviewComponent implements OnInit {
  private api = inject(ApiService);

  productCount = signal<number | null>(null);
  categoryCount = signal<number | null>(null);
  orderCount = signal<number | null>(null);
  pendingOrders = signal<number | null>(null);

  ngOnInit() {
    this.api
      .getProducts()
      .pipe(catchError(() => of([])))
      .subscribe((p) => this.productCount.set(p.length));

    this.api
      .getCategories()
      .pipe(catchError(() => of([])))
      .subscribe((c) => this.categoryCount.set(c.length));

    this.api
      .getAllOrders()
      .pipe(catchError(() => of([])))
      .subscribe((orders) => {
        this.orderCount.set(orders.length);
        this.pendingOrders.set(orders.filter((o) => o.status === 'PENDING').length);
      });
  }
}
