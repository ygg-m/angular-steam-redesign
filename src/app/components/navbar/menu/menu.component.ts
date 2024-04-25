import { Component } from '@angular/core';
import { BtnPageComponent } from '../btn-page/btn-page.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [BtnPageComponent],
  templateUrl: './menu.component.html',
})
export class MenuComponent {}
