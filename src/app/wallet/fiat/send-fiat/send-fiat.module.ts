import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendFiatPageRoutingModule } from './send-fiat-routing.module';

import { SendFiatPage } from './send-fiat.page';
import { SendToUserPage } from './send-to-user/send-to-user.page';
import { AirtimePage } from './airtime/airtime.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendFiatPageRoutingModule
  ],
  declarations: [
    SendFiatPage,
    SendToUserPage,
    AirtimePage
  ]
})
export class SendFiatPageModule {}
