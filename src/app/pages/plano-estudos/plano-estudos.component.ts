import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-plano-estudos',
  templateUrl: './plano-estudos.component.html',
  styleUrl: './plano-estudos.component.scss',
})
export class PlanoEstudosComponent {
  constructor(private location: Location) {}
  goBack(): void {
    this.location.back();
  }
}
