import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanLoad {
  canLoad(route: Route) {
    const allowedRoles = route.data.allowedRoles;
    const isAuthorized = this.authService.isAllowed(allowedRoles);
    if (!isAuthorized) {
      this.router.navigate(['']);
    }
    return isAuthorized;
  }

  constructor(private authService: AuthService, private router: Router) { }

}
