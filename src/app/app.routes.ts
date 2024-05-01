import { Routes } from '@angular/router';
import { CommunityComponent } from './pages/community/community.component';
import { BrowseComponent } from './pages/store/pages/browse/browse.component';
import { CartComponent } from './pages/store/pages/cart/cart.component';
import { ConfigComponent } from './pages/store/pages/config/config.component';
import { CuratorsComponent } from './pages/store/pages/curators/curators.component';
import { DiscoverComponent } from './pages/store/pages/discover/discover.component';
import { GiftCardComponent } from './pages/store/pages/gift-card/gift-card.component';
import { HomeComponent } from './pages/store/pages/home/home.component';
import { NewsComponent } from './pages/store/pages/news/news.component';
import { PointsShopComponent } from './pages/store/pages/points-shop/points-shop.component';
import { StatsComponent } from './pages/store/pages/stats/stats.component';
import { WishlistComponent } from './pages/store/pages/wishlist/wishlist.component';
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
        path: '',
        component: HomeComponent,
      },
      {
        path: 'browse',
        component: BrowseComponent,
        title: 'Steam - Browse',
      },
      {
        path: 'discover',
        component: DiscoverComponent,
        title: 'Steam - Discover',
      },
      {
        path: 'wishlist',
        component: WishlistComponent,
        title: 'Steam - Wishlist',
      },
      {
        path: 'cart',
        component: CartComponent,
        title: 'Steam - Cart',
      },
      {
        path: 'points-shop',
        component: PointsShopComponent,
        title: 'Steam - Points Shop',
      },
      {
        path: 'curators',
        component: CuratorsComponent,
        title: 'Steam - Curators',
      },
      {
        path: 'gift-card',
        component: GiftCardComponent,
        title: 'Steam - Gift Card',
      },
      {
        path: 'news',
        component: NewsComponent,
        title: 'Steam - News',
      },
      {
        path: 'stats',
        component: StatsComponent,
        title: 'Steam - Stats',
      },
      {
        path: 'config',
        component: ConfigComponent,
        title: 'Steam - Store Configuration',
      },
    ],
  },
  {
    path: 'community',
    component: CommunityComponent,
  },
];
