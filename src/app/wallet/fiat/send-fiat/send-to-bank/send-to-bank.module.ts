import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendToBankPageRoutingModule } from './send-to-bank-routing.module';

import { SendToBankPage } from './send-to-bank.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SendToBankPageRoutingModule
  ],
  declarations: [SendToBankPage]
})
export class SendToBankPageModule {}
