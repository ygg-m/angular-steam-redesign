import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { SvgMailRead } from '../../../../assets/mail-read.component';
import { SvgNotification } from '../../../../assets/notification.component';
import { SvgPeople } from '../../../../assets/people.component';
import { SvgSettings } from '../../../../assets/settings.component';
import { BtnSmComponent } from '../../btn-sm/btn-sm.component';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [
    SvgMailRead,
    SvgSettings,
    SvgPeople,
    BtnSmComponent,
    SvgNotification,
    CommonModule,
  ],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css',
})
export class NotificationsComponent {
  showNotifications: boolean = false;
  hideNotifications: boolean = true;

  @ViewChild('toggleButton') toggleButton!: ElementRef;
  @ViewChild('popUp') popUp!: ElementRef;

  constructor(private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (
        !this.toggleButton.nativeElement.contains(e.target) &&
        !this.popUp.nativeElement.contains(e.target)
      ) {
        this.showNotifications = false;
        setTimeout(() => {
          this.hideNotifications = true;
        }, 250);
      }
    });
  }

  togglePopUp() {
    if (this.showNotifications == false && this.hideNotifications == true) {
      this.showNotifications = true;
      this.hideNotifications = false;
    } else if (
      this.showNotifications == true &&
      this.hideNotifications == false
    ) {
      this.showNotifications = false;
      setTimeout(() => {
        this.hideNotifications = true;
      }, 250);
    }
  }
}
