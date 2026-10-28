import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Slide {
  eyebrow: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaLink: string;
  imageUrl: string;
  badge?: { originalPrice: string; salePrice: string; savings: string };
}

@Component({
  selector: 'kd-hero-carousel',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero-carousel.component.html',
})
export class HeroCarouselComponent implements OnInit, OnDestroy {
  // EDIT ME: replace with your real promos, images, and links
  slides: Slide[] = [
    {
      eyebrow: 'Limited Time Deal',
      title: 'Summer Sanjeevani Syrup Combo',
      subtitle: '3 Bottles. 1 Summer Solution. Natural Ingredients. Authentic Kokan Taste.',
      ctaLabel: 'Order Now',
      ctaLink: '/products',
      imageUrl: 'https://static.vecteezy.com/system/resources/previews/039/629/893/non_2x/ai-generated-fresh-ripe-fruit-slice-on-wooden-table-healthy-snack-generated-by-ai-free-photo.jpg',
      badge: { originalPrice: '₹597', salePrice: '₹525', savings: 'YOU SAVE ₹72' },
    },
    {
      eyebrow: 'Fresh This Season',
      title: 'Carbide-Free Ratnagiri Alphonso',
      subtitle: 'Chemical-free ripened, handpicked, and delivered with love.',
      ctaLabel: 'Shop Mangoes',
      ctaLink: '/products',
      imageUrl: 'https://static.vecteezy.com/system/resources/previews/039/629/893/non_2x/ai-generated-fresh-ripe-fruit-slice-on-wooden-table-healthy-snack-generated-by-ai-free-photo.jpg',
    },
    {
      eyebrow: 'Gift Something Authentic',
      title: 'Pack of Happiness',
      subtitle: 'Experience the essence of Kokan in every bite with this special combo.',
      ctaLabel: 'View Combo',
      ctaLink: '/products',
      imageUrl: 'https://static.vecteezy.com/system/resources/previews/039/629/893/non_2x/ai-generated-fresh-ripe-fruit-slice-on-wooden-table-healthy-snack-generated-by-ai-free-photo.jpg',
    },
  ];

  active = signal(0);
  private timer?: ReturnType<typeof setInterval>;

  ngOnInit() {
    this.startAutoplay();
  }

  ngOnDestroy() {
    this.stopAutoplay();
  }

  startAutoplay() {
    this.stopAutoplay();
    this.timer = setInterval(() => this.next(), 5000);
  }

  stopAutoplay() {
    if (this.timer) clearInterval(this.timer);
  }

  next() {
    this.active.update((i) => (i + 1) % this.slides.length);
  }

  prev() {
    this.active.update((i) => (i - 1 + this.slides.length) % this.slides.length);
  }

  goTo(i: number) {
    this.active.set(i);
    this.startAutoplay(); // reset the timer so it doesn't jump right after a manual click
  }
}