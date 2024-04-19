import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg-chevron',
  template: `
    <svg viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.323 16.5418L11.2813 12.5002L15.323 8.4585C15.7292 8.05225 15.7292 7.396 15.323 6.98975C14.9167 6.5835 14.2605 6.5835 13.8542 6.98975L9.073 11.771C8.66675 12.1772 8.66675 12.8335 9.073 13.2397L13.8542 18.021C14.2605 18.4272 14.9167 18.4272 15.323 18.021C15.7188 17.6147 15.7292 16.9481 15.323 16.5418Z"
        fill="currentColor"
      />
    </svg>
  `,
})
export class SvgChevron {}
