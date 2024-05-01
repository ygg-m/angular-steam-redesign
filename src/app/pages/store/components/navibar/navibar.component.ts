import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SvgSearch } from '../../../../../assets/search.component';
import { SvgSettings } from '../../../../../assets/settings.component';
import { BtnComponent } from './btn/btn.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

interface linksInterface {
  label: string;
  url: string;
}

@Component({
  selector: 'app-navibar',
  standalone: true,
  imports: [
    BtnComponent,
    SvgSearch,
    SvgSettings,
    CommonModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
  ],
  templateUrl: './navibar.component.html',
})
export class NavibarComponent {
  links: linksInterface[] = [
    {
      label: 'Home',
      url: '/store',
    },
    {
      label: 'Browse',
      url: '/store/browse',
    },
    {
      label: 'Discover',
      url: '/store/discover',
    },
    {
      label: 'Points Shop',
      url: '/store/points-shop',
    },
    {
      label: 'Curators',
      url: '/store/curators',
    },
    {
      label: 'Gift Card',
      url: '/store/gift-card',
    },
    {
      label: 'News',
      url: '/store/news',
    },
  ];
}
