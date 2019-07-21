import { GlobalService } from '../../shared/global.service';
import { Component, Renderer2, Inject, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { UsuarioModel, UsuarioPkModel } from 'src/app/models/usuario.model';
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
export class CrudUsuariosComponent implements OnInit, OnDestroy {

    public usuarios: UsuarioModel[];
    public modalOptions: ConfirmationModalOptions;
    private peticionConsulta: Subscription;
    private peticionEdicion: Subscription;
    private peticionGuardar: Subscription;
    private peticionmEliminar: Subscription;


    constructor(private modalService: NgbModal, private spinner: NgxSpinnerService, private urlService: UrlService,
        private global: GlobalService, private alertService: AlertService) {

        this.modalOptions = new ConfirmationModalOptions(
            'Confirmacion Eliminación', 'Esta seguro de Eliminar el Usuario?', 'SI', 'NO', 'fas fa-user-minus', false, null, 'Eliminar', false, 'btn-danger col-lg-5 col-md-12  col-sm-12 col-xs-12');
        this.usuarios = [];
        let user = new UsuarioModel('USUARIO PRUEBA', 'ACTIVO', new UsuarioPkModel('CEDULA', '10239267890'));
        let user2 = new UsuarioModel('USUARIO PRUEBA 2', 'ACTIVO', new UsuarioPkModel('CEDULA', '10229383763'));
        let user3 = new UsuarioModel('USUARIO PRUEBA 3', 'ACTIVO', new UsuarioPkModel('PASAPORTE', '1023789065'));

        this.usuarios.push(user, user2, user3);
    }

    ngOnInit() {
        this.obtenerUsuarios();
    }

    /**
     * @author fromero
     * Lanza el modal de edición o creación y espera la respuesta del modal
     * @param usuarioEdicion 
     */
    verModal(usuarioEdicion?: UsuarioModel) {
        const modalRef = this.modalService.open(CrudUsuariosDetalleComponent, { centered: false, size: 'lg' });
        if (usuarioEdicion) {
            modalRef.componentInstance.Usuario = usuarioEdicion;
        }
        modalRef.result.then((result) => {

            if (result) {
                if (result.editar) {
                    this.editarUsuario(result.usuario);
                } else {
                    this.guardarUsuario(result.usuario);
                }
                console.log('resultado del modal', result)
            }
        });
    }


    /**
     * @author fromero
     * actualiza un usuario existente
     * @param usuario 
     */
    editarUsuario(usuario: UsuarioModel) {

        this.spinner.show();
        const serviceProvider = 'usuario';

        const url = this.urlService.getUrl(new UrlControl(serviceProvider, null, null), this.urlService.hostAPI);
        this.peticionEdicion = this.global.putGenerico(url, usuario).subscribe(
            data => {
                this.spinner.hide();
                this.obtenerUsuarios();
            }, err => {
                this.cathcException('No es posible Actualizar el usuario en este momento');
            }
        )
    }

    /**
     * @author fromero
     * guarada un nuevo Usuario
     * @param usuario 
     */
    guardarUsuario(usuario: UsuarioModel) {

        this.spinner.show();
        const serviceProvider = 'usuario';
        const url = this.urlService.getUrl(new UrlControl(serviceProvider, null, null), this.urlService.hostAPI);
        this.peticionGuardar = this.global.postGenerico(url, usuario).subscribe(
            data => {
                this.obtenerUsuarios();
                this.spinner.hide();
                this.alertService.generateAlertSuccess('Se creo el usuario con exito', '');
            }, err => {
                this.cathcException('No es posible Crear el usuario en este momento');
            }
        )
    }


    /**
     * @author fromero
     * Obtiene la lista principal de usuarios
     */
    obtenerUsuarios() {
        this.spinner.show();
        const serviceProvider = 'usuario';
        const url = this.urlService.getUrl(new UrlControl(serviceProvider, null, null), this.urlService.hostAPI);
        this.peticionConsulta = this.global.getGenerico(url).subscribe(
            data => {
                this.usuarios = data;
                this.spinner.hide();
            }, err => {
                this.cathcException('No es posible obtener los usuarios en este momento');
            }
        )
    }


    /**
     * @author fromero
     * metodo para eliminar usuario seleccionado
     * @param usuario 
     */
    eliminarUsuario(usuario, event) {
        if (event[0]) {
            this.spinner.show();
            const serviceProvider = 'eliminarUsuario';

            const queryParams: Array<[string, string]> = new Array<[string, string]>();
            queryParams.push(['usuarioPK', usuario.usuarioPK]);
            const url = this.urlService.getUrl(new UrlControl(serviceProvider, null, queryParams), this.urlService.hostAPI);

            this.peticionmEliminar = this.global.deleteGenerico(url).subscribe(
                data => {
                    this.obtenerUsuarios();
                    this.alertService.generateAlertSuccess('Se eliminó el usuario con exitos', '');
                    this.spinner.hide();
                }, err => {
                    this.cathcException('No es posible Eliminar el usuario en este momento');
                }
            )
        }

    }

    /**
     * @author fromero  
     * @param error 
     */

    cathcException(error) {
        this.alertService.generateAlertError(error, 'Error');
        this.spinner.hide();
    }


    /**
     * @author fromero
     * Se realiza la cancelación de las subscripcioones si se sale o destruye el componente
     */
    ngOnDestroy() {


        this.peticionConsulta.unsubscribe();
        this.peticionEdicion.unsubscribe();
        this.peticionGuardar.unsubscribe();
        this.peticionmEliminar.unsubscribe();

    }
}
