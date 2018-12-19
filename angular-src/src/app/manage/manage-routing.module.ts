import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentComponent } from './components/content/content.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from '../guards/auth.guard'
const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
    children: [
      { path: '', component: HomeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRoutingModule { }
