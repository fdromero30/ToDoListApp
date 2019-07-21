import { GlobalService } from '../../shared/global.service';
import { Component, Renderer2, Inject, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { DOCUMENT } from '@angular/platform-browser';
import { AssetsService } from '../../shared/services/assets.service';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CrudUsuariosDetalleComponent } from './crud-usuarios-detalle.component';

@Component({
    selector: 'app-crud-usuarios',
    templateUrl: './crud-usuarios.component.html',
    styleUrls: ['./crud-usuarios.component.scss']
})
export class CrudUsuariosComponent implements OnInit {

    public usuarios: UsuarioModel[];

    constructor(private modalService: NgbModal) {

        this.usuarios = [];
        let user = new UsuarioModel('USUARIO DE PRUEBA', 'CEDULA DE CIUDADANIA', '102376484', 'ACTIVO');
        this.usuarios.push(user, user, user);
    }

    ngOnInit() { }

    /**
     * 
     * @param usuarioEdicion 
     */
    verModal(usuarioEdicion?: UsuarioModel) {
        const modalRef = this.modalService.open(CrudUsuariosDetalleComponent, { centered: false, size: 'lg' });
        if (usuarioEdicion) {
            modalRef.componentInstance.Usuario = usuarioEdicion;
        }
        modalRef.result.then((result) => {
            console.log('resultado del modal', result)
        })
    }
}
