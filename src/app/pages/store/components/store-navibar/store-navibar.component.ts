import { Component } from '@angular/core';
import { SvgSearch } from '../../../../../assets/search.component';
import { SvgSettings } from '../../../../../assets/settings.component';
import { StoreNavibarBtnComponent } from './store-navibar-btn/store-navibar-btn.component';

@Component({
  selector: 'app-store-navibar',
  standalone: true,
  imports: [StoreNavibarBtnComponent, SvgSearch, SvgSettings],
  templateUrl: './store-navibar.component.html',
})
export class StoreNavibarComponent {}
