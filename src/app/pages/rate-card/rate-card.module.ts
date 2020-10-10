import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RateCardPageRoutingModule } from './rate-card-routing.module';

import { RateCardPage } from './rate-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RateCardPageRoutingModule
  ],
  declarations: [RateCardPage]
})
export class RateCardPageModule {}
