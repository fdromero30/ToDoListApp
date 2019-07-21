import { AuthGuard } from './shared/guards/authGuard/auth.guard';
import { UrlService } from './shared/services/url.service';
import { MainFrameModule } from './components/mainframe/mainframe.module';
import { GlobalService } from './shared/global.service';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CrudUsuariosModule } from './components/crud-usuarios/crud-usuarios.module';



@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    CrudUsuariosModule,
    NgxSpinnerModule,
    MainFrameModule,
    SharedModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    NoopAnimationsModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule
  ],

  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  providers: [GlobalService, UrlService, AuthGuard],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule {

}
