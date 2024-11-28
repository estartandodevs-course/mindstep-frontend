import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialsButtonComponent } from './shared/components/socials-button/socials-button.component';
import { DropdownComponent } from './shared/components/dropdown/dropdown.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { InputComponent } from './shared/components/input/input.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { RegistrationStepOnePageComponent } from './pages/registration-step-one-page/registration-step-one-page.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Adicionado se o DropdownComponent for um Web Component
})
export class AppModule {}
