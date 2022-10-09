import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-electricity',
  templateUrl: './electricity.page.html',
  styleUrls: ['./electricity.page.scss'],
})
export class ElectricityPage implements OnInit {

selectdisco:any = 'ekedc'
discos:any;
showAnimation:any = 'rotateanimation'
senttoMeter:boolean = false;
backdrop:any = ''
sendtoMeter: FormGroup;
currentUser: any;
  isLoggedIn = false;
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
      this.sendtoMeter = this.formBuilder.group({
        metern: [''],
        disco: [''],
        amount: ['']
      })
  }

  ngOnInit() {
    this.discos = [
      {
        "id": 1,
        "name": "Eko Electric",
        "slug": "EKEDC",
        icon: "assets/banks/gtb.png",
        value:"ekedc",
        status:'ekedc'
      },

      {
        "id": 2,
        "name": "Ikeja Electric",
        "slug": "IKEDC",
        icon: "assets/banks/uba.png",
        value:"ikedc"
      },

      {
        "id": 3,
        "name": "Ibadan Electric",
        "slug": "IBEDC",
        icon: "assets/banks/fbn.png",
        value:"ibedc"
      },
      {
        "id": 4,
        "name": "Abuja Electric",
        "slug": "ABEDC",
        icon: "assets/banks/znb.png",
        value:"abedc"
      }
    ];
  }

  showSuccess()
  {
    this.senttoMeter = true;
  }

  goBack()
  {
      this.backdrop = 'animate__animated animate__slow animate__fadeOutUpBig';
      setTimeout(() => {
          this.backdrop = '';
          this.senttoMeter = false;
          this.showAnimation = ''
      }, 500);
  }

  selectDisco(ev)
  {
    this.selectdisco = ev.detail.value;
    console.log(this.selectdisco);
  }

  onBack() {
    this.NavCtrl.back();
  }
  onDone() {
    this.modalController.dismiss(['bank-accounts']);
  }

}
