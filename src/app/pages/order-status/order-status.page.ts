import { Component, OnInit } from '@angular/core';
//import * as firebase from 'Firebase';
import { ActivatedRoute, Router } from '@angular/router';
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
  selector: 'app-order-status',
  templateUrl: './order-status.page.html',
  styleUrls: ['./order-status.page.scss'],
})
export class OrderStatusPage implements OnInit {
//  ref = firebase.database().ref('orders/');
  info = {};
  orderDetails = []
  constructor(
    private route: ActivatedRoute,
    public router: Router
  ) { 
    // this.ref.on('value', resp => {
    //   this.orderDetails = [];
    //   this.orderDetails = snapshotToArray(resp);
    //   console.log("data of order  : ", this.orderDetails)
    // });
    
  }

  ngOnInit() {
  }

}
