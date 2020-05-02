import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Login } from './login';
import { Router } from "@angular/router";
import { UserdetailService } from '../userdetail.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isAuthenticated: boolean;
  submitted = false;
  username: string;
  public message: string;
  public userDetail;
  public flag: boolean= false;

  constructor(private router: Router, private _userdetail: UserdetailService, private fb: FormBuilder) { }

  userloginBuilder = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  // userloginfailedBuilder = this.fb;

  login = new Login();

  ngOnInit(): void {
  }

  // onSubmit(name: string, password: string) {
    
  //   this.submitted = true;
  //   this.username = name;
  //   this._userdetail.getUsers().subscribe(
  //     (userdata) => {
  //       userdata.find((user) => {
  //         if (user.username === name && user.password === password){
  //           console.log("Exist");
  //           this.isAuthenticated = true;
  //           this.router.navigate(['/bookride']);
  //           return true
  //         }
  //         else{
  //           console.log("Not Exist");
  //         }
          
  //       });
        
  //     }
  //   );
  //   this.isAuthenticated = false;
  //   return false
    

  // }
  onSubmit(){
    console.warn(this.userloginBuilder.value);
    // this.submitted = true;
    var username = this.userloginBuilder.controls['username'].value;
    var password = this.userloginBuilder.controls['password'].value;
    console.log("User Name : ",username);
    
    this._userdetail.getUsers().subscribe((data) => {
      var value = data.find((filter_data) => {
        console.log("Json Data : ",filter_data.username)
        if (filter_data.username === username && filter_data.password === password){
          return true
        }
        
      })
      console.log(value + "value")
      if (value == undefined){
        // this.userloginBuilder.disable();
        this.flag = true;
        this.message = "Incorrect Username and Password"
        
        return false;
      }
      else if (value.username === username && value.password === password){
        this.flag = false;
        // this.isAuthenticated = true;
        this.router.navigate(['/bookride']);
        return true;
      }
      
      
    });

    console.log("flag : "+this.flag);
    // if (this.flag === false){
    //   this.flag = true
    // }
    

  }

}
