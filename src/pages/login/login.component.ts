import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router) {}

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  onSubmit() {
    let loginData = this.loginForm.value;
    if (loginData.email === 'admin' && loginData.password === 'admin') {
      this.router.navigate(['list']);
    } else {
      this.router.navigate(['login']);
    }
  }
}
