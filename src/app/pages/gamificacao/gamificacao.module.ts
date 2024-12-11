import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { GamificacaoComponent } from './gamificacao.component';
import { gamificacaoRoutingModule } from './gamificacao-routing.module';
@NgModule({
  imports: [CommonModule, SharedModule, gamificacaoRoutingModule],
  declarations: [GamificacaoComponent],
  exports: [],
})
export class GamificacaoModule {}
