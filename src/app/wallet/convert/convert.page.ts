import { Component, OnInit } from '@angular/core';
import { ModalController,NavParams } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ConvertmodalPage } from './convertmodal/convertmodal.page';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.page.html',
  styleUrls: ['./convert.page.scss'],
})
export class ConvertPage implements OnInit {
fromCurrency:any;
toCurrency:any;
currencies:any;
showAnimation:any = 'rotateanimation'
converted:boolean = false;
backdrop:any = ''
  constructor(
    private modalController: ModalController,
      private navCtrl: NavController,
      private router: Router,
    private navParams: NavParams
   ) { }

  ngOnInit() {
      this.fromCurrency = 'btc';
      this.toCurrency = 'eth';

      this.showAnimation = 'rotateanimation';
      this.currencies = [
        {
          "id": 1,
          "name": "Bitcoin",
          icon: "assets/crypto-icons/btc.svg",
          value:"btc",
          status:'btc'
        },

        {
          "id": 2,
          "name": "Ethereum",
          icon: "assets/crypto-icons/eth.svg",
          value:"eth"
        },

        {
          "id": 3,
          "name": "Ripple",
          icon: "assets/crypto-icons/xrp.svg",
          value:"xrp"
        },
        {
          "id": 4,
          "name": "Litecoin",
          icon: "assets/crypto-icons/ltc.svg",
          value:"ltc"
        },

        {
          "id": 5,
          "name": "Tether USD",
          icon: "assets/crypto-icons/usdt.svg",
          value:"usdt"
        }
      ]
  }


  async presentModal() {
    const modal = await this.modalController.create({
      component: ConvertmodalPage,
      cssClass: 'my-custom-class',
      mode:'ios',
      swipeToClose:true,
      presentingElement: await this.modalController.getTop()
    });

    modal.onDidDismiss()
    .then((data:any) => {
      console.log(data.data.fromcurrency);
      this.fromCurrency = data.data.fromcurrency;
      this.toCurrency = data.data.tocurrency;
  });

    return await modal.present();
  }

  convert()
  {

    this.showAnimation = 'rotateanimationinfinite'

    setTimeout(() => {
      this.showAnimation = 'rotateanimation'
      this.showSuccess();
    }, 3000);

  }

  showSuccess()
  {
    this.converted = true;
  }

  goBack()
  {
      this.backdrop = 'animate__animated animate__slow animate__fadeOutUpBig';
      setTimeout(() => {
          this.backdrop = '';
          this.converted = false;
          this.showAnimation = ''
      }, 500);
  }
    onBack() {
      this.navCtrl.back();
    }
}
