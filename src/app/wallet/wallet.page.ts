import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AccountService } from '@app/_services';
import { Account } from '@app/_models';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {
  filterTerm: string;
  account: Account;

  constructor(
    private accountService: AccountService,
    private navCtrl: NavController,
    private router: Router
  ) { 
    this.accountService.account.subscribe(x => this.account = x);
  }

  ngOnInit() {
  }



  onBack() {
    this.navCtrl.back();
  }
}
