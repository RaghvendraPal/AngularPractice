import { Component, OnInit } from '@angular/core';
import { Login } from './login';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isAuthenticated: boolean;
  submitted = false;
  username: string;

  constructor(private router: Router) { }

  login = new Login();

  ngOnInit(): void {
  }

  onSubmit(name: string, password: string) {
    console.log(name, password);
    this.submitted = true;
    this.username = name;
    if (name === 'raghav@gmail.com' && password === '1234') {
      this.isAuthenticated = true;
      this.router.navigate(['/bookride']);
    } else {
      this.isAuthenticated = false;
    }

  }

}
