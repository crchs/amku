import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {

  constructor(public auth: AuthService) {
  }

  login(): void {
    console.log('logujem')
    const email = 'kolenycz@gmail.com'
    const password = ''

    this.auth.login(email, password)
  }

  logout(): void {
    this.auth.logout()
  }
}
