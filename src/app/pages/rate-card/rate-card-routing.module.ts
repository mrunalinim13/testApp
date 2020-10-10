import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RateCardPage } from './rate-card.page';

const routes: Routes = [
  {
    path: '',
    component: RateCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RateCardPageRoutingModule {}
