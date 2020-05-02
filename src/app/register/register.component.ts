import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  userregisterBuilder = this.fb.group({
    username: ['', Validators.required],
    useremail: ['', Validators.required],
    password: ['', Validators.required],
    confirmpassword: ['', Validators.required]
  });

  ngOnInit(): void {
  }

  onRegister(){
    console.warn(this.userregisterBuilder.value);
  }

}
