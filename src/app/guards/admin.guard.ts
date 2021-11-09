import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs/operators'
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router
  ) {

  }

  canActivate(): Observable<boolean | UrlTree> {

    return this.auth.user.pipe(
      switchMap((isLoggedIn) => {
        if (isLoggedIn) {
          return of(true)
        } else {
          this.router.navigateByUrl('/404');
          return of(false)
        }
      })
    )
  }

}
