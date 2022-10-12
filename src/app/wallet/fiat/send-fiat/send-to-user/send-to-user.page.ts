import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-send-to-user',
  templateUrl: './send-to-user.page.html',
  styleUrls: ['./send-to-user.page.scss'],
})
export class SendToUserPage implements OnInit {

form: FormGroup;
showAnimation:any = 'rotateanimation'
senttoUser:boolean = false;
backdrop:any = ''

  constructor(
    private router: Router,
    private accountService: AccountService,
    private walletService: WalletService,
    private alertService: AlertService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private NavCtrl: NavController,
    private modalController: ModalController
  ) { 
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
        this.showAnimation = 'rotateanimation';
    
    this.form = this.formBuilder.group({
        toUsername: ['', Validators.required],
        amount: ['', Validators.required],
        summary: ['']
    });
}

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
