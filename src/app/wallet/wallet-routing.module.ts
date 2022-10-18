import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletPage } from './wallet.page';
import { SendPage } from './send/send.page';
import { ReceivePage } from './receive/receive.page';

const buyPageModule = () => import('./buy/buy.module').then(x => x.BuyPageModule);
const sellPageModule = () => import('./sell/sell.module').then(x => x.SellPageModule);
const fiatPageModule = () => import('./fiat/fiat.module').then(x => x.FiatPageModule);
const convertPageModule = () => import('./convert/convert.module').then(x => x.ConvertPageModule);
const cryptoDetailsPageModule = () => import('./crypto-details/crypto-details.module').then(x => x.CryptoDetailsPageModule);

const routes: Routes = [
  { path: '', component: WalletPage },
  { path: 'fiat', loadChildren: fiatPageModule },
  { path: 'buy', loadChildren: buyPageModule },
  { path: 'sell', loadChildren: sellPageModule },
  { path: 'convert', loadChildren: convertPageModule },
  { path: 'send', component: SendPage },
  { path: 'receive', component: ReceivePage },
  { path: 'crypto-details', loadChildren: cryptoDetailsPageModule }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletPageRoutingModule {}
 