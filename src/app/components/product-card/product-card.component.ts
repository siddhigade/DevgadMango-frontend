import { Component, Input, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../models';
import { getAccentColor } from '../../utils/accent-colors';

@Component({
  selector: 'kd-product-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;

  accentColor = computed(() => getAccentColor(this.product.id));
}