import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  logiIn(): void {
    // TODO: call login api here and store session storage if logged in
  }

  startSession() {
    // TODO: starts session timer, if called again, resets timer
  }
}
