import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { NgxSpinnerModule } from "ngx-spinner";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MainFrameModule } from './components/main-frame/main-frame.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    MainFrameModule,
    BrowserModule,
    SharedModule,
    NgbModule,
    RouterModule,
    // NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
