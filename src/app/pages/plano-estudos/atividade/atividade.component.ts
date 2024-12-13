import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-atividade',
  templateUrl: './atividade.component.html',
  styleUrl: './atividade.component.scss',
})
export class AtividadeComponent {
  constructor(private location: Location) {}
  goBack(): void {
    this.location.back();
  }
  comment: string = '';
}
