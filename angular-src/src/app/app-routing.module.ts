import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleGuard } from './guards/role.guard'
const routes: Routes = [
  {
    path: '',
    loadChildren: './website/website.module#WebsiteModule'
  },
  {
    path: 'manage',
    loadChildren: './manage/manage.module#ManageModule',
    data: {
      allowedRoles: ['ADMIN']
    },
    canLoad: [RoleGuard]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
