import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
// { ComponentsModule } from '../../shared/components/components.module';

import { PlanoEstudosComponent } from './plano-estudos.component';
import { planoEstudosRoutingModule } from './plano-estudos-routing.module';
import { VideoAulaComponent } from './video-aula/video-aula.component';
import { AulaTextoComponent } from './aula-texto/aula-texto.component';
import { AtividadeComponent } from './atividade/atividade.component';

@NgModule({
  imports: [CommonModule, SharedModule, planoEstudosRoutingModule],
  declarations: [PlanoEstudosComponent, VideoAulaComponent, AulaTextoComponent, AtividadeComponent],
  exports: [],
})
export class PlanoEstudosModule {}
