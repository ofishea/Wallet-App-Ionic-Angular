import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.page.html',
  styleUrls: ['./preview.page.scss'],
})
export class PreviewPage implements OnInit {

  showAnimation:any = 'rotateanimation'
  sent:boolean = false;
  backdrop:any = ''

  constructor(
    private router: Router,
    private NavCtrl: NavController,
    private modalController: ModalController
  ) { }

  ngOnInit() {
        this.showAnimation = 'rotateanimation';
  }

  onBack() {
    this.NavCtrl.back();
  }
  onSave() {
    this.modalController.dismiss();
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
    this.sent = true;
  }

  goBack()
  {
      this.backdrop = 'animate__animated animate__slow animate__fadeOutUpBig';
      setTimeout(() => {
          this.backdrop = '';
          this.sent = false;
          this.showAnimation = ''
      }, 500);
  }

}
