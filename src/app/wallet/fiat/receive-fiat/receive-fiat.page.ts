import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-receive-fiat',
  templateUrl: './receive-fiat.page.html',
  styleUrls: ['./receive-fiat.page.scss'],
})
export class ReceiveFiatPage implements OnInit {

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

}
