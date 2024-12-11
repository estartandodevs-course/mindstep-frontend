import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-socials-button',
  templateUrl: './socials-button.component.html',
  styleUrl: './socials-button.component.scss',
})
export class SocialsButtonComponent {
  @Input() variant:
    | 'google'
    | 'google-secondary'
    | 'google-icon'
    | 'facebook'
    | 'facebook-secondary'
    | 'google-secondary-icon'
    | 'email-secondary'
    | 'email' = 'google';
  @Input() isDisabled: boolean = false;
  @Input() width: string = '167px';
  @Input() height: string = '34px';
}
