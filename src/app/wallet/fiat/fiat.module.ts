import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiatPageRoutingModule } from './fiat-routing.module';

import { FiatPage } from './fiat.page';
import { ReceiveFiatPage } from './receive-fiat/receive-fiat.page';
import { HistoryPage } from '../../modals/history/history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiatPageRoutingModule
  ],
  declarations: [
    FiatPage,
    ReceiveFiatPage,
    HistoryPage
  ]
})
export class FiatPageModule {}
