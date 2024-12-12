import { Location } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
@Component({
  selector: 'app-video-aula',
  templateUrl: './video-aula.component.html',
  styleUrl: './video-aula.component.scss',
})
export class VideoAulaComponent implements OnInit, OnDestroy {
  constructor(private location: Location) {}
  goBack(): void {
    this.location.back();
  }
  minutos: number = 25;
  segundos: number = 0;
  rodando: boolean = false;
  ciclos: number = 0;
  private intervalId: any = null;
  private descansoCurto: number = 5;
  private descansoLongo: number = 25;

  aulaConcluida: boolean = false; // Estado do botão Concluir
  aulaFavorita: boolean = false; // Estado do botão Favoritar

  ngOnInit() {
    this.carregarEstado();

    // Carrega o estado dos botões ao iniciar o componente
    const concluida = localStorage.getItem('aulaConcluida');
    const favorita = localStorage.getItem('aulaFavorita');

    this.aulaConcluida = concluida ? JSON.parse(concluida) : false;
    this.aulaFavorita = favorita ? JSON.parse(favorita) : false;
  }

  ngOnDestroy() {
    this.salvarEstado();
    this.limparIntervalo();
  }

  // Salva o estado no localStorage
  salvarEstado() {
    const estado = {
      minutos: this.minutos,
      segundos: this.segundos,
      rodando: this.rodando,
      ciclos: this.ciclos,
    };
    localStorage.setItem('pomodoroEstado', JSON.stringify(estado));
  }

  // Carrega o estado salvo do localStorage
  carregarEstado() {
    const estado = localStorage.getItem('pomodoroEstado');
    if (estado) {
      const { minutos, segundos, rodando, ciclos } = JSON.parse(estado);
      this.minutos = minutos;
      this.segundos = segundos;
      this.rodando = false; // Sempre inicia pausado após recarregar
      this.ciclos = ciclos;
    }
  }

  iniciar() {
    if (this.rodando) return; // Impede múltiplos inícios
    this.rodando = true;

    this.intervalId = setInterval(() => {
      if (this.segundos === 0) {
        if (this.minutos > 0) {
          this.minutos--;
          this.segundos = 59;
        } else {
          this.finalizarCiclo();
        }
      } else {
        this.segundos--;
      }
      this.salvarEstado(); // Atualiza o estado continuamente
    }, 1000);
  }

  pausar() {
    if (!this.rodando) return;
    this.rodando = false;
    this.limparIntervalo();
    this.salvarEstado();
  }

  resetar() {
    this.pausar();
    this.minutos = 25;
    this.segundos = 0;
    this.ciclos = 0;
    this.salvarEstado();
  }

  finalizarCiclo() {
    this.pausar();

    if (this.ciclos % 2 === 0) {
      this.ciclos++;
      if (this.ciclos === 8) {
        this.minutos = this.descansoLongo;
        this.ciclos = 0;
        alert('Ciclo completo! Aproveite um descanso longo de 25 minutos.');
      } else {
        this.minutos = this.descansoCurto;
        alert('Pomodoro concluído! Hora de um descanso curto de 5 minutos.');
      }
    } else {
      this.ciclos++;
      this.minutos = 25;
      alert('Descanso concluído! Volte ao trabalho.');
    }

    this.segundos = 0;
    this.salvarEstado();
    this.iniciar();
  }

  limparIntervalo() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  // Alterna o estado do botão Concluir
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
