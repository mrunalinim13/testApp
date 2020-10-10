import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomPopupPageRoutingModule } from './custom-popup-routing.module';

import { CustomPopupPage } from './custom-popup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CustomPopupPageRoutingModule
  ],
  declarations: [CustomPopupPage]
})
export class CustomPopupPageModule { }
