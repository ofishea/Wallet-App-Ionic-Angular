import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, NavController } from '@ionic/angular';
import { first } from 'rxjs/operators';

import { AccountService, WalletService, AlertService } from '@app/_services';

@Component({
  selector: 'app-send-to-user',
  templateUrl: './send-to-user.page.html',
  styleUrls: ['./send-to-user.page.scss'],
})
export class SendToUserPage implements OnInit {

account = this.accountService.accountValue;
wallet = this.walletService.walletValue;
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

 // convenience getter for easy access to form fields
 get f() { return this.form.controls; }

 onSubmit() {
     this.submitted = true;

       // reset alerts on submit
       this.alertService.clear();

     // stop here if form is invalid
     if (this.form.invalid) {
         return;
     } 

     this.loading = true;
     this.walletService.transfer(this.form.value)
         .pipe(first())
         .subscribe({
             next: () => {
              this.alertService.success('Funds has been sent successfully', { keepAfterRouteChange: true });
              this.router.navigate(['../../'], { relativeTo: this.route });
             },
             error: error => {
                 this.alertService.error(error);
                 this.loading = false;
             }
         });
 }

  onBack() {
    this.NavCtrl.back();
  }
  onDone() {
    this.modalController.dismiss(['fiat']);
  }

}
