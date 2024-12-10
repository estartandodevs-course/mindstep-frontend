import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
//import { GamificacaoModule } from '../gamificacao/gamificacao.module';
import { PlanoEstudosModule } from '../plano-estudos/plano-estudos.module';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './home.component';
import { GamificacaoModule } from '../gamificacao/gamificacao.module';
//import { ComponentsModule } from '../../shared/components/components.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [HomeRoutingModule, SharedModule, CommonModule, PlanoEstudosModule, GamificacaoModule],
})
export class HomeModule {}
