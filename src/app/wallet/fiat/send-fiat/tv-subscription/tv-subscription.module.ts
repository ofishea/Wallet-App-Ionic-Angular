import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TvSubscriptionPageRoutingModule } from './tv-subscription-routing.module';

import { TvSubscriptionPage } from './tv-subscription.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TvSubscriptionPageRoutingModule
  ],
  declarations: [TvSubscriptionPage]
})
export class TvSubscriptionPageModule {}
