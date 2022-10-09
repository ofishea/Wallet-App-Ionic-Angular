import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ModalController,NavParams } from '@ionic/angular';
import { IonRouterOutlet } from '@ionic/angular';
import { HistorymodalPage } from '../crypto-details/historymodal/historymodal.page';

@Component({
  selector: 'app-crypto-details',
  templateUrl: './crypto-details.page.html',
  styleUrls: ['./crypto-details.page.scss'],
})
export class CryptoDetailsPage implements OnInit {
sent: 'send';
received: 'receive';
swapped: 'swap';
histories:any;
showAnimation:any = 'rotateanimation'

  constructor(
    private navCtrl: NavController,
    private router: Router,
    public routerOutlet: IonRouterOutlet,
    public modalController: ModalController,
  private navParams: NavParams
  ) { }

  ngOnInit() {
      this.sent = 'send';
      this.received = 'receive';
      this.swapped = 'swap';

          this.showAnimation = 'rotateanimation';
          this.histories = [
            {
              "id": 1,
              "name": "Sent Bitcoin",
              "slug": "send",
              "to": "13qPsUSJjw4dp1zv8MkrWiZvgqtbrTVYmr",
              "from": "13qPsUSJjw4dp1zv8MkrWiZvgqtbrTVYmr",
              "amount": "0.00382",
              "amountngn": "NGN 33,471.75",
              "date": "May 02 22",
              "time": "4:32 PM",
              "fees": "0.00002",
              "hash": "386882cbd15944dbae436a92940e56f2c502d4584ab91c211da854818949f930"
            },
            {
              "id": 2,
              "name": "Bitcoin Received",
              "slug": "receive",
              "to": "13qPsUSJjw4dp1zv8MkrWiZvgqtbrTVYmr",
              "from": "13qPsUSJjw4dp1zv8MkrWiZvgqtbrTVYmr",
              "amount": "0.022",
              "amountngn": "NGN 22,771.45",
              "date": "May 02 22",
              "time": "4:32 PM",
              "fees": "0.00002",
              "hash": "386882cbd15944dbae436a92940e56f2c502d4584ab91c211da854818949f930"
            },
            {
              "id": 3,
              "name": "Bitcoin Swap",
              "slug": "swap",
              "to": "Ethereum",
              "from": "Bitcoin",
              "amount": "0.00382",
              "amountngn": "NGN 33,471.75",
              "date": "May 02 22",
              "time": "4:32 PM",
              "fees": "0",
              "hash": "0.182"
            },
          ]
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

    async presentModal() {
      const modal = await this.modalController.create({
        component: HistorymodalPage,
        cssClass: 'my-custom-class',
        mode:'ios',
        swipeToClose:true,
        presentingElement: await this.modalController.getTop()
      });

      return await modal.present();
    }

  onBack() {
    this.navCtrl.back();
  }
  onBuy() {
    this.router.navigate(['wallet/buy']);
  }
  onTrade() {
    this.router.navigate(['wallet/trade']);
  }
  onConvert() {
    this.router.navigate(['wallet/convert']);
  }
  onSend() {
    this.router.navigate(['wallet/send']);
  }
  onReceive() {
    this.router.navigate(['wallet/receive']);
  }
}
