import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-send-fiat',
  templateUrl: './send-fiat.page.html',
  styleUrls: ['./send-fiat.page.scss'],
})
export class SendFiatPage implements OnInit {

  constructor(
    private router: Router,
    private NavCtrl: NavController,
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  onBack() {
    this.NavCtrl.back();
  }
  onSave() {
    this.modalController.dismiss();
  }
  onSendToBank() {
    this.router.navigate(['wallet/fiat/send-fiat/send-to-bank']);
  }
  onSendToUser() {
    this.router.navigate(['wallet/fiat/send-fiat/send-to-user']);
  }
  onAirtime() {
    this.router.navigate(['wallet/fiat/send-fiat/airtime']);
  }
  onDataBundle() {
    this.router.navigate(['wallet/fiat/send-fiat/data-bundle']);
  }
  onElectricity() {
    this.router.navigate(['wallet/fiat/send-fiat/electricity']);
  }
  onTv() {
    this.router.navigate(['wallet/fiat/send-fiat/tv-subscription']);
  }

}
