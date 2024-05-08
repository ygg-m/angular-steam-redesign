import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sshot',
  standalone: true,
  imports: [],
  templateUrl: './sshot.component.html',
})
export class SshotComponent {
  @Input() url: string = '';
}
