import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { EstadoAulasService } from '../../core/services/estado-aulas.service';

@Component({
  selector: 'app-metas-diarias',
  templateUrl: './metas-diarias.component.html',
  styleUrls: ['./metas-diarias.component.scss'], // Correção do nome da propriedade
})
export class MetasDiariasComponent implements OnInit {
  @Input() diasComAulasConcluidas: number[] = []; // Corrigido para ficar fora de ngOnInit

  periodos: string[] = ['Dia', 'Semana', 'Mês', 'Ano'];
  periodoSelecionado: string = 'Dia';

  diasSemana: string[] = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

  mesAtual: Date = new Date();
  diasDoMes: number[] = []; // Aceita números ou `null`
  diaAtual: number = new Date().getDate();

  // Dias com aulas
  diasComAulas: number[] = [1, 3, 5, 12, 15, 21]; // Exemplo fixo

  diasConcluidos: number[] = []; // Para armazenar os dias concluídos

  constructor(
    private location: Location,
    private estadoAulasService: EstadoAulasService,
  ) {}

  ngOnInit(): void {
    this.estadoAulasService.diasConcluidos$.subscribe((dias) => (this.diasConcluidos = dias));
    this.atualizarCalendario();
  }

  goBack(): void {
    this.location.back();
    this.atualizarCalendario();
  }

  atualizarCalendario() {
    const primeiroDia = new Date(this.mesAtual.getFullYear(), this.mesAtual.getMonth(), 1).getDay();
    const ultimoDia = new Date(this.mesAtual.getFullYear(), this.mesAtual.getMonth() + 1, 0).getDate();

    // Preenche apenas os dias do mês
    this.diasDoMes = Array.from({ length: ultimoDia }, (_, i) => i + 1);

    // Adiciona um offset para alinhar os dias da semana
    for (let i = 0; i < primeiroDia; i++) {
      this.diasDoMes.unshift(0); // Usa `null` para indicar espaços em branco
    }
  }

  mudarMes(direcao: number) {
    this.mesAtual = new Date(this.mesAtual.getFullYear(), this.mesAtual.getMonth() + direcao, 1);
    this.atualizarCalendario();
  }

  get mesAtualFormatado(): string {
    return new Intl.DateTimeFormat('pt-BR', { month: 'short' }).format(this.mesAtual);
  }

  selecionarPeriodo(periodo: string) {
    this.periodoSelecionado = periodo;
    // Lógica adicional para exibir metas ou outras informações, se necessário.
  }
}
