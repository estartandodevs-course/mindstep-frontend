import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { PlanoEstudosModule } from '../plano-estudos/plano-estudos.module';
import { GamificacaoModule } from '../gamificacao/gamificacao.module';

@NgModule({
  declarations: [],
  imports: [HomeRoutingModule, CommonModule, PlanoEstudosModule, GamificacaoModule],
})
export class HomeModule {}
