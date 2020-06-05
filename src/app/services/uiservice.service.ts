import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UIServiceService {

  constructor(private alertCtrl: AlertController,
              private toastCtrl: ToastController) { }

  async alertaInformacion( message: string) {
    const alert = await this.alertCtrl.create({
      message,
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 1500,
      position: 'top'
    });
    toast.present();
  }

  async alertaPesoIdeal( woman: string, man: string) {
    const alert = await this.alertCtrl.create({
      header: 'Ideal Weight',
      message: `For woman: ${woman}kgs, for man: ${man}kgs`,
      buttons: ['OK']
    });

    await alert.present();
  }

  
}
