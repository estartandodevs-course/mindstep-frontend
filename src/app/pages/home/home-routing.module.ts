import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// componentes
import { HomeComponent } from './home.component';
//import { PlanoEstudosComponent } from '../plano-estudos/plano-estudos.component';
//import { GamificacaoComponent } from '../gamificacao/gamificacao.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'plano-estudos',
    loadChildren: () => import('../plano-estudos/plano-estudos.module').then((m) => m.PlanoEstudosModule),
  },
  {
    path: 'gamificacao',
    loadChildren: () => import('../gamificacao/gamificacao.module').then((m) => m.GamificacaoModule),
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
