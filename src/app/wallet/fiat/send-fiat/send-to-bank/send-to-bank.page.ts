import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-send-to-bank',
  templateUrl: './send-to-bank.page.html',
  styleUrls: ['./send-to-bank.page.scss'],
})
export class SendToBankPage implements OnInit {

selectbank:any = 'gtb'
banks:any;
showAnimation:any = 'rotateanimation'
senttoBank:boolean = false;
backdrop:any = ''
sendtoBank: FormGroup;
currentUser: any;
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
      this.sendtoBank = this.formBuilder.group({
        bname: [''],
        accnum: [''],
        accname: [''],
        amount: ['']
      })
  }

  ngOnInit() {
    this.banks = [
      {
        "id": 1,
        "name": "Guaranty Trust Bank",
        "slug": "GTB",
        icon: "assets/banks/gtb.png",
        value:"gtb",
        status:'gtb'
      },

      {
        "id": 2,
        "name": "United Bank of Africa",
        "slug": "UBA",
        icon: "assets/banks/uba.png",
        value:"uba"
      },

      {
        "id": 3,
        "name": "First Bank of Nigeria",
        "slug": "FBN",
        icon: "assets/banks/fbn.png",
        value:"xrp"
      },
      {
        "id": 4,
        "name": "Zenith Bank",
        "slug": "ZNB",
        icon: "assets/banks/znb.png",
        value:"znb"
      },

      {
        "id": 5,
        "name": "Access Bank",
        "slug": "ACCESS",
        icon: "assets/banks/access.png",
        value:"access"
      }
    ];
  }


  showSuccess()
  {
    this.senttoBank = true;
  }

  goBack()
  {
      this.backdrop = 'animate__animated animate__slow animate__fadeOutUpBig';
      setTimeout(() => {
          this.backdrop = '';
          this.senttoBank = false;
          this.showAnimation = ''
      }, 500);
  }

  selectBank(ev)
  {
    this.selectbank = ev.detail.value;
    console.log(this.selectbank);
  }

  onBack() {
    this.NavCtrl.back();
  }
  onDone() {
    this.modalController.dismiss(['bank-accounts']);
  }

}
