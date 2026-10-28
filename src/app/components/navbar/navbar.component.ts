import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'kd-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  auth = inject(AuthService);
  cart = inject(CartService);
  private router = inject(Router);

  open = signal(false);

  navLinks = [
    { to: '/', label: 'Home' },
    { to: '/products', label: 'Products' },
    { to: '/orders', label: 'My Orders' },
  ];

  toggleMenu() {
    this.open.update((o) => !o);
  }

  logout() {
    this.auth.logout();
    this.open.set(false);
    this.router.navigate(['/']);
  }
}
