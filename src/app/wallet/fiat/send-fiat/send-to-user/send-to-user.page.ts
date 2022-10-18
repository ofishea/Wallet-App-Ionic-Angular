import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder } from '@angular/forms';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-send-to-user',
  templateUrl: './send-to-user.page.html',
  styleUrls: ['./send-to-user.page.scss'],
})
export class SendToUserPage implements OnInit {

showAnimation:any = 'rotateanimation'
senttoUser:boolean = false;
backdrop:any = ''

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private NavCtrl: NavController,
    private modalController: ModalController
  ) { }

  ngOnInit() {
        this.showAnimation = 'rotateanimation';
}


  send()
  {

    this.showAnimation = 'rotateanimationinfinite'

    setTimeout(() => {
      this.showAnimation = 'rotateanimation'
      this.showSuccess();
    }, 3000);

  }

  showSuccess()
  {
    this.senttoUser = true;
  }

  goBack()
  {
      this.backdrop = 'animate__animated animate__slow animate__fadeOutUpBig';
      setTimeout(() => {
          this.backdrop = '';
          this.senttoUser = false;
          this.showAnimation = ''
      }, 500);
  }

  onBack() {
    this.NavCtrl.back();
  }
  onDone() {
    this.modalController.dismiss(['fiat']);
  }

}
