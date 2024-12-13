import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PlanoEstudosComponent } from './plano-estudos.component';
import { VideoAulaComponent } from './video-aula/video-aula.component';
import { AulaTextoComponent } from './aula-texto/aula-texto.component';
import { AtividadeComponent } from './atividade/atividade.component';

const routes: Routes = [
  {
    path: '',
    component: PlanoEstudosComponent,
  },
  {
    path: 'aula-video',
    component: VideoAulaComponent,
  },
  {
    path: 'aula-texto',
    component: AulaTextoComponent,
  },
  {
    path: 'atividade',
    component: AtividadeComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class planoEstudosRoutingModule {}
