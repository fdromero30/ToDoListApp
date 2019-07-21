import { AuthGuard } from '../../shared/guards/authGuard/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudUsuariosComponent } from './crud-usuarios.component';


const ROUTES_MAIN: Routes = [
    {
        path: '', component: CrudUsuariosComponent
    }

];
@NgModule({
    imports: [RouterModule.forChild(ROUTES_MAIN)],
    exports: [RouterModule]
})
export class CrudUsuariosRoutingModule { }

