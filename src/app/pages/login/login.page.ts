import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { error } from 'protractor';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  verificationId: any;
  code: string = "";

  private loginFormTwo = new FormGroup({
    otp: new FormControl()
  })
  private loginFormOne = new FormGroup({
    mobileNo: new FormControl(),

  })
  private otpReceived: boolean = false;
  constructor(
    public formBuilder: FormBuilder,
    private router: Router
  ) {
    this.loginFormOne = this.formBuilder.group({
      mobileNo: ['', Validators.required]
    })
    this.loginFormTwo = this.formBuilder.group({
      otp: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  gotoHomePage() {
    let signInCredential = firebase.auth.PhoneAuthProvider.credential(this.verificationId, this.loginFormTwo.value.otp)
    firebase.auth().signInWithCredential(signInCredential).then((info)=>{
      console.log(info);
    },(error)=>{
      console.error(error)
    })
    this.loginFormOne.reset();
    this.loginFormTwo.reset();
    this.router.navigate(['/home']);
    this.otpReceived = false;
  }

  getOTP() {
    (<any>window).FirebasePlugin.verifyPhoneNumber(this.loginFormOne.value.mobileNo, 40, (credential: any) => {
      alert("SMS Sent Successfully");
      console.log(credential);
      this.verificationId = credential.verificationId
      this.otpReceived = true;
    }, (error) => {
      console.error(error)
    })
    console.log("login form 1 : ", this.verificationId)
  }
}
