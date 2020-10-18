import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { AppDataService } from '../services/app-data.service';
//import * as firebase from 'Firebase';
import { AlertController } from '@ionic/angular';
export const snapshotToArray = snapshot => {
  let returnArr = [];
  snapshot.forEach(childSnapshot => {
    let item = childSnapshot.val();
    item.key = childSnapshot.key;
    returnArr.push(item);
  });
  return returnArr;
};
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  infos = [];
//  ref = firebase.database().ref('infos/');
  clientHomeOptionList = [{
    id: "1",
    optionName: "Request Pickup",
  },
  {
    id: "2",
    optionName: "Rate Card",
  },
  {
    id: "3",
    optionName: "Order Status",
  },
  {
    id: "4",
    optionName: "Offers",
  }];
  constructor(
  
    private appData: AppDataService,
    private alertController: AlertController,
    private router: Router) {
    // this.ref.on('value', resp => {
    //   this.infos = [];
    //   this.infos = snapshotToArray(resp);
    // });
  }
  addInfo() {
    this.router.navigate(['/add-info']);
  }
  edit(key) {
    this.router.navigate(['/edit/' + key]);
  }

  async delete(key) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you sure want to delete this info?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('cancel');
          }
        }, {
          text: 'Okay',
          handler: () => {
        //    firebase.database().ref('infos/' + key).remove();
          }
        }
      ]
    });

    await alert.present();
  }



  gotoProfile() {
    this.appData.presentConfirmPopup("Cancel", "Ok", "profile", "")
  }
  logout() {

    this.appData.presentLogoutPopup("", "Are you sure you want to logout?", "No", "Yes", "")
  }
  gotoPage(option) {
    console.log("option: ", option.id)
    switch (option.id) {
      case '4':
        this.appData.presentOffersPopup("", "Currently No Offers!", "Ok", "")
        break;

      case '1':
        this.appData.presentConfirmPopup("Cancel", "Ok", "confirmPopup", "")
        break;

      case '2':
        this.router.navigate(['/rate-card']);
        break;

      case '3':
        this.router.navigate(['/order-status']);
        break;
    }
  }

  ngOnInit() {
  }
}