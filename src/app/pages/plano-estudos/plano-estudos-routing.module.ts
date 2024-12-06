import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PlanoEstudosComponent } from './plano-estudos.component';

const routes: Routes = [
  {
    path: '',
    component: PlanoEstudosComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class planoEstudosRoutingModule {}
