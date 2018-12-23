import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ValidateService } from '../../../services/validate.service';
import { AuthService } from '../../../services/auth.service';

import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted: Boolean = false;
  error: String;
  isBusy = false;
  constructor(private validateService: ValidateService, private flashMessagesService: FlashMessagesService,
    private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      dateOfBirth: ['', [Validators.required, this.validateService.validateDate(10)]],
      bio: [''],
      jobTitle: ['', Validators.required],
      gender: ['MALE', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required]
    });
  }

  get form() { return this.registerForm.controls; }

  onRegisterForm() {
    this.isBusy = true;
    this.submitted = true;
    window.scrollTo(0, 0);

    if (this.registerForm.invalid) {
      this.error = "Please check all fields.";
      this.isBusy = false;
      return;
    }
    this.authService.registerUser(this.registerForm.getRawValue()).subscribe(res => {
      if (res.success) {
        this.flashMessagesService.show('You registerd successfully', { cssClass: 'alert-success', timeout: 3000 });
        this.error = null;
        this.router.navigate(['/login']);
      } else {
        this.error = res.msg;
        this.router.navigate(['/register']);
      }
    }, err => {
      if (err.status == 400) {
        this.error = err.error.msg;
        this.router.navigate(['/register']);
      } else {
        this.error = "ERROR: Something went wrong, please try again later.";
      }
    });
    this.isBusy = true;
  }
}
