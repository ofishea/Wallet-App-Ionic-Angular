import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { IonicModule } from '@ionic/angular';

import { BuyPageRoutingModule } from './buy-routing.module';

import { BuyPage } from './buy.page';
import { BuyPreviewPage } from './buy-preview/buy-preview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuyPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [
    BuyPage,
    BuyPreviewPage
  ]
})
export class BuyPageModule {}
