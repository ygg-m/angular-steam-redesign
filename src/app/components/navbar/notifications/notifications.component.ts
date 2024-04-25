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
  showDropdown: boolean = false;
  hideDropdown: boolean = true;

  @ViewChild('toggleButton') toggleButton!: ElementRef;
  @ViewChild('dropdown') dropdown!: ElementRef;

  constructor(private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (
        !this.toggleButton.nativeElement.contains(e.target) &&
        !this.dropdown.nativeElement.contains(e.target)
      ) {
        this.showDropdown = false;
        setTimeout(() => {
          this.hideDropdown = true;
        }, 250);
      }
    });
  }

  toggleDropdown() {
    if (this.showDropdown == false && this.hideDropdown == true) {
      this.showDropdown = true;
      this.hideDropdown = false;
    } else if (
      this.showDropdown == true &&
      this.hideDropdown == false
    ) {
      this.showDropdown = false;
      setTimeout(() => {
        this.hideDropdown = true;
      }, 250);
    }
  }
}
