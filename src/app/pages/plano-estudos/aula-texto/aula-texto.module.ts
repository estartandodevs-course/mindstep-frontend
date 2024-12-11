import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { AulaTextoComponent } from './aula-texto.component';

@NgModule({
  declarations: [AulaTextoComponent],
  imports: [CommonModule, SharedModule],
})
export class AulaTextoModule {}
