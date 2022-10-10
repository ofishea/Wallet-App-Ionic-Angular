import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { AccountService, P2pService } from '../../_services';
import { Account, P2p } from '@app/_models';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-p2pmod',
  templateUrl: './p2pmod.page.html',
  styleUrls: ['./p2pmod.page.scss'],
})
export class P2pmodPage implements OnInit {

  uid: string;
  account: Account;
  p2pTrade: P2p[];

  constructor(
    private route: ActivatedRoute,
    private accountService: AccountService,
    private p2pService: P2pService,
    private router: Router,
    private modalController: ModalController,
    private navParams: NavParams,
    private navCtrl: NavController
  ) { }
 
  ngOnInit() {
    this.uid = this.navParams.get('uid');

    this.accountService.account.subscribe(x => this.account = x);
    this.p2pService.getById(this.uid)
    .pipe(first())
    .subscribe(uid => this.p2pTrade = uid);
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }


}
