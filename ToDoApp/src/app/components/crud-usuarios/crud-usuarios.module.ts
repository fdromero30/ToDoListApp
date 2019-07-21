import { NgModule } from '@angular/core';
import { CrudUsuariosComponent } from './crud-usuarios.component';
import { CrudUsuariosRoutingModule } from './crud-usuarios-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
    declarations: [CrudUsuariosComponent],
    imports: [
        CrudUsuariosRoutingModule,
        SharedModule
    ]
})
export class CrudUsuariosModule { }
