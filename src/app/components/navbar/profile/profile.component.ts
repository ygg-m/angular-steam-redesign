import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { SvgChevron } from '../../../../assets/chevron.component';
import { BtnSmComponent } from '../../btn-sm/btn-sm.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [BtnSmComponent, SvgChevron, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
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

  togglePopUp() {
    if (this.showDropdown == false && this.hideDropdown == true) {
      this.showDropdown = true;
      this.hideDropdown = false;
    } else if (this.showDropdown == true && this.hideDropdown == false) {
      this.showDropdown = false;
      setTimeout(() => {
        this.hideDropdown = true;
      }, 250);
    }
  }
}
