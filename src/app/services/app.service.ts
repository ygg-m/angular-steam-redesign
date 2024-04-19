import { Injectable } from '@angular/core';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { env } from '../environments/env.development';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private firebase_client: FirebaseApp;

  constructor() {
    this.firebase_client = initializeApp(env.firebase);
  }
}
