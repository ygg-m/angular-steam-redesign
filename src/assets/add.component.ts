import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg-add',
  template: `
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.3333 10.6667H11.1667V14.8333C11.1667 15.2917 10.7917 15.6667 10.3333 15.6667C9.875 15.6667 9.5 15.2917 9.5 14.8333V10.6667H5.33333C4.875 10.6667 4.5 10.2917 4.5 9.83333C4.5 9.375 4.875 9 5.33333 9H9.5V4.83333C9.5 4.375 9.875 4 10.3333 4C10.7917 4 11.1667 4.375 11.1667 4.83333V9H15.3333C15.7917 9 16.1667 9.375 16.1667 9.83333C16.1667 10.2917 15.7917 10.6667 15.3333 10.6667Z"
        fill="currentColor"
      />
    </svg>
  `,
})
export class SvgAdd {}
