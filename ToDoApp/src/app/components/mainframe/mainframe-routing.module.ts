import { AuthGuard } from '../../shared/guards/authGuard/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainframeComponent } from './mainframe.component';
import { CrudUsuariosModule } from '../crud-usuarios/crud-usuarios.module';


const ROUTES_MAIN: Routes = [
  {
    path: '', component: MainframeComponent
    , children: [
      { path: '', loadChildren: () => CrudUsuariosModule },
      { path: 'crud-usuarios', loadChildren: () => CrudUsuariosModule }
    ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(ROUTES_MAIN)],
  exports: [RouterModule]
})
export class MainFrameRoutingModule { }

