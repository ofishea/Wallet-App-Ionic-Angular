import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, NavController } from '@ionic/angular';
import { first } from 'rxjs/operators';

import { AccountService, WalletService, AlertService } from '@app/_services';

@Component({
  selector: 'app-data-bundle',
  templateUrl: './data-bundle.page.html',
  styleUrls: ['./data-bundle.page.scss'],
})
export class DataBundlePage implements OnInit {

selectnetwork:any = 'mtn'
account = this.accountService.accountValue;
wallet = this.walletService.walletValue;
networks:any;
form: FormGroup;
loading = false;
submitted = false;

  constructor(
    private router: Router,
    private zone: NgZone,
    private accountService: AccountService,
    private walletService: WalletService,
    private alertService: AlertService,
    private route: ActivatedRoute,
    public formBuilder: FormBuilder,
    private NavCtrl: NavController,
    private modalController: ModalController
  ) { 
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    this.networks = [
      {
        "id": 1,
        "name": "MTN",
        "slug": "MTN",
        icon: "assets/banks/gtb.png",
        value:"341",
        status:'mtn'
      },

      {
        "id": 2,
        "name": "Airtel",
        "slug": "AIRTEL",
        icon: "assets/banks/uba.png",
        value:"342"
      },

      {
        "id": 3,
        "name": "Glo",
        "slug": "GLO",
        icon: "assets/banks/fbn.png",
        value:"344"
      },
      {
        "id": 4,
        "name": "9Mobile",
        "slug": "9MOBILE",
        icon: "assets/banks/znb.png",
        value:"340"
      }
    ];


    this.form = this.formBuilder.group({
      fromUsername: [this.account.userName],
      operatorId: ['', Validators.required],
      phone: ['', Validators.required],
      amount: ['', Validators.required]
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
     this.walletService.airtime(this.form.value)
         .pipe(first())
         .subscribe({
             next: () => {
              this.alertService.success('Airtime has been sent successfully', { keepAfterRouteChange: true });
              this.router.navigate(['../../'], { relativeTo: this.route });
             },
             error: error => {
                 this.alertService.error(error);
                 this.loading = false;
             }
         });
 }

  selectNetwork(ev)
  {
    this.selectnetwork = ev.detail.value;
    console.log(this.selectnetwork);
  }

  onBack() {
    this.NavCtrl.back();
  }
  onDone() {
    this.modalController.dismiss(['bank-accounts']);
  }

}
