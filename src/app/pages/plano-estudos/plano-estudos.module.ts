import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
// { ComponentsModule } from '../../shared/components/components.module';

import { PlanoEstudosComponent } from './plano-estudos.component';
import { planoEstudosRoutingModule } from './plano-estudos-routing.module';
import { AtividadeModule } from './atividade/atividade.module';
import { VideoAulaModule } from './video-aula/video-aula.module';
import { AulaTextoModule } from './aula-texto/aula-texto.module';

@NgModule({
  imports: [CommonModule, SharedModule, planoEstudosRoutingModule, AtividadeModule, VideoAulaModule, AulaTextoModule],
  declarations: [PlanoEstudosComponent],
  exports: [],
})
export class PlanoEstudosModule {}
