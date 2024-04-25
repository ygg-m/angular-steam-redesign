import { Component } from '@angular/core';
import { SvgCross } from '../../../../assets/cross.component';
import { SvgMinimize } from '../../../../assets/minimize.component';
import { SvgWindow } from '../../../../assets/window.component';

@Component({
  selector: 'app-btns-windows',
  standalone: true,
  imports: [SvgMinimize, SvgWindow, SvgCross],
  templateUrl: './btns-windows.component.html',
})
export class BtnsWindowsComponent {}
