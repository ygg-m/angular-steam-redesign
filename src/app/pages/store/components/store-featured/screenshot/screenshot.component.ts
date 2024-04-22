import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-screenshot',
  standalone: true,
  imports: [],
  templateUrl: './screenshot.component.html',
})
export class ScreenshotComponent {
  @Input() url: string = '';
}
