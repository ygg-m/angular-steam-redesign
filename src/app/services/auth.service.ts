import { Injectable } from '@angular/core';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  updateEmail,
  updatePassword,
  updateProfile,
} from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth;

  constructor() {
    this.auth = getAuth();
  }

  signUp(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  signIn(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  signOut() {
    return signOut(this.auth);
  }

  updateEmail(email: string) {
    return updateEmail(this.auth.currentUser!, email);
  }

  updatePassword(password: string) {
    return updatePassword(this.auth.currentUser!, password);
  }

  updateUsername(username: string) {
    return updateProfile(this.auth.currentUser!, { displayName: username });
  }
}
