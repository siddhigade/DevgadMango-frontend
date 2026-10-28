import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'kd-admin-layout',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './admin-layout.component.html',
})
export class AdminLayoutComponent {
  navItems = [
    { to: '/admin', label: 'Overview', exact: true },
    { to: '/admin/products', label: 'Products', exact: false },
    { to: '/admin/categories', label: 'Categories', exact: false },
    { to: '/admin/orders', label: 'Orders', exact: false },
  ];
}
