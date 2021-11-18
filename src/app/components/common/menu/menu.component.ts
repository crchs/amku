import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  constructor(
    public auth: AuthService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) { }

  logout(): void {
    this.auth.logout()
      .then(() => {
        this.showLogoutMessage()
        this.router.navigate(['/'])
      })
  }

  showLogoutMessage() {
    this._snackBar.open('Zostałaś wylogowana', 'OK', {
      duration: 3000
    });
  }
}
