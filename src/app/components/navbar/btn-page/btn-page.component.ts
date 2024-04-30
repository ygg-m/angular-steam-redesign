import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface SubPage {
  url: string;
  label: string;
}

@Component({
  selector: 'app-btn-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './btn-page.component.html',
  styleUrl: './btn-page.component.css',
})
export class BtnPageComponent {
  @Input() label: string = '';
  @Input() url: string = '';
  @Input() subPages?: SubPage[] | null;

  showDropdown: boolean = false;
  hideDropdown: boolean = true;

  openDropdown() {
    this.showDropdown = true;
    this.hideDropdown = false;
  }

  closeDropdown() {
    this.showDropdown = false;
    setTimeout(() => {
      this.hideDropdown = true;
    }, 250);
  }
}
