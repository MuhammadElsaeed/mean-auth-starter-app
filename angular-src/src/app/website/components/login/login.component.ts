import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ValidateService } from '../../../services/validate.service';
import { AuthService } from '../../../services/auth.service';

import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: String;
  password: String;

  constructor(private validateService: ValidateService, private flashMessagesService: FlashMessagesService,
    private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  onLoginForm() {
    const user = {
      email: this.email,
      password: this.password
    }
    if(!user.password|| !user.email){
      this.flashMessagesService.show('Please fill all fields.', { cssClass: 'alert-danger', timeout: 3000 });
      this.router.navigate(['/login']);
      return false;
    }
    
    if (!this.validateService.validateEmail(user.email)) {
      this.flashMessagesService.show('Please write a valid email.', { cssClass: 'alert-danger', timeout: 3000 });
      this.router.navigate(['/login']);
      return false;
    }

    this.authService.authenticateUser(user).subscribe(res => {
      if (res.success) {
        this.flashMessagesService.show('Logged in successfuly', { cssClass: 'alert-success', timeout: 3000 });
        this.authService.storeUSerData(res.token, res.user);
        this.router.navigate(['\dashboard'])
      } else {
        this.flashMessagesService.show(res.msg, { cssClass: 'alert-danger', timeout: 3000 });
      }
    }, err => {
      console.log(err.message);
      this.flashMessagesService.show('ERROR: Something went wrong, please try again later.', { cssClass: 'alert-danger', timeout: 3000 });

    });
  }

}
