import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' = 'primary';

  @Input() isDisabled: boolean = false;
  @Input() width: string = '80px';
  @Input() height: string = '40px';
}
