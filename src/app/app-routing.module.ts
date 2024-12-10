import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationStepOnePageComponent } from './pages/registration-step-one-page/registration-step-one-page.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'registration-step-one-page', component: RegistrationStepOnePageComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
