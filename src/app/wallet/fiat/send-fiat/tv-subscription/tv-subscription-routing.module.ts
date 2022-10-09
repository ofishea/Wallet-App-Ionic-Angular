import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TvSubscriptionPage } from './tv-subscription.page';

const routes: Routes = [
  {
    path: '',
    component: TvSubscriptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TvSubscriptionPageRoutingModule {}
