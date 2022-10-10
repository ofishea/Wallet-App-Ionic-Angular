import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { FiatPage } from './fiat.page';
import { IndexPage } from '../index/index.page';
import { NotfoundPage } from '../notfound/notfound.page';
import { ApiService } from 'src/app/services/api.service';
import { routes } from '../app-routing.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { FiatPage } from './fiat.page';

describe('FiatPage', () => {
  let component: FiatPage;
  let fixture: ComponentFixture<FiatPage>;

  // Setup
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        HttpClientModule,
        FormsModule
      ],
      declarations: [
        FiatPage,
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
    fixture = TestBed.createComponent(FiatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    component = null;
  });

  );
});
