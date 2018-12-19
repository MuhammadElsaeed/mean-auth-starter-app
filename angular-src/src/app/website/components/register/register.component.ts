import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ValidateService } from '../../../services/validate.service';
import { AuthService } from '../../../services/auth.service';

import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  firstName: String;
  lastName: String;
  email: String;
  password: String;

  constructor(private validateService: ValidateService, private flashMessagesService: FlashMessagesService,
    private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  onRegisterForm() {
    let user = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password
    }
    if (!this.validateService.validateNotEmpty(user)) {
      this.flashMessagesService.show('Please fill all fields.', { cssClass: 'alert-danger', timeout: 3000 });
      this.router.navigate(['/register']);
      return false;
    }
    else if (!this.validateService.validateEmail(user.email)) {
      this.flashMessagesService.show('Please write a valid email.', { cssClass: 'alert-danger', timeout: 3000 });
      this.router.navigate(['/register']);
      return false;
    } else {
      this.authService.registerUser(user).subscribe(res => {
        if (res.success) {
          this.flashMessagesService.show('You registerd successfully', { cssClass: 'alert-success', timeout: 3000 });
          this.router.navigate(['/login']);
        } else {
          this.flashMessagesService.show(res.msg, { cssClass: 'alert-danger', timeout: 3000 });
          this.router.navigate(['/register']);
        }
      }, err => {
        console.log(err.message);
        this.flashMessagesService.show('ERROR: Something went wrong, please try again later.', { cssClass: 'alert-danger', timeout: 3000 });

      });
    }
  }
}
