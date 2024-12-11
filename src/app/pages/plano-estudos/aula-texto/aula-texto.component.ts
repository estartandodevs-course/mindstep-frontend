import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aula-texto',
  templateUrl: './aula-texto.component.html',
  styleUrl: './aula-texto.component.scss',
})
export class AulaTextoComponent implements OnInit {
  aulaConcluida: boolean = false; // Estado do botão Concluir
  aulaFavorita: boolean = false; // Estado do botão Favoritar

  ngOnInit() {
    const concluida = localStorage.getItem('aulaConcluida');
    const favorita = localStorage.getItem('aulaFavorita');
    this.aulaConcluida = concluida ? JSON.parse(concluida) : false;
    this.aulaFavorita = favorita ? JSON.parse(favorita) : false;
  }

  toggleConcluir() {
    this.aulaConcluida = !this.aulaConcluida;

    // Salva no localStorage
    localStorage.setItem('aulaConcluida', JSON.stringify(this.aulaConcluida));
  }

  // Alterna o estado do botão Favoritar
  toggleFavoritar() {
    this.aulaFavorita = !this.aulaFavorita;

    // Salva no localStorage
    localStorage.setItem('aulaFavorita', JSON.stringify(this.aulaFavorita));
  }
}
