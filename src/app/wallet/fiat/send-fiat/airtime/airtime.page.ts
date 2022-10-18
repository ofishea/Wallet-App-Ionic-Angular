import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-airtime',
  templateUrl: './airtime.page.html',
  styleUrls: ['./airtime.page.scss'],
})
export class AirtimePage implements OnInit {

selectnetwork:any = 'mtn'
networks:any;
form: FormGroup;
showAnimation:any = 'rotateanimation'
sent:boolean = false;
backdrop:any = ''

  constructor(
    private router: Router,
    private zone: NgZone,
    private route: ActivatedRoute,
    public formBuilder: FormBuilder,
    private NavCtrl: NavController,
    private modalController: ModalController
  ) { 
        this.showAnimation = 'rotateanimation';
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
      operatorId: ['', Validators.required],
      phone: ['', Validators.required],
      amount: ['', Validators.required]
  });
  }

  selectNetwork(ev)
  {
    this.selectnetwork = ev.detail.value;
    console.log(this.selectnetwork);
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

  onBack() {
    this.NavCtrl.back();
  }

}
