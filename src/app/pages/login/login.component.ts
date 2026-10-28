import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'kd-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  private auth = inject(AuthService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  form = { email: '', password: '' };
  error = signal<string | null>(null);
  loading = signal(false);

  async submit() {
    this.error.set(null);
    this.loading.set(true);
    try {
      await firstValueFrom(this.auth.login(this.form.email, this.form.password));
      const redirectTo = this.route.snapshot.queryParamMap.get('redirectTo') || '/';
      this.router.navigateByUrl(redirectTo);
    } catch (err: any) {
      this.error.set(err?.error?.error || 'Invalid email or password.');
    } finally {
      this.loading.set(false);
    }
  }
}
