import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'kd-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="mx-auto flex max-w-lg flex-col items-center px-4 py-24 text-center">
      <h1 class="font-display text-4xl font-bold text-sahyadri">404</h1>
      <p class="mt-2 text-ink/70">This page has drifted off the coast.</p>
      <a routerLink="/" class="btn-primary mt-6">Back to Home</a>
    </div>
  `,
})
export class NotFoundComponent {}
