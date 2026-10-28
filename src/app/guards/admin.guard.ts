import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (!auth.currentUser()) {
    return router.createUrlTree(['/login'], { queryParams: { redirectTo: state.url } });
  }
  if (!auth.isAdmin()) {
    return router.createUrlTree(['/']);
  }
  return true;
};
