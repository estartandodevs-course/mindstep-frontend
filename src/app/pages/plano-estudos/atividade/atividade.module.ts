import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AtividadeComponent } from './atividade.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [AtividadeComponent],
  imports: [CommonModule, FormsModule, SharedModule],
})
export class AtividadeModule {}
