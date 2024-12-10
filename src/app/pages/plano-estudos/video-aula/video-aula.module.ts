import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { VideoAulaComponent } from './video-aula.component';
//import { VideoAulaComponent } from './video-aula.component';

@NgModule({
  declarations: [VideoAulaComponent],
  imports: [CommonModule, SharedModule],
})
export class VideoAulaModule {}
