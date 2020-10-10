import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CustomPopupPage } from "../pages/custom-popup/custom-popup.page";
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  constructor(public modalController: ModalController) { }

  async presentOffersPopup(imgPath,
    message,
    buttonText,
    action) {

    const modal = await this.modalController.create({
      component: CustomPopupPage,
      componentProps: {
        imgPath: imgPath,
        alertMessage: message,
        alertButtonText: buttonText,
        popupName: "alert",
        action: action
      }
    });
    return await modal.present();
  }

  async presentLogoutPopup(imgPath,
    message,
    buttonText1,
    buttonText2,
    action) {

    const modal = await this.modalController.create({
      component: CustomPopupPage,
      componentProps: {
        imgPath: imgPath,
        alertMessage: message,
        alertButtonText1: buttonText1,
        alertButtonText2: buttonText2,
        popupName: "confirmLogout",
        action: action
      }
    });
    return await modal.present();
  }
  async presentConfirmPopup(
    buttonText1, buttonText2, popupName,
    action) {

    const modal = await this.modalController.create({
      component: CustomPopupPage,
      componentProps: {
        alertButtonText1: buttonText1,
        alertButtonText2: buttonText2,
        popupName: popupName,
        action: action
      }
    });
    return await modal.present();
  }
}
