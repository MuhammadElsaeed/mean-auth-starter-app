import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentComponent } from './components/content/content.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from '../guards/auth.guard'
import { NotAuthGuard } from '../guards/not-auth.guard'
const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
      { path: 'register', component: RegisterComponent, canActivate: [NotAuthGuard] },
      { path: 'login', component: LoginComponent, canActivate: [NotAuthGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
