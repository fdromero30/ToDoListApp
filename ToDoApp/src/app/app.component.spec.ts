import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UrlService } from './shared/url.service';
import { urlServiceMock, globalServiceStub, activatedRouteStub } from 'src/testing/mocks';
import { AlertService } from './shared/services/alert.service';
import { GlobalService } from './shared/global.service';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { store } from '@angular/core/src/render3';

xdescribe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach((() => {
    var store = {};

    TestBed.configureTestingModule({
      imports: [
        //   ReactiveFormsModule,
        FormsModule,
        // BrowserModule,
        ToastrModule.forRoot(),
        HttpClientTestingModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ],

      declarations: [
        AppComponent
      ],

      schemas: [
        CUSTOM_ELEMENTS_SCHEMA

      ],

      providers: [
        { provide: UrlService, useValue: urlServiceMock },
        AlertService,
        { provide: GlobalService, useValue: globalServiceStub },
        GlobalService,
        HttpClient,
        Subject,
        { provide: ActivatedRoute, useValue: activatedRouteStub }
      ]
    }).compileComponents();


  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit', () => {
    component.ngOnInit();
  });





});
