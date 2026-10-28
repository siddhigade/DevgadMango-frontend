import { Component, Input, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Category } from '../../models';
import { getAccentColor } from '../../utils/accent-colors';


@Component({
  selector: 'kd-category-tile',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './category-tile.component.html',
})
export class CategoryTileComponent {
  @Input({ required: true }) category!: Category;

  accentColor = computed(() => getAccentColor(this.category.id));
}