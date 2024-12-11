import { Component } from '@angular/core';

@Component({
  selector: 'app-metas-diarias',
  templateUrl: './metas-diarias.component.html',
  styleUrl: './metas-diarias.component.scss',
})
export class MetasDiariasComponent {
  periodos: string[] = ['Dia', 'Semana', 'Mês', 'Ano'];
  periodoSelecionado: string = 'Dia';

  diasSemana: string[] = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

  // Datas
  mesAtual: Date = new Date();
  diasDoMes: number[] = [];
  diaAtual: number = new Date().getDate();

  // Dias com aulas
  diasComAulas: number[] = [1, 3, 5, 12, 15, 21]; // Exemplo fixo; substitua pela lógica de dados.

  constructor() {
    this.atualizarCalendario();
  }

  atualizarCalendario() {
    const primeiroDia = new Date(this.mesAtual.getFullYear(), this.mesAtual.getMonth(), 1).getDay();
    const ultimoDia = new Date(this.mesAtual.getFullYear(), this.mesAtual.getMonth() + 1, 0).getDate();

    // Preenche apenas os dias do mês
    this.diasDoMes = Array.from({ length: ultimoDia }, (_, i) => i + 1);

    // Adiciona um offset para alinhar os dias da semana
    for (let i = 0; i < primeiroDia; i++) {
      this.diasDoMes.unshift(null as any); // Usa `null` para indicar espaços em branco
    }
  }

  mudarMes(direcao: number) {
    this.mesAtual = new Date(this.mesAtual.getFullYear(), this.mesAtual.getMonth() + direcao, 1);
    this.atualizarCalendario();
  }

  // Propriedade que retorna o mês formatado em português com as 3 primeiras letras
  get mesAtualFormatado(): string {
    return new Intl.DateTimeFormat('pt-BR', { month: 'short' }).format(this.mesAtual);
  }

  selecionarPeriodo(periodo: string) {
    this.periodoSelecionado = periodo;
    // Lógica adicional para exibir metas ou outras informações, se necessário.
  }
}
