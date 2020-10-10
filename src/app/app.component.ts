import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase';
const config = {
  apiKey: "AIzaSyCxtigT7OFvobvkJ1sG9BuGx5tET5F_kRs",
  authDomain: "otpauth-e574e.firebaseapp.com",
  databaseURL: "https://otpauth-e574e.firebaseio.com",
  projectId: "otpauth-e574e",
  storageBucket: "otpauth-e574e.appspot.com",
  messagingSenderId: "648918167989",
  appId: "1:648918167989:web:f00f346b81847021db69fc"
}
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}
