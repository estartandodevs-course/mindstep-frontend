import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-profile-header',
  templateUrl: './header-profile.component.html',
  styleUrl: './header-profile.component.scss',
})
export class HeaderProfileComponent {
  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
