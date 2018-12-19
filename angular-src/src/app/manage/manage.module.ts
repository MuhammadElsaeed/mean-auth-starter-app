import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageRoutingModule } from './manage-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ContentComponent } from './components/content/content.component';

@NgModule({
  declarations: [HomeComponent, ContentComponent],
  imports: [
    CommonModule,
    ManageRoutingModule
  ]
})
export class ManageModule { }
