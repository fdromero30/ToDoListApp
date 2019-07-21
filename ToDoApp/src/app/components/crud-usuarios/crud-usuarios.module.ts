import { NgModule } from '@angular/core';
import { CrudUsuariosComponent } from './crud-usuarios.component';
import { CrudUsuariosRoutingModule } from './crud-usuarios-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CrudUsuariosDetalleComponent } from './crud-usuarios-detalle.component';



@NgModule({
    declarations: [CrudUsuariosComponent, CrudUsuariosDetalleComponent],
    imports: [
        CrudUsuariosRoutingModule,
        SharedModule
    ], entryComponents: [
        CrudUsuariosDetalleComponent
    ]
})
export class CrudUsuariosModule { }
