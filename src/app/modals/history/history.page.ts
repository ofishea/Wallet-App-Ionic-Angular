import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { AccountService, WalletService } from '../../_services';
import { Account, Wallet } from '@app/_models';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  bitcoinhandler:any = 'animate__animated animate__bounceInDown animate__slow';

  constructor(
    private route: ActivatedRoute,
    private accountService: AccountService,
    private walletService: WalletService,
    private router: Router,
    private modalController: ModalController,
    private navParams: NavParams,
    private navCtrl: NavController
  ) { }
 
  ngOnInit() {
    this.setanimation();
  }


  setanimation()
  {
    let timeout =setTimeout(() => {
      this.bitcoinhandler = "animate__animated animate__flip ";
      clearTimeout(timeout);
      this.setanimation2()
    }, 3000);


  }


  setanimation2()
  {
    setTimeout(() => {
      this.bitcoinhandler = "floatanimation1";
    }, 2000);
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }


}
