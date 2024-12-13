import { Component } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './pontuacao.component.html',
  styleUrls: ['./pontuacao.component.scss'],
})
export class ScoreComponent {
  score: number = 76; // Exemplo de pontuação
  maxScore: number = 100; // Máximo de pontuação

  get meterWidth(): string {
    return `${(this.score / this.maxScore) * 100}%`; // Calcula a largura da barra com base na pontuação
  }

  nextGame() {
    console.log('Iniciar próxima partida');
    // Lógica para iniciar a próxima partida
  }
}
