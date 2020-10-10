import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomPopupPage } from './custom-popup.page';

const routes: Routes = [
  {
    path: '',
    component: CustomPopupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomPopupPageRoutingModule {}
