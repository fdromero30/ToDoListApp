import { AuthGuard } from './shared/guards/authGuard/auth.guard';
import { Routes, RouterModule } from '@angular/router';
import { MainFrameModule } from './components/mainframe/mainframe.module';
import { NgModule } from '@angular/core';
import { MainframeComponent } from './components/mainframe/mainframe.component';

export const cargarModuloPrincipal = () => MainFrameModule;

export const routes: Routes = [

  {
    path: '', loadChildren: cargarModuloPrincipal
  },
  {
    path: 'main', loadChildren: cargarModuloPrincipal
  },
  {
    path: '**', loadChildren: cargarModuloPrincipal
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
