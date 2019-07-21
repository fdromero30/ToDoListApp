import { AuthGuard } from './shared/guards/authGuard/auth.guard';
import { Routes, RouterModule } from '@angular/router';
import { MainFrameModule } from './components/mainframe/mainframe.module';
import { NgModule } from '@angular/core';

export const cargarModuloPrincipal = () => MainFrameModule;

export const routes: Routes = [

  {
    path: '', loadChildren: cargarModuloPrincipal, canActivate: [AuthGuard]
  },
  {
    path: 'main', loadChildren: cargarModuloPrincipal, canActivate: [AuthGuard]
  },
  {
    path: '**', loadChildren: cargarModuloPrincipal, canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
