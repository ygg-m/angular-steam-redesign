import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';

interface SubPage {
  url: string;
  label: string;
}

@Component({
  selector: 'app-btn-page',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './btn-page.component.html',
  styleUrl: './btn-page.component.css',
})
export class BtnPageComponent implements OnInit {
  selected: boolean = false;
  @Input() label: string = '';
  @Input() url: string = '';
  @Input() subPages?: SubPage[] | null;

  showDropdown: boolean = false;
  hideDropdown: boolean = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (this.router.url.includes(this.url)) {
          this.selected = true;
        } else {
          this.selected = false;
        }
      }
    });
  }

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
