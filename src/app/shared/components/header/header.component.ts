import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private location: Location) {}

  // Método chamado ao clicar no botão
  onBack(): void {
    this.location.back();
  }
}
