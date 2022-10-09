import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tv-subscription',
  templateUrl: './tv-subscription.page.html',
  styleUrls: ['./tv-subscription.page.scss'],
})
export class TvSubscriptionPage implements OnInit {

selecttv:any = 'dstv'
tvs:any;
showAnimation:any = 'rotateanimation'
senttoDecoder:boolean = false;
backdrop:any = ''
sendtoDecoder: FormGroup;
  username?: string;
current = 1;

  constructor(
    private router: Router,
    private zone: NgZone,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private NavCtrl: NavController,
    private modalController: ModalController
  ) {
      this.sendtoDecoder = this.formBuilder.group({
        decodern: [''],
        tv: [''],
        amount: ['']
      })
  }

  ngOnInit() {
    this.tvs = [
      {
        "id": 1,
        "name": "DSTV",
        "slug": "DSTV",
        icon: "assets/banks/gtb.png",
        value:"dstv",
        status:'dstv'
      },

      {
        "id": 2,
        "name": "GOTV",
        "slug": "GOTV",
        icon: "assets/banks/uba.png",
        value:"gotv"
      },

      {
        "id": 3,
        "name": "TSTV",
        "slug": "TSTV",
        icon: "assets/banks/fbn.png",
        value:"tstv"
      },
      {
        "id": 4,
        "name": "Startimes",
        "slug": "STARTIMES",
        icon: "assets/banks/znb.png",
        value:"startimes"
      }
    ];
  }


  showSuccess()
  {
    this.senttoDecoder = true;
  }

  goBack()
  {
      this.backdrop = 'animate__animated animate__slow animate__fadeOutUpBig';
      setTimeout(() => {
          this.backdrop = '';
          this.senttoDecoder = false;
          this.showAnimation = ''
      }, 500);
  }

  selectDisco(ev)
  {
    this.selecttv = ev.detail.value;
    console.log(this.selecttv);
  }

  onBack() {
    this.NavCtrl.back();
  }
  onDone() {
    this.modalController.dismiss(['bank-accounts']);
  }

}
