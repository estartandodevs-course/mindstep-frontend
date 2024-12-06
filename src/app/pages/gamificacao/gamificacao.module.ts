import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
//import { ComponentsModule } from '../../shared/components/components.module';

import { GamificacaoComponent } from './gamificacao.component';
import { gamificacaoRoutingModule } from './gamificacao-routing.module';
import { JogoDaMemoriaModule } from './jogo-da-memoria/jogo-da-memoria.module';

@NgModule({
  imports: [CommonModule, SharedModule, gamificacaoRoutingModule, JogoDaMemoriaModule],
  declarations: [GamificacaoComponent],
  exports: [],
})
export class GamificacaoModule {}
