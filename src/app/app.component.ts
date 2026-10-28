import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'kd-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  template: `
    <div class="flex min-h-screen flex-col">
      <kd-navbar />
      <main class="flex-1">
        <router-outlet />
      </main>
      <kd-footer />
    </div>
  `,
})
export class AppComponent {}
