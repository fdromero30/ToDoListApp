import { GlobalService } from '../../shared/global.service';
import { Component, Renderer2, Inject, OnInit, Input, OnDestroy } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalOptions } from 'src/app/shared/models/modal.model';
import { ConstantesService } from 'src/app/shared/services/constantes.service';

@Component({
    selector: 'app-crud-usuarios-detalle',
    templateUrl: './crud-usuarios-detalle.component.html',
    styleUrls: ['./crud-usuarios-detalle.component.scss']
})

export class CrudUsuariosDetalleComponent implements OnInit {


    @Input() Usuario: UsuarioModel
    public editar: boolean;
    public modalOptions: ConfirmationModalOptions;
    public estados;
    public tipos;


    constructor(private activeModal: NgbActiveModal) {

        this.estados = ConstantesService.estados; // se consultan estos dominiso de constantes, aunque en realidad deberian venir de Base de datos
        this.tipos = ConstantesService.tipoDocumentos; // se dejan quemados en front para facilidad del ejercicio

        this.modalOptions = new ConfirmationModalOptions(
            'Confirmación', 'Está seguro de guardar los cambios?', 'SI', 'NO', 'fas fa-address-card'
            , true, false, 'Guardar', null, 'btn-secondary pull-right');
    }

    ngOnInit() {
        if (!this.Usuario) {
            this.Usuario = new UsuarioModel(null, null, null);
            this.editar = false;
        } else {
            this.editar = true;
        }
    }

    /**
     * @author fromero
     * Metodo que cierra el modal y retorna el usuario modificado o creado para guardar
     */

    close(event?) {
        if (event != 'cerrar') {
            this.activeModal.close({ usuario: this.Usuario, edicion: this.editar });
        } else {
            this.activeModal.close();
        }
    }

    /**
     * @author fromero
     * @param event 
     */
    handlerModal(event) {
        if (event[0]) {
            this.close();
        }
    }

    /**
     * @author fromero
     * metodo de validacion de formulario 
     */
    validarFormulario() {
        if (this.Usuario.usuarioPK.numDocumento != '' && this.Usuario.usuarioPK.tipoDocumento != ''
            && this.Usuario.estado != '' && this.Usuario.nombre != ''
            && this.Usuario.usuarioPK.numDocumento && this.Usuario.estado && this.Usuario.nombre && this.Usuario.usuarioPK.tipoDocumento
        ) {
            this.modalOptions.disabled = false;
        }
    }


}

