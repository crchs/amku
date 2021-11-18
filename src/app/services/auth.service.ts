import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<any>;

  constructor(private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
  }

  login(email: string, password: string): any {
    try {
      return this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
    } catch (e) {
      throw e
    }
  }

  logout() {
    return this.firebaseAuth
      .signOut();
  }
}
