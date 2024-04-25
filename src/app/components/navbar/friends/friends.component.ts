import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { SvgAddCircle } from '../../../../assets/add-circle.component';
import { SvgChevron } from '../../../../assets/chevron.component';
import { SvgPeople } from '../../../../assets/people.component';
import { BtnSmComponent } from '../../btn-sm/btn-sm.component';

@Component({
  selector: 'app-friends',
  standalone: true,
  imports: [BtnSmComponent, SvgPeople, SvgChevron, SvgAddCircle, CommonModule],
  templateUrl: './friends.component.html',
  styleUrl: './friends.component.css',
})
export class FriendsComponent {
  showDropdown: boolean = false;
  hideDropdown: boolean = true;
  friendTab: number = 0;

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

  changeFriendTab(tab: number) {
    this.friendTab = tab;
  }
}
