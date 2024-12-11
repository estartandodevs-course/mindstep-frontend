import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// componentes
import { GamificacaoComponent } from './gamificacao.component';
import { JogoDaMemoriaComponent } from './jogo-da-memoria/jogo-da-memoria.component';

const routes: Routes = [
  {
    path: '',
    component: GamificacaoComponent,
  },
  {
    path: 'jogo-memoria',
    component: JogoDaMemoriaComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class gamificacaoRoutingModule {}
