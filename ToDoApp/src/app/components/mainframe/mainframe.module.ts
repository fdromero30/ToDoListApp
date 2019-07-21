import { MenuPrincipalComponent } from './../menu-principal/menu-principal.component';
import { MainframeComponent } from './mainframe.component';
import { HttpClient } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { MainFrameRoutingModule } from './mainframe-routing.module';

@NgModule({
  declarations: [MainframeComponent, MenuPrincipalComponent],
  imports: [
    SharedModule,
    CommonModule,
    MainFrameRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MainFrameModule { }
