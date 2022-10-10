import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiatPage } from './fiat.page';
import { ReceiveFiatPage } from './receive-fiat/receive-fiat.page';
import { HistoryPage } from '../../modals/history/history.page';

const depositPageModule = () => import('./deposit/deposit.module').then(x => x.DepositPageModule);
const SendFiatPageModule = () => import('./send-fiat/send-fiat.module').then(x => x.SendFiatPageModule);
const withdrawPageModule = () => import('./withdraw/withdraw.module').then(x => x.WithdrawPageModule);

const routes: Routes = [
    { path: '', component: FiatPage},
    { path: 'deposit', loadChildren: depositPageModule },
    { path: 'send-fiat', loadChildren: SendFiatPageModule },
    { path: 'withdraw', loadChildren: withdrawPageModule },
    { path: 'receive-fiat', component: ReceiveFiatPage },
    { path: 'history', component: HistoryPage }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiatPageRoutingModule {}
