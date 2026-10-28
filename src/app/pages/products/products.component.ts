import { Component, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { Category, Product } from '../../models';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'kd-products',
  standalone: true,
  imports: [FormsModule, ProductCardComponent],
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  private api = inject(ApiService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  categories = signal<Category[]>([]);
  products = signal<Product[]>([]);
  loading = signal(true);
  keyword = signal('');
  categoryId = signal<string>('');

  ngOnInit() {
    this.api
      .getCategories()
      .pipe(catchError(() => of([])))
      .subscribe((c) => this.categories.set(c || []));

    this.route.queryParamMap.subscribe((params) => {
      this.categoryId.set(params.get('category') || '');
      this.loadProducts();
    });
  }

  onKeywordChange(value: string) {
    this.keyword.set(value);
    this.loadProducts();
  }

  selectCategory(id: string | number | '') {
    this.router.navigate(['/products'], { queryParams: id ? { category: id } : {} });
  }

  private loadProducts() {
    this.loading.set(true);
    const kw = this.keyword().trim();
    const req = kw
      ? this.api.searchProducts(kw)
      : this.categoryId()
      ? this.api.getProductsByCategory(this.categoryId())
      : this.api.getProducts();

    req.pipe(catchError(() => of([]))).subscribe((products) => {
      this.products.set(products || []);
      this.loading.set(false);
    });
  }
}
