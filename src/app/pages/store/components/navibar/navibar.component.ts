import { Component } from '@angular/core';
import { SvgSearch } from '../../../../../assets/search.component';
import { SvgSettings } from '../../../../../assets/settings.component';
import { BtnComponent } from './btn/btn.component';

@Component({
  selector: 'app-navibar',
  standalone: true,
  imports: [BtnComponent, SvgSearch, SvgSettings],
  templateUrl: './navibar.component.html',
})
export class NavibarComponent {}
