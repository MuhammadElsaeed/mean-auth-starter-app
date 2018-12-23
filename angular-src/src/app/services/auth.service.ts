import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

export function getToken() {
  return localStorage.getItem('id_token');
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = '/api/';

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) { }

  registerUser(user): any {
    return this.http.post(this.url + 'users', user).pipe(
      map(response => response));
  }
  authenticateUser(user): any {
    return this.http.post(this.url + 'users/auth', user).pipe(
      map(response => response));
  }
  storeUSerData(token, user) {
    localStorage.setItem('id_token', token);
  }
  logout() {
    localStorage.clear();
  }
  getProfile(): any {
    return this.http.get(this.url + 'users/profile').pipe(
      map(response => response));
  }

  isLoggedIn() {
    return !this.jwtHelper.isTokenExpired();
  }
  isAllowed(allowedRoles){
    if(!this.isLoggedIn()){
      return false;
    }
    const user = this.jwtHelper.decodeToken(getToken());
    let role = user.role;
    return allowedRoles.includes(role);
  }
}
