import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CryptoDetailsPage } from './crypto-details.page';
import { HistorymodalPage } from './historymodal/historymodal.page';

const routes: Routes = [
  { path: '', component: CryptoDetailsPage },
  { path: 'historymodal', component: HistorymodalPage }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CryptoDetailsPageRoutingModule {}
