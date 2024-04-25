import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SvgChevron } from '../../../../../assets/chevron.component';

interface SubPage {
  url: string;
  label: string;
}

@Component({
  selector: 'app-btn-page',
  standalone: true,
  imports: [CommonModule, SvgChevron],
  templateUrl: './btn-page.component.html',
  styleUrl: './btn-page.component.css',
})
export class BtnPageComponent {
  @Input() label: string = '';
  @Input() url: string = '';
  @Input() subPages?: SubPage[] = [];

  showDropdown: boolean = false;
  hideDropdown: boolean = true;

  toggleDropdown() {
    if (this.showDropdown == false && this.hideDropdown == true) {
      this.showDropdown = true;
      this.hideDropdown = false;
    } else if (this.showDropdown == true && this.hideDropdown == false) {
      this.showDropdown = false;
      this.hideDropdown = true;
    }
    console.log(this.subPages);
  }
}
