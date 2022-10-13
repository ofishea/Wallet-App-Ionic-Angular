import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController, NavController, NavParams } from '@ionic/angular';
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
    private router: Router,
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
