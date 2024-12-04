import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-profile-header',
  templateUrl: './header-profile.component.html',
  styleUrl: './header-profile.component.scss',
})
export class HeaderProfileComponent {
  constructor(private location: Location) {}

  @Input() mode: 'dropdown' | 'back' = 'dropdown';
  @Input() page: 'default' | 'gamificacao-home' | 'gamificacao-dashbord' | 'gamificacao-jogos' = 'default';
  @Input() SearchNotification: boolean = true;

  sliderValue: number = 50; // Valor inicial do slider

  onRangeChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.sliderValue = +input.value;
  }

  dropdownOpen = false;
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
  goBack(): void {
    this.location.back();
  }

  search() {}

  handleKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      // Dispara a função associada ao clique
      if (event.target instanceof HTMLElement) {
        const element = event.target;
        if (element.tagName === 'BUTTON') {
          element.click();
        }
      }
    }
  }
}
