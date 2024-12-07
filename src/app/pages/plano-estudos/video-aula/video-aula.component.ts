import { Component } from '@angular/core';

@Component({
  selector: 'app-video-aula',
  templateUrl: './video-aula.component.html',
  styleUrl: './video-aula.component.scss',
})
export class VideoAulaComponent {
  minutos: number = 25; // Minutos iniciais do Pomodoro
  segundos: number = 0; // Segundos iniciais do Pomodoro
  rodando: boolean = false; // Indica se o timer está em execução
  private intervalId: any; // Armazena o ID do intervalo para controle

  // Inicia o temporizador
  iniciar() {
    if (!this.rodando) {
      this.rodando = true;
      this.intervalId = setInterval(() => {
        if (this.segundos === 0) {
          if (this.minutos > 0) {
            this.minutos--;
            this.segundos = 59;
          } else {
            this.pausar();
            alert('Pomodoro concluído! Hora de fazer uma pausa.');
          }
        } else {
          this.segundos--;
        }
      }, 1000); // Executa a cada 1 segundo
    }
  }

  // Pausa o temporizador
  pausar() {
    this.rodando = false;
    clearInterval(this.intervalId);
  }

  // Reseta o temporizador para o estado inicial
  resetar() {
    this.pausar();
    this.minutos = 25;
    this.segundos = 0;
  }
}
