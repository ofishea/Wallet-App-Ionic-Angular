import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuyPage } from './buy.page';
import { BuyPreviewPage } from './buy-preview/buy-preview.page';

const routes: Routes = [
  { path: '', component: BuyPage },
  { path: 'buy-preview', component: BuyPreviewPage }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuyPageRoutingModule {}
