import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialsButtonComponent } from './shared/components/socials-button/socials-button.component';
import { DropdownComponent } from './shared/components/dropdown/dropdown.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { InputComponent } from './shared/components/input/input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, SocialsButtonComponent, DropdownComponent, ButtonComponent, InputComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
