import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// componentes
import { HomeComponent } from './home.component';
import { PlanoEstudosComponent } from '../plano-estudos/plano-estudos.component';
import { GamificacaoComponent } from '../gamificacao/gamificacao.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'plano-estudos',
    component: PlanoEstudosComponent,
  },
  {
    path: 'gamificacao',
    component: GamificacaoComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
