import { NgModule } from '@angular/core';
import { CrudUsuariosComponent } from './crud-usuarios.component';
import { CrudUsuariosRoutingModule } from './crud-usuarios-routing.module';


@NgModule({
    declarations: [CrudUsuariosComponent],
    imports: [
       CrudUsuariosRoutingModule
    ]
})
export class CrudUsuariosModule { }
