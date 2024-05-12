import { Injectable } from '@angular/core';
import { env } from '@env/environment.development';
import { FirebaseApp, initializeApp } from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private firebase_client: FirebaseApp;

  constructor() {
    this.firebase_client = initializeApp(env.firebase);
  }
}
