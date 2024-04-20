import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { StoreNavibarComponent } from './components/store-navibar/store-navibar.component';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [NavbarComponent, StoreNavibarComponent],
  templateUrl: './store.component.html',
})
export class StoreComponent {}
