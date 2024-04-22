import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg-favorite',
  template: `
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.3502 20.13C12.5902 20.82 11.4202 20.82 10.6602 20.12L10.5502 20.02C5.30015 15.27 1.87015 12.16 2.00015 8.27998C2.06015 6.57998 2.93015 4.94998 4.34015 3.98998C6.98015 2.18998 10.2402 3.02998 12.0002 5.08998C13.7602 3.02998 17.0202 2.17998 19.6602 3.98998C21.0702 4.94998 21.9402 6.57998 22.0002 8.27998C22.1402 12.16 18.7002 15.27 13.4502 20.04L13.3502 20.13Z"
        fill="currentColor"
      />
    </svg>
  `,
})
export class SvgFavorite {}
