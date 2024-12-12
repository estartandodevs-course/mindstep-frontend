import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilProfissionalComponent } from './perfil-profissional.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [PerfilProfissionalComponent],
  imports: [CommonModule, SharedModule],
})
export class PerfilProfissionalModule {}
