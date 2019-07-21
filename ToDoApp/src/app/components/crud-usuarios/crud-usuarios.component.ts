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
import { NgxSpinnerService } from 'ngx-spinner';
import { UrlService } from 'src/app/shared/url.service';
import { UrlControl } from 'src/app/models/generic.model';
import { AlertService } from 'src/app/shared/services/alert.service';
import { ConfirmationModalOptions } from 'src/app/shared/models/modal.model';

@Component({
    selector: 'app-crud-usuarios',
    templateUrl: './crud-usuarios.component.html',
    styleUrls: ['./crud-usuarios.component.scss']
})
export class CrudUsuariosComponent implements OnInit {

    public usuarios: UsuarioModel[];
    public modalOptions: ConfirmationModalOptions;

    constructor(private modalService: NgbModal, private spinner: NgxSpinnerService, private urlService: UrlService,
        private global: GlobalService, private alertService: AlertService) {

        this.modalOptions = new ConfirmationModalOptions(
            'Confirmacion Eliminacion', 'Esta seguro de Eliminar el Usuario?', 'SI', 'NO', 'fas fa-user-minus', false, null, 'Eliminar', false, 'btn-danger col-lg-5 col-md-12  col-sm-12 col-xs-12');
        this.usuarios = [];
        let user = new UsuarioModel('USUARIO DE PRUEBA', 'CEDULA DE CIUDADANIA', '102376484', 'ACTIVO');
        this.usuarios.push(user, user, user);
    }

    ngOnInit() {
        this.obtenerUsuarios();
    }

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

            if (result.editar) {
                this.editarUsuario(result.usuario);
            } else {
                this.guardarUsuario(result.usuario);
            }
            console.log('resultado del modal', result)

        })
    }


    /**
     * 
     * @param usuario 
     */
    editarUsuario(usuario: UsuarioModel) {

        this.spinner.show();
        const serviceProvider = 'actualizarUsuario';

        const url = this.urlService.getUrl(new UrlControl(serviceProvider, null, null), this.urlService.hostAPI);

        this.global.postGenerico(url, usuario).subscribe(
            data => {

                this.spinner.hide();
            }, err => {
                this.cathcException('No es posible Actualizar el usuario en este momento');
            }
        )
    }

    /**
     * 
     * @param usuario 
     */
    guardarUsuario(usuario: UsuarioModel) {

        this.spinner.show();
        const serviceProvider = 'guardarNuevoUsuario';

        const url = this.urlService.getUrl(new UrlControl(serviceProvider, null, null), this.urlService.hostAPI);

        this.global.postGenerico(url, usuario).subscribe(
            data => {

                this.spinner.hide();
            }, err => {
                this.cathcException('No es posible Crear el usuario en este momento');
            }
        )
    }


    /**
     * Obtiene la lista principal de usuarios
     */
    obtenerUsuarios() {
        this.spinner.show();
        const serviceProvider = 'consultarUsuarios';


        const url = this.urlService.getUrl(new UrlControl(serviceProvider, null, null), this.urlService.hostAPI);

        this.global.getGenerico(url).subscribe(
            data => {

                this.spinner.hide();
            }, err => {
                this.cathcException('No es posible obtener los usuarios en este momento');
            }
        )
    }


    /**
     * metodo para eliminar usuario seleccionado
     * @param usuario 
     */
    eliminarUsuario(usuario, event) {
        if (event[0]) {

            this.spinner.show();
            const serviceProvider = 'eliminarUsuario';

            const url = this.urlService.getUrl(new UrlControl(serviceProvider, null, null), this.urlService.hostAPI);

            this.global.postGenerico(url, usuario).subscribe(
                data => {

                    this.spinner.hide();
                }, err => {
                    this.cathcException('No es posible Eliminar el usuario en este momento');
                }
            )
        }

    }


    cathcException(error) {
        this.alertService.generateAlertError(error, 'Error');
        this.spinner.hide();
    }
}
