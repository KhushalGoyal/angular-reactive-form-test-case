import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-testing';
  userForm : any = {};
  loggedInUser = new EventEmitter();
  constructor(private formBilder : FormBuilder){
    this.userForm = this.formBilder.group({
      firstname : [null, [Validators.required]],
      lastname : [null, [Validators.required]],
      gender : ['male',[Validators.required]],
      email : [null, [Validators.required,Validators.pattern("[^ @]*@[^ @]*")]]
    })
  }

  ngOnInit(){
   
  }

  registerUser(){
   if(this.userForm.valid){
     debugger;
    this.loggedInUser.emit(
      new User(this.userForm.controls['firstname'].value,
      this.userForm.controls['lastname'].value,
      this.userForm.controls['email'].value,
      this.userForm.controls['gender'].value)
    )
   } 
  }
}


export class User {
  firstname : string;
  lastname : string;
  email : string;
  gender : string;
  constructor(firstname,lastname,email,gender){
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.gender = gender;
  }
}