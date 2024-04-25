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
  showFriends: boolean = false;
  hideFriends: boolean = true;
  friendTab: number = 0;

  @ViewChild('toggleButton') toggleButton!: ElementRef;
  @ViewChild('popUp') popUp!: ElementRef;

  constructor(private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (
        !this.toggleButton.nativeElement.contains(e.target) &&
        !this.popUp.nativeElement.contains(e.target)
      ) {
        this.showFriends = false;
        setTimeout(() => {
          this.hideFriends = true;
        }, 250);
      }
    });
  }

  togglePopUp() {
    if (this.showFriends == false && this.hideFriends == true) {
      this.showFriends = true;
      this.hideFriends = false;
    } else if (this.showFriends == true && this.hideFriends == false) {
      this.showFriends = false;
      setTimeout(() => {
        this.hideFriends = true;
      }, 250);
    }
  }

  changeFriendTab(tab: number) {
    this.friendTab = tab;
  }
}
