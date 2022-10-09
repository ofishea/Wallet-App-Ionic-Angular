import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-convertmodal',
  templateUrl: './convertmodal.page.html',
  styleUrls: ['./convertmodal.page.scss'],
})
export class ConvertmodalPage implements OnInit {

  filterTerm: string;
  fromCurrency:any='btc';
  toCurrency:any='eth';
  currencies:any;
  fromImg:any;
  toImg:any;


method:any = 'from';

  constructor(private modalCtrl: ModalController) { }


  ngOnInit() {
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

    console.log('from currency is'+this.fromCurrency);
    console.log('to currency is'+this.toCurrency);
  }


  segmentChanged(ev)
  {
    this.method = ev.detail.value;
    console.log(this.method);
  }



  setFromCurency(ev)
  {
    this.fromCurrency = ev.detail.value;
    console.log('from currency is'+this.fromCurrency);
  }

  setToCurency(ev)
  {
    this.toCurrency = ev.detail.value;
    console.log('to currency is'+this.toCurrency);
  }

  close()
  {
    let data = {fromcurrency:this.fromCurrency,tocurrency:this.toCurrency}
    this.modalCtrl.dismiss(data);
  }



}
