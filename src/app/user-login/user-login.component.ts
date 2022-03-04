import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import{Route, Router} from "@angular/router";
import {TosterService} from '../toaster.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
rows:any=[];
userlogin:any;
loginMode:boolean=true;
  constructor(private router:Router,private toastr:TosterService) { }

  ngOnInit(): void {
  }

go(){
  this.toastr.showSuccessMesssage("Student Management System");
this.router.navigate(['/header']);
}

//  toggleResetPswd(e){
//   e.preventDefault();
//   $('#logreg-forms .form-signin').toggle() // display:block or none
//   $('#logreg-forms .form-reset').toggle() // display:block or none
// }

//  toggleSignUp(e){
//   e.preventDefault();
//   $('#logreg-forms .form-signin').toggle(); // display:block or none
//   $('#logreg-forms .form-signup').toggle(); // display:block or none
// }

// $(()=>{
//   // Login Register Form
//   $('#logreg-forms #forgot_pswd').click(toggleResetPswd);
//   $('#logreg-forms #cancel_reset').click(toggleResetPswd);
//   $('#logreg-forms #btn-signup').click(toggleSignUp);
//   $('#logreg-forms #cancel_signup').click(toggleSignUp);
// })
onSwitchMode(){
  this.loginMode=!this.loginMode;
}
onSubmit(){
//  if( this.userlogin.valid){

//  };
}
}
