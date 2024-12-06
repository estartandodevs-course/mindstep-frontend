import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
// { ComponentsModule } from '../../shared/components/components.module';

import { PlanoEstudosComponent } from './plano-estudos.component';
import { planoEstudosRoutingModule } from './plano-estudos-routing.module';

@NgModule({
  imports: [CommonModule, SharedModule, planoEstudosRoutingModule],
  declarations: [PlanoEstudosComponent],
  exports: [],
})
export class PlanoEstudosModule {}