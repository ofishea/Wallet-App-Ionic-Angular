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
loading = false;
submitted = false;

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
    this.form = this.formBuilder.group({
        fromUsername: [this.account.userName],
        toUsername: ['', Validators.required],
        amount: ['', Validators.required],
        summary: ['']
    });
}

 }

  onBack() {
    this.NavCtrl.back();
  }
  onDone() {
    this.modalController.dismiss(['fiat']);
  }

}
