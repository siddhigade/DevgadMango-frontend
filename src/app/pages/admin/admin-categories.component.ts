import { Component, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Category, CategoryRequest } from '../../models';

@Component({
  selector: 'kd-admin-categories',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin-categories.component.html',
})
export class AdminCategoriesComponent implements OnInit {
  private api = inject(ApiService);

  categories = signal<Category[]>([]);
  loading = signal(true);
  form: CategoryRequest = { name: '', description: '', imageUrl: '' };
  saving = signal(false);
  error = signal<string | null>(null);

  ngOnInit() {
    this.load();
  }

  private load() {
    this.loading.set(true);
    this.api.getCategories().subscribe({
      next: (c) => {
        console.log('GET /categories succeeded:', c);
        this.categories.set(c || []);
        this.loading.set(false);
      },
      error: (err) => {
        console.log('GET /categories FAILED:', err.status, err.error);
        this.categories.set([]);
        this.loading.set(false);
      },
    });
  }

  save() {
    this.error.set(null);

    if (!this.form.name.trim()) {
      this.error.set('Category name is required.');
      return;
    }

    console.log('Submitting category payload:', JSON.stringify(this.form));

    this.saving.set(true);
    this.api.createCategory(this.form).subscribe({
      next: () => {
        this.saving.set(false);
        this.form = { name: '', description: '', imageUrl: '' };
        this.load();
      },
      error: (err) => {
        this.saving.set(false);
        console.log('Category create error response:', err.error);
        if (err.status === 500 || err.status === 400) {
          this.error.set(
            err?.error?.error || 'Could not create the category — check the name isn\'t already in use.'
          );
        } else {
          this.error.set('Could not create the category.');
        }
      },
    });
  }
}