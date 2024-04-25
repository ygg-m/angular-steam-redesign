import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SvgChevron } from '../../../assets/chevron.component';
import { SvgMenu } from '../../../assets/menu.component';
import { SvgSteamFont } from '../../../assets/steam-font.component';
import { SvgSteamIcon } from '../../../assets/steam-icon.component';
import { BtnPageComponent } from './btn-page/btn-page.component';
import { BtnsWindowsComponent } from './btns-windows/btns-windows.component';
import { FriendsComponent } from './friends/friends.component';
import { MenuMobileComponent } from './menu-mobile/menu-mobile.component';
import { MenuComponent } from './menu/menu.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    SvgSteamFont,
    SvgSteamIcon,
    SvgChevron,
    BtnPageComponent,
    SvgMenu,
    CommonModule,
    MenuComponent,
    FriendsComponent,
    NotificationsComponent,
    ProfileComponent,
    BtnsWindowsComponent,
    MenuMobileComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  showMobileMenu: boolean = true;
  hideMobileMenu: boolean = false;

  toggleMobileMenu() {
    if (this.showMobileMenu == false && this.hideMobileMenu == true) {
      this.showMobileMenu = true;
      this.hideMobileMenu = false;
    } else if (this.showMobileMenu == true && this.hideMobileMenu == false) {
      this.showMobileMenu = false;
      setTimeout(() => {
        this.hideMobileMenu = true;
      }, 250);
    }
  }
}
