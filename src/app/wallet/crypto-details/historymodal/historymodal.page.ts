import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-historymodal',
  templateUrl: './historymodal.page.html',
  styleUrls: ['./historymodal.page.scss'],
})
export class HistorymodalPage implements OnInit {

  sent: 'send';
  received: 'receive';
  swapped: 'swap';
  histories:any;

  constructor(private modalCtrl: ModalController) { }


  ngOnInit() {
      this.sent = 'send';
      this.received = 'receive';
      this.swapped = 'swap';
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
              "amount": "0.00382",
              "amountngn": "NGN 33,471.75",
              "date": "May 02 22",
              "time": "4:32 PM",
              "fees": "0",
              "hash": "386882cbd15944dbae436a92940e56f2c502d4584ab91c211da854818949f930"
            },
            {
              "id": 3,
              "name": "Bitcoin Swap",
              "slug": "swap",
              "to": "Ethereum",
              "from": "Bitcoin",
              "amountfrom": "0.00382",
              "amountto": "0.182",
              "amountngn": "NGN 33,471.75",
              "date": "May 02 22",
              "time": "4:32 PM",
              "fees": "0"
            },
          ]
  }


    dismiss() {
      // using the injected ModalController this page
      // can "dismiss" itself and optionally pass back data
      this.modalCtrl.dismiss({
        'dismissed': true
      });
    }



}
