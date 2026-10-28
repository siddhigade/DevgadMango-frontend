import { Component, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Category, Product, ProductRequest } from '../../models';

const emptyForm = (): ProductRequest => ({
  name: '',
  description: '',
  price: 0,
  categoryId: 0,
  imageUrl: '',
  stock: 0,
  variants: [],
});

@Component({
  selector: 'kd-admin-products',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin-products.component.html',
})
export class AdminProductsComponent implements OnInit {
  private api = inject(ApiService);

  products = signal<Product[]>([]);
  categories = signal<Category[]>([]);
  loading = signal(true);

  editingId = signal<number | null>(null);
  form = signal<ProductRequest>(emptyForm());
  saving = signal(false);
  error = signal<string | null>(null);

  ngOnInit() {
    this.loadCategories();
    this.loadProducts();
  }

  private loadCategories() {
    this.api.getCategories().subscribe({
      next: (c) => this.categories.set(c || []),
      error: (err) => console.log('GET /categories FAILED:', err.status, err.error),
    });
  }

  private loadProducts() {
  this.loading.set(true);
  this.api.getAllProductsForAdmin().subscribe({
    next: (p) => {
      this.products.set(p || []);
      this.loading.set(false);
    },
    error: (err) => {
      console.log('GET /products/admin/all FAILED:', err.status, err.error);
      this.products.set([]);
      this.loading.set(false);
    },
  });
}

  startCreate() {
    this.editingId.set(null);
    this.form.set(emptyForm());
    this.error.set(null);
  }

  startEdit(p: Product) {
    this.editingId.set(p.id);
    this.form.set({
      name: p.name,
      description: p.description ?? '',
      price: p.price,
      categoryId: p.category?.id ?? 0,
      imageUrl: p.imageUrl ?? '',
      stock: p.stock ?? 0,
      variants: (p.variants ?? []).map((v) => ({ label: v.label, price: v.price, stock: v.stock })),
    });
    this.error.set(null);
  }

  updateField<K extends keyof ProductRequest>(field: K, value: ProductRequest[K]) {
    this.form.update((f) => ({ ...f, [field]: value }));
  }

  updateVariantField(index: number, field: 'label' | 'price' | 'stock', value: string | number) {
    this.form.update((f) => {
      const variants = [...(f.variants ?? [])];
      variants[index] = { ...variants[index], [field]: value };
      return { ...f, variants };
    });
  }

  addVariantRow() {
    this.form.update((f) => ({
      ...f,
      variants: [...(f.variants ?? []), { label: '', price: 0, stock: 0 }],
    }));
  }

  removeVariantRow(index: number) {
    this.form.update((f) => ({
      ...f,
      variants: (f.variants ?? []).filter((_, i) => i !== index),
    }));
  }
  reactivate(id: number) {
  this.api.reactivateProduct(id).subscribe(() => this.loadProducts());
}

  async save() {
  this.error.set(null);
  const raw = this.form();

  // Drop any variant rows where the label was left blank —
  // these are almost always leftover empty rows from "+ Add variant"
  // that was never filled in.
  const payload: ProductRequest = {
    ...raw,
    variants: (raw.variants ?? []).filter((v) => v.label.trim().length > 0),
  };

  if (!payload.name.trim()) {
    this.error.set('Product name is required.');
    return;
  }
  if (!payload.categoryId) {
    this.error.set('Please select a category.');
    return;
  }

  console.log('Submitting product payload:', JSON.stringify(payload));

  this.saving.set(true);
  const id = this.editingId();

  const req = id ? this.api.updateProduct(id, payload) : this.api.createProduct(payload);
  req.subscribe({
    next: () => {
      this.saving.set(false);
      this.startCreate();
      this.loadProducts();
    },
    error: (err) => {
      this.saving.set(false);
      console.log('Product save error:', err.status, err.error);
      this.error.set(err?.error?.error || 'Could not save the product.');
    },
  });
}
  remove(id: number) {
    if (!confirm('Deactivate this product?')) return;
    this.api.deleteProduct(id).subscribe(() => this.loadProducts());
  }
}