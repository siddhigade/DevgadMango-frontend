import { Injectable, computed, inject, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ApiService } from './api.service';
import { AuthResponse, AuthUser } from '../models';

function loadStoredUser(): AuthUser | null {
  const raw = localStorage.getItem('kd_user');
  return raw ? (JSON.parse(raw) as AuthUser) : null;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private api = inject(ApiService);

  currentUser = signal<AuthUser | null>(loadStoredUser());
  isAdmin = computed(() => this.currentUser()?.role === 'ADMIN');

  private persist(res: AuthResponse) {
    localStorage.setItem('kd_token', res.token);
    const user: AuthUser = { name: res.name, email: res.email, role: res.role };
    localStorage.setItem('kd_user', JSON.stringify(user));
    this.currentUser.set(user);
  }

  login(email: string, password: string): Observable<AuthResponse> {
    return this.api.login({ email, password }).pipe(tap((res) => this.persist(res)));
  }

  register(payload: {
    name: string;
    email: string;
    password: string;
    phone: string;
  }): Observable<AuthResponse> {
    return this.api.register(payload).pipe(tap((res) => this.persist(res)));
  }

  logout() {
    localStorage.removeItem('kd_token');
    localStorage.removeItem('kd_user');
    this.currentUser.set(null);
  }
}
