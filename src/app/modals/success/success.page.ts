import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-success',
  templateUrl: './success.page.html',
  styleUrls: ['./success.page.scss'],
})
export class SuccessPage implements OnInit {
  bitcoinhandler:any = 'animate__animated animate__bounceInDown animate__slow';
  constructor(
    private modalController: ModalController,
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
