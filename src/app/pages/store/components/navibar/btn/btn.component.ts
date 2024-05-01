import { Component, Input, OnInit } from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './btn.component.html',
})
export class BtnComponent implements OnInit {
  selected?: boolean = false;
  @Input() url: string = '';
  @Input() label: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    if (this.router.url.includes(this.url)) {
      this.selected = true;
    } else {
      this.selected = false;
    }

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (this.router.url === this.url) {
          this.selected = true;
        } else {
          this.selected = false;
        }
      }
    });
  }
}
