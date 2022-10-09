import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CryptoDetailPage } from './crypto-detail.page';
import { IndexPage } from '../index/index.page';
import { NotfoundPage } from '../notfound/notfound.page';
import { ApiService } from 'src/app/services/api.service';
import { routes } from '../app-routing.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { CryptoDetailsPage } from './crypto-details.page';

describe('CryptoDetailsPage', () => {
  let component: CryptoDetailPage;
  let fixture: ComponentFixture<CryptoDetailPage>;

  // Setup
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        HttpClientModule,
        FormsModule
      ],
      declarations: [
        CryptoDetailPage,
        IndexPage,
        NotfoundPage
      ],
      providers: [
        ApiService,
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    component = null;
  });

  );
});
