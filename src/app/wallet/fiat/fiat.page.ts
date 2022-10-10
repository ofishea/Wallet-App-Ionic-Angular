import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ModalController, IonRouterOutlet } from '@ionic/angular';
import { first } from 'rxjs/operators';
import { HistoryPage } from '../../modals/history/history.page';

@Component({
  selector: 'app-fiat',
  templateUrl: './fiat.page.html',
  styleUrls: ['./fiat.page.scss'],
})
export class FiatPage implements OnInit {
  
  constructor(
    private navCtrl: NavController,
    private router: Router,
    public routerOutlet: IonRouterOutlet,
    public modalController: ModalController
  ) { }

  ngOnInit() {
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
 
  async historyModal() {
    const modal = await this.modalController.create({
      backdropDismiss:true,
      component: HistoryPage,
      cssClass: 'history-class',
      mode:'ios',
      swipeToClose:true,
      presentingElement: await this.modalController.getTop()
    });
    return await modal.present();
  }

  onBack() {
    this.navCtrl.back();
  }
}
