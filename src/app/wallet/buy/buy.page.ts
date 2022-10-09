import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.page.html',
  styleUrls: ['./buy.page.scss'],
})
export class BuyPage implements OnInit {

  filterTerm: string;
  selectCrypto:any='BTC';
  cryptos:any;
  cryptoImg:any;

  constructor(
    private navCtrl: NavController,
    private router: Router
  ) { }

  ngOnInit() {
    this.cryptos = [
      {
        "id": 1,
        "name": "Bitcoin",
        icon: "assets/crypto-icons/btc.svg",
        value:"BTC",
        status:'btc'
      },

      {
        "id": 2,
        "name": "Ethereum",
        icon: "assets/crypto-icons/eth.svg",
        value:"ETH"
      },

      {
        "id": 3,
        "name": "Ripple",
        icon: "assets/crypto-icons/xrp.svg",
        value:"XRP"
      },
      {
        "id": 4,
        "name": "Litecoin",
        icon: "assets/crypto-icons/ltc.svg",
        value:"LTC"
      },

      {
        "id": 5,
        "name": "Tether USD",
        icon: "assets/crypto-icons/usdt.svg",
        value:"USDT"
      }
    ]

  }


  setCrypto(ev)
  {
    this.selectCrypto = ev.detail.value;
    console.log('from crypto is'+this.selectCrypto);
  }
  onBuyPreview() {
    this.router.navigate(['wallet/buy/buy-preview']);
  }
    onBack() {
      this.navCtrl.back();
    }
}
