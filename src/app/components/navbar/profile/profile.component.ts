import { Component } from '@angular/core';
import { SvgChevron } from '../../../../assets/chevron.component';
import { BtnSmComponent } from '../../btn-sm/btn-sm.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [BtnSmComponent, SvgChevron],
  templateUrl: './profile.component.html',
})
export class ProfileComponent {}
