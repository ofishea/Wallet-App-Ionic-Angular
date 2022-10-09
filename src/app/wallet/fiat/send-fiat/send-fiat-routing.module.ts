import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendFiatPage } from './send-fiat.page';

import { AirtimePage } from './airtime/airtime.page';
import { DataBundlePage } from './data-bundle/data-bundle.page';
import { ElectricityPage } from './electricity/electricity.page';
import { SendToBankPage } from './send-to-bank/send-to-bank.page';
import { SendToUserPage } from './send-to-user/send-to-user.page';
import { TvSubscriptionPage } from './tv-subscription/tv-subscription.page';

const routes: Routes = [
  { path: '', component: SendFiatPage},
  { path: 'airtime', component: AirtimePage },
  { path: 'data-bundle', component: DataBundlePage },
  { path: 'electricity', component: ElectricityPage },
  { path: 'send-to-bank', component: SendToBankPage },
  { path: 'send-to-user', component: SendToUserPage },
  { path: 'tv-subscription', component: TvSubscriptionPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendFiatPageRoutingModule {}
