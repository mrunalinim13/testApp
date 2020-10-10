import { Component, OnInit } from '@angular/core';
import * as firebase from 'Firebase';
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
  selector: 'app-rate-card',
  templateUrl: './rate-card.page.html',
  styleUrls: ['./rate-card.page.scss'],
})
export class RateCardPage implements OnInit {
  rateCardDetails: any[];
  ref = firebase.database().ref('rateCardData/');
  rateCardData = [{
    id: 1,
    name: "Shirt",
    laundaryPrice: 50,
    steamIron: 10
  },
  {
    id: 2,
    name: "Pant",
    laundaryPrice: 50,
    steamIron: 15
  },
  {
    id: 3,
    name: "Jeans",
    laundaryPrice: 60,
    steamIron: 15
  }]
  constructor() {
    this.ref.on('value', resp => {
      this.rateCardDetails = snapshotToArray(resp);
    });
    console.log("rate card data : ", this.rateCardDetails)
  }

  ngOnInit() {
  }

}
