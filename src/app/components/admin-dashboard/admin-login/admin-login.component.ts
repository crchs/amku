import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';;
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {
  isLoading: boolean = true;

  loginForm = new FormGroup({
    email: new FormControl('',
      [Validators.required, Validators.email]),
    password: new FormControl('',
      [Validators.required]),
  });

  constructor(public auth: AuthService) {
    auth.user.subscribe(() => {
      this.isLoading = false;
    })
  }

  login(): void {
    this.isLoading = true;
    this.auth.login(this.loginForm.value.email, this.loginForm.value.password)
      .then(() => {
        this.loginForm.reset()
        this.isLoading = false;
      })
  }
}
