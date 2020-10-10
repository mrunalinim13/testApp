import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { from } from 'rxjs';
import * as firebase from 'Firebase';
import { Router } from '@angular/router';
@Component({
  selector: 'app-custom-popup',
  templateUrl: './custom-popup.page.html',
  styleUrls: ['./custom-popup.page.scss'],
})
export class CustomPopupPage implements OnInit {
  ref = firebase.database().ref('orders/');
  @Input() imgPath: string;
  @Input() alertMessage: string;
  @Input() alertButtonText: string;
  @Input() alertButtonText1: string;
  @Input() alertButtonText2: string;
  @Input() popupName: string;
  @Input() action: string;
  private minDate: any;

  private requestForm = new FormGroup({
    time: new FormControl(),
    date: new FormControl(),
    qty: new FormControl(),
    type: new FormControl(),
    requestDate: new FormControl(),
    orderStatus: new FormControl(),
    totalBill: new FormControl(),
  })
  private profileForm = new FormGroup({
    name: new FormControl(),
    mobileNo: new FormControl(),
    address: new FormControl(),
    pin: new FormControl(),
  })
  constructor(public modalController: ModalController,
    private router: Router,
    public formBuilder: FormBuilder) {
    let date = new Date()
    let date1= new Date(date).toISOString()
    this.requestForm = this.formBuilder.group({
      time: ['', Validators.required],
      date: ['', Validators.required],
      qty: ['', Validators.required],
      type: ['', Validators.required],
      requestDate: [date1],
      orderStatus: ['Pending'],
      totalBill: ['0'],
    })
    this.profileForm = this.formBuilder.group({
      name: ['', Validators.required],
      mobileNo: ['', Validators.required],
      address: ['', Validators.required],
      pin: ['', Validators.required],
    })

    let newDate = new Date(new Date());
    this.minDate = new Date(newDate.setDate(newDate.getDate() + 1)).toISOString()
  }
  cancelClicked() {
    switch (this.action) {
      case "":
        this.modalController.dismiss({
          'dismissed': true
        })
        break;

      default:
        this.modalController.dismiss({
          'dismissed': true
        })
        break;
    }
  }
  ngOnInit() {
  }
  okClicked() {
    this.router.navigate(['/login']);
    this.modalController.dismiss({
      'dismissed': true
    })
  }
  saveInfo() {
    console.log("request form data : ", this.requestForm)
    let newInfo = firebase.database().ref('orders/').push();
    newInfo.set(this.requestForm.value);
    this.modalController.dismiss({
      'dismissed': true
    })
    this.router.navigate(['/order-status']);
  }
}
