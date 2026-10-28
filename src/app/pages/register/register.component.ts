import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'kd-register',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  private auth = inject(AuthService);
  private router = inject(Router);

  form = { name: '', email: '', password: '', phone: '' };
  error = signal<string | null>(null);
  loading = signal(false);

  async submit() {
    this.error.set(null);
    this.loading.set(true);
    try {
      await firstValueFrom(this.auth.register(this.form));
      this.router.navigate(['/']);
    } catch (err: any) {
      this.error.set(err?.error?.error || 'Could not create your account.');
    } finally {
      this.loading.set(false);
    }
  }
}
