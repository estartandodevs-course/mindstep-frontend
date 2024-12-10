import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JogoDaMemoriaComponent } from './jogo-da-memoria.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [JogoDaMemoriaComponent],
  imports: [SharedModule, CommonModule],
})
export class JogoDaMemoriaModule {}
