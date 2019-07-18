import { NgModule } from '@angular/core';
import { AppNavBar } from './nav-bar/nav-bar.component';
import { AppFrame } from './app-frame/app-frame.component';
import { AppRoutingModule } from 'src/app/app-routing.module';


@NgModule({
    declarations: [
        AppNavBar, AppFrame
    ],
    imports: [
        AppRoutingModule
    ],
    providers: [],
    exports: [AppFrame]
})
export class MainFrameModule { }
