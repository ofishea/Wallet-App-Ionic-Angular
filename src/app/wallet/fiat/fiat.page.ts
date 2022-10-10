import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ModalController, IonRouterOutlet } from '@ionic/angular';
import { AccountService, WalletService } from '@app/_services';
import { Account, Wallet } from '@app/_models';
import { first } from 'rxjs/operators';
import { HistoryPage } from '../../modals/history/history.page';

@Component({
  selector: 'app-fiat',
  templateUrl: './fiat.page.html',
  styleUrls: ['./fiat.page.scss'],
})
export class FiatPage implements OnInit {

  account: Account;
  wallet: Wallet[];
  
  constructor(
    private accountService: AccountService,
    private walletService: WalletService,
    private navCtrl: NavController,
    private router: Router,
    public routerOutlet: IonRouterOutlet,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    this.accountService.account.subscribe(x => this.account = x);
    this.walletService.getById('uid')
    .pipe(first())
    .subscribe(wallet => this.wallet = wallet);
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
 
  async historyModal(uid: string) {
    const modal = await this.modalController.create({
      backdropDismiss:true,
      component: HistoryPage,
      componentProps: {
         uid: uid,
      },
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
