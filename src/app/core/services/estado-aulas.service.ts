import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EstadoAulasService {
  private diasConcluidosSubject = new BehaviorSubject<number[]>([]);
  diasConcluidos$ = this.diasConcluidosSubject.asObservable();

  // Adiciona um dia à lista de concluídos
  adicionarDiaConcluido(dia: number): void {
    const diasAtualizados = [...this.diasConcluidosSubject.value];
    if (!diasAtualizados.includes(dia)) {
      diasAtualizados.push(dia);
      this.diasConcluidosSubject.next(diasAtualizados);
    }
  }

  // Obtém os dias concluídos
  getDiasConcluidos(): number[] {
    return this.diasConcluidosSubject.value;
  }
}
