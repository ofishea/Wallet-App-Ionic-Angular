import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendFiatPage } from './send-fiat.page';

import { AirtimePage } from './airtime/airtime.page';
import { SendToUserPage } from './send-to-user/send-to-user.page';

const routes: Routes = [
  { path: '', component: SendFiatPage},
  { path: 'airtime', component: AirtimePage },
  { path: 'send-to-user', component: SendToUserPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendFiatPageRoutingModule {}
