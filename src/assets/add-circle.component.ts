import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg-add-circle',
  template: `
    <svg viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.5 4.25C8.0325 4.25 7.65 4.6325 7.65 5.1V7.65H5.1C4.6325 7.65 4.25 8.0325 4.25 8.5C4.25 8.9675 4.6325 9.35 5.1 9.35H7.65V11.9C7.65 12.3675 8.0325 12.75 8.5 12.75C8.9675 12.75 9.35 12.3675 9.35 11.9V9.35H11.9C12.3675 9.35 12.75 8.9675 12.75 8.5C12.75 8.0325 12.3675 7.65 11.9 7.65H9.35V5.1C9.35 4.6325 8.9675 4.25 8.5 4.25ZM8.5 0C3.808 0 0 3.808 0 8.5C0 13.192 3.808 17 8.5 17C13.192 17 17 13.192 17 8.5C17 3.808 13.192 0 8.5 0ZM8.5 15.3C4.7515 15.3 1.7 12.2485 1.7 8.5C1.7 4.7515 4.7515 1.7 8.5 1.7C12.2485 1.7 15.3 4.7515 15.3 8.5C15.3 12.2485 12.2485 15.3 8.5 15.3Z"
        fill="currentColor"
      />
    </svg>
  `,
})
export class SvgAddCircle {}
