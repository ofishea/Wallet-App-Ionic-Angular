import { Component, HostListener } from '@angular/core';
import { Platform } from '@ionic/angular';
import { ScreensizeService } from './services/screensize.service';
import { Subscription } from 'rxjs/Subscription';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

import { AccountService } from './_services';
import { Account, Role } from './_models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  Role = Role;
  account: Account;
  constructor(
    private accountService: AccountService,
    private platform: Platform,
    private screensizeService: ScreensizeService,
    private router: Router
  ) {
    this.accountService.account.subscribe(x => this.account = x);
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.screensizeService.onResize(this.platform.width());
    });
  }

  @HostListener('window:resize', ['$event'])
  private onResize(event) {
    this.screensizeService.onResize(event.target.innerWidth);
  }


  logout() {
    this.accountService.logout();
}

  ngOnInit(): void {
  }


  onAdmin() {
    this.router.navigate(['admin']);
  }
  onHome() {
    this.router.navigate(['home']);
  }

}
