import { NgModule } from '@angular/core';
import { AppNavBar } from './nav-bar/nav-bar.component';
import { AppFrame } from './app-frame/app-frame.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppMenu } from './app-menu/app-menu.component';


@NgModule({
    declarations: [
        AppNavBar, AppFrame, AppMenu
    ],
    imports: [
        AppRoutingModule
    ],
    providers: [],
    exports: [AppFrame]
})
export class MainFrameModule { }
