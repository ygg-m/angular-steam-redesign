import { Routes } from '@angular/router';
import { StoreComponent } from './pages/store/store.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/store',
    pathMatch: 'full',
  },
  {
    path: 'store',
    component: StoreComponent,
    title: 'Steam - Store',
    children: [
      {
        path: 'browse',
        component: StoreComponent,
        title: 'Steam - Browse',
      },
      {
        path: 'discover',
        component: StoreComponent,
        title: 'Steam - Discover',
      },
      {
        path: 'wishlist',
        component: StoreComponent,
        title: 'Steam - Wishlist',
      },
      {
        path: 'cart',
        component: StoreComponent,
        title: 'Steam - Cart',
      },
      {
        path: 'points-shop',
        component: StoreComponent,
        title: 'Steam - Points Shop',
      },
      {
        path: 'curators',
        component: StoreComponent,
        title: 'Steam - Curators',
      },
      {
        path: 'gift-card',
        component: StoreComponent,
        title: 'Steam - Gift Card',
      },
      {
        path: 'news',
        component: StoreComponent,
        title: 'Steam - News',
      },
      {
        path: 'stats',
        component: StoreComponent,
        title: 'Steam - Stats',
      },
      {
        path: 'config',
        component: StoreComponent,
        title: 'Steam - Store Configuration',
      },
    ],
  },
];
