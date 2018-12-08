import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
;
  username: String;
  password: String;

  constructor(private flashMessagesService: FlashMessagesService,
    private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  onLoginForm() {
    const user = {
      username: this.username,
      password: this.password
    }
    this.authService.authenticateUser(user).subscribe(res => {
      if (res.success) {
        this.flashMessagesService.show('Logged in successfuly', { cssClass: 'alert-success', timeout: 3000 });
        this.authService.storeUSerData(res.token, res.user);
        this.router.navigate(['\dashboard'])
      } else {
        this.flashMessagesService.show(res.msg, { cssClass: 'alert-danger', timeout: 3000 });
      }
    });
  }

}
