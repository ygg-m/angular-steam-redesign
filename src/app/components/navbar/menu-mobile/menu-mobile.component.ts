import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SvgChevron } from '../../../../assets/chevron.component';
import { SvgNotification } from '../../../../assets/notification.component';
import { SvgPeople } from '../../../../assets/people.component';
import { BtnPageComponent } from './btn-page/btn-page.component';

@Component({
  selector: 'app-menu-mobile',
  standalone: true,
  imports: [
    BtnPageComponent,
    SvgPeople,
    SvgNotification,
    CommonModule,
    SvgChevron,
  ],
  templateUrl: './menu-mobile.component.html',
})
export class MenuMobileComponent {}
