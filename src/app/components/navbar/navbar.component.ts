import { Component } from '@angular/core';
import { SvgChevron } from '../../../assets/chevron.component';
import { SvgCross } from '../../../assets/cross.component';
import { SvgMinimize } from '../../../assets/minimize.component';
import { SvgNotification } from '../../../assets/notification.component';
import { SvgPeople } from '../../../assets/people.component';
import { SvgSteamFont } from '../../../assets/steam-font.component';
import { SvgSteamIcon } from '../../../assets/steam-icon.component';
import { SvgWindow } from '../../../assets/window.component';
import { BtnSmComponent } from '../btn-sm/btn-sm.component';
import { BtnPageComponent } from './btn-page/btn-page.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    SvgSteamFont,
    SvgSteamIcon,
    SvgPeople,
    SvgNotification,
    BtnSmComponent,
    SvgChevron,
    SvgCross,
    SvgMinimize,
    SvgWindow,
    BtnPageComponent,
  ],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {}
