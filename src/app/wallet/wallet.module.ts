import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletPageRoutingModule } from './wallet-routing.module';

import { WalletPage } from './wallet.page';
import { SendPage } from './send/send.page';
import { ReceivePage } from './receive/receive.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletPageRoutingModule
  ],
  declarations: [
    WalletPage,
    SendPage,
    ReceivePage
  ]
})
export class WalletPageModule {}
