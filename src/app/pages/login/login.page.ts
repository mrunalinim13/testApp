import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

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
    this.loginFormOne.reset();
    this.loginFormTwo.reset();
    this.router.navigate(['/home']);
    this.otpReceived = false;
  }

  getOTP() {
    this.otpReceived = true;
  }
}
