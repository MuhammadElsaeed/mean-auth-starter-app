import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private flashMessagesService: FlashMessagesService,
    private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  onLogoutClick() {
    this.authService.logout();
    this.flashMessagesService.show('You logged out successfully', { cssClass: 'alert-success', timeout: 3000 });
    this.router.navigate(['/login']);
  }
}
