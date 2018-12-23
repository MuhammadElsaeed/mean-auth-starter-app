import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WebsiteRoutingModule } from './website-routing.module';

import { ContentComponent } from './components/content/content.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

import { ValidateService } from '../services/validate.service';
import { AuthService } from '../services/auth.service';

import { FlashMessagesModule } from 'angular2-flash-messages';

@NgModule({
  declarations: [
    ContentComponent,
    NavbarComponent,
    HomeComponent,
    ProfileComponent,
    DashboardComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlashMessagesModule.forRoot()

  ],
  providers: [AuthService, ValidateService]

})
export class WebsiteModule { }
