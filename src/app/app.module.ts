import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // Certifique-se de importar CUSTOM_ELEMENTS_SCHEMA se for necessário.

import { AppComponent } from './app.component';

import { SocialsButtonComponent } from './shared/components/socials-button/socials-button.component';
import { DropdownComponent } from './shared/components/dropdown/dropdown.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { InputComponent } from './shared/components/input/input.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { RegistrationStepOnePageComponent } from './pages/registration-step-one-page/registration-step-one-page.component';
import { JogoDaMemoriaComponent } from './pages/gamificacao/jogo-da-memoria/jogo-da-memoria.component';
import { HomeComponent } from './pages/home/home.component';
import { MetasDiariasComponent } from './pages/metas-diarias/metas-diarias.component';

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './pages/home/home.module';
import { ProximasAtividadesComponent } from './pages/proximas-atividades/proximas-atividades.component';
@NgModule({
  declarations: [
    AppComponent,
    SocialsButtonComponent,
    DropdownComponent,
    ButtonComponent,
    InputComponent,
    LoginComponent,
    HeaderComponent,
    RegistrationStepOnePageComponent,
    JogoDaMemoriaComponent,
    HomeComponent,
    ProximasAtividadesComponent,
    MetasDiariasComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HomeModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Incluído para suporte a Web Components, se necessário.
})
export class AppModule {}
