import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './store.component.html',
})
export class StoreComponent {}
