import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PlanoEstudosComponent } from './plano-estudos.component';
import { VideoAulaComponent } from './video-aula/video-aula.component';

const routes: Routes = [
  {
    path: '',
    component: PlanoEstudosComponent,
  },
  {
    path: 'matematica',
    component: VideoAulaComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class planoEstudosRoutingModule {}
