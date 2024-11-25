import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationStepOnePageComponent } from './pages/registration-step-one-page/registration-step-one-page.component'; // Certifique-se de que este caminho está correto

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'registration-step-one-page', component: RegistrationStepOnePageComponent },
  // Outras rotas...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
