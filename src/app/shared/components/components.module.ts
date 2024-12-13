import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderProfileComponent } from './header-profile/header-profile.component';
import { FooterComponent } from './footer/footer.component';
import { PontuacaoComponent } from './pontuacao/pontuacao.component';

@NgModule({
  declarations: [HeaderProfileComponent, FooterComponent, PontuacaoComponent],
  imports: [CommonModule],
  exports: [HeaderProfileComponent, FooterComponent],
})
export class ComponentsModule {}
