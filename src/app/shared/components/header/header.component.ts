import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() currentStep: number = 1;
  @Output() backEvent = new EventEmitter<void>();

  onBack(): void {
    if (this.currentStep > 1) {
      this.backEvent.emit();
    } else {
      console.log('Voltar ao login');
    }
  }
}
