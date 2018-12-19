import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NotAuthGuard implements CanActivate {
  canActivate() {
    if (!this.authService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/profile']);
      return false;
    }
  }
  constructor(private authService: AuthService, private router: Router) { }
}
