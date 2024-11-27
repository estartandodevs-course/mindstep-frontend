import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() name: string = '';
  @Input() validationPattern: string = '';
  @Input() width: string = '300px';
  @Input() height: string = '';

  value: string = '';
  isValid: boolean = false;
  hasError: boolean = false;

  validateInput(value: string): void {
    if (this.validationPattern) {
      const regex = new RegExp(this.validationPattern);
      this.isValid = regex.test(value);
      this.hasError = !this.isValid && value.length > 0;
    } else {
      this.isValid = value.length > 0;
      this.hasError = value.length === 0;
    }
  }
}
