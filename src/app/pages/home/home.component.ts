import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { catchError, of } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { Category, Product } from '../../models';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { CategoryTileComponent } from '../../components/category-tile/category-tile.component';
import { HeroCarouselComponent } from '../../components/hero-carousel/hero-carousel.component';
import { MangoSizeGuideComponent } from '../../components/mango-size-guide/mango-size-guide.component';
import { AlphonsoStoryComponent } from '../../components/alphonso-story/alphonso-story.component';

@Component({
  selector: 'kd-home',
  standalone: true,
  imports: [RouterLink, ProductCardComponent, CategoryTileComponent, HeroCarouselComponent, MangoSizeGuideComponent,AlphonsoStoryComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  private api = inject(ApiService);

  categories = signal<Category[]>([]);
  products = signal<Product[]>([]);
  loading = signal(true);

  features = [
    {
      title: 'Free Shipping',
      body: 'Free shipping across Pune and PCMC. Nominal charges apply elsewhere in India.',
    },
    {
      title: 'Home Delivery',
      body: 'Hundreds of dozens of mangoes delivered — our finest delights, just a click away.',
    },
    {
      title: 'Quality Assurance',
      body: 'Committed to delivering authentic flavours with the highest quality standards, always.',
    },
  ];

  ngOnInit() {
    this.api
      .getCategories()
      .pipe(catchError(() => of([])))
      .subscribe((categories) => this.categories.set(categories || []));

    this.api
      .getProducts()
      .pipe(catchError(() => of([])))
      .subscribe((products) => {
        this.products.set((products || []).slice(0, 8));
        this.loading.set(false);
      });
  }
  
}
