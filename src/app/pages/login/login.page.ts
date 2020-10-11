import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { error } from 'protractor';
import { FirebaseAuthentication } from "@ionic-native/firebase-authentication/ngx";
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
    private router: Router,
    public firebaseAuthentication: FirebaseAuthentication
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
    // let signInCredential = firebase.auth.PhoneAuthProvider.credential(this.verificationId, this.loginFormTwo.value.otp)
    // firebase.auth().signInWithCredential(signInCredential).then((info) => {
    //   console.log(info);
    // }, (error) => {
    //   console.error(error)
    // })
    this.firebaseAuthentication.signInWithVerificationId(this.verificationId, "123456").then((user) => {
      console.log(user)
    })
    this.loginFormOne.reset();
    this.loginFormTwo.reset();
    this.router.navigate(['/home']);
    this.otpReceived = false;
  }

  getOTP() {
    this.firebaseAuthentication.verifyPhoneNumber("+91" + this.loginFormOne.value.mobileNo, 30000).then((verificationId) => {
      console.log("verificationId : ", verificationId);
      this.verificationId = verificationId
    }).catch((error) => {

    })
  }
}
