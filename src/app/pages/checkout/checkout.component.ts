import { Component, inject, NgZone, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
import { CartService } from '../../services/cart.service';
import { Address } from '../../models';

declare global {
  interface Window {
    Razorpay: any;
  }
}

const RAZORPAY_SCRIPT = 'https://checkout.razorpay.com/v1/checkout.js';

function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (document.querySelector(`script[src="${RAZORPAY_SCRIPT}"]`)) {
      resolve(true);
      return;
    }
    const script = document.createElement('script');
    script.src = RAZORPAY_SCRIPT;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

@Component({
  selector: 'kd-checkout',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './checkout.component.html',
})
export class CheckoutComponent {
  private api = inject(ApiService);
  private auth = inject(AuthService);
  cart = inject(CartService);
  private router = inject(Router);
  private zone = inject(NgZone);

  form: Address = {
    fullName: this.auth.currentUser()?.name ?? '',
    phone: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    pincode: '',
  };

  placing = signal(false);
  error = signal<string | null>(null);

  async handlePay() {
    this.error.set(null);
    this.placing.set(true);
    try {
      // 1. Save shipping address
      const addr = await firstValueFrom(this.api.createAddress(this.form));
      const addressId = addr.id!;

      // 2. Create order on the backend (creates a Razorpay order too)
      const order = await firstValueFrom(this.api.createOrder({ addressId }));
      const { razorpayOrderId, amount, currency, dbOrderId } = order;

      // 3. Load Razorpay checkout
      const loaded = await loadRazorpayScript();
      if (!loaded) {
        this.error.set('Could not load Razorpay checkout. Check your connection and try again.');
        this.placing.set(false);
        return;
      }

      const rzp = new window.Razorpay({
        key: environment.razorpayKeyId,
        amount,
        currency,
        name: 'Kokan Delights',
        description: `Order #${dbOrderId}`,
        order_id: razorpayOrderId,
        prefill: {
          name: this.form.fullName,
          contact: this.form.phone,
          email: this.auth.currentUser()?.email,
        },
        theme: { color: '#C1502E' },
        handler: (response: any) => {
          // Razorpay invokes this callback OUTSIDE Angular's zone, so
          // wrap it in zone.run() or the router navigation / signal
          // updates below won't actually refresh the UI, even though
          // they succeed.
          this.zone.run(async () => {
            try {
              await firstValueFrom(
                this.api.verifyPayment({
                  razorpayOrderId: response.razorpay_order_id,
                  razorpayPaymentId: response.razorpay_payment_id,
                  razorpaySignature: response.razorpay_signature,
                })
              );
              await this.cart.refresh();
              this.router.navigate(['/orders']);
            } catch {
              this.error.set(
                'Payment succeeded but verification failed. Contact support with your payment ID.'
              );
            }
          });
        },
        modal: {
          ondismiss: () => {
            this.zone.run(() => this.placing.set(false));
          },
        },
      });
      rzp.open();
    } catch (err: any) {
      this.error.set(
        err?.error?.error ||
          "Could not start checkout. Make sure the /api/addresses endpoint exists on the backend."
      );
    } finally {
      this.placing.set(false);
    }
  }
}