import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../../services/auth.service';

import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted: Boolean = false;
  error: String;
  isBusy = false;
  constructor(private authService: AuthService, private router: Router,
    private formBuilder: FormBuilder, private flashMessagesService: FlashMessagesService) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get form() { return this.loginForm.controls; }

  onLoginForm() {
    this.isBusy = true;
    this.submitted = true;
    window.scrollTo(0, 0);

    if (this.loginForm.invalid) {
      this.error = "Please check all fields.";
      this.isBusy = false;
      return;
    }

    this.authService.authenticateUser(this.loginForm.getRawValue()).subscribe(res => {
      if (res.success) {
        this.flashMessagesService.show('Logged in successfuly', { cssClass: 'alert-success', timeout: 3000 });
        this.authService.storeUSerData(res.token, res.user);
        this.router.navigate(['\dashboard'])
      } else {
        this.flashMessagesService.show(res.msg, { cssClass: 'alert-danger', timeout: 3000 });
      }
    }, err => {
      if (err.status == 400 || err.status == 404) {
        this.error = err.error.msg;
        this.router.navigate(['/login']);
      } else {
        this.error = "ERROR: Something went wrong, please try again later.";
      }
    });
    this.isBusy = false;

  }

}
