import { GlobalService } from '../../shared/global.service';
import { Component, Renderer2, Inject, OnInit, Input } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalOptions } from 'src/app/shared/models/modal.model';

@Component({
    selector: 'app-crud-usuarios-detalle',
    templateUrl: './crud-usuarios-detalle.component.html',
    styleUrls: ['./crud-usuarios-detalle.component.scss']
})
export class CrudUsuariosDetalleComponent implements OnInit {


    @Input() Usuario: UsuarioModel
    public editar: boolean;
    public modalOptions: ConfirmationModalOptions;

    constructor(private activeModal: NgbActiveModal) {

        this.modalOptions = new ConfirmationModalOptions(
            'Confirmacion', 'Esta seguro de guardar los cambios?', 'SI', 'NO', 'fas fa-address-card', true, false, 'Guardar', null, 'btn-secondary pull-right');
    }

    ngOnInit() {
        if (!this.Usuario) {
            this.Usuario = new UsuarioModel(null, null, null, null);
            this.editar = false;
        } else {
            this.editar = true;
        }
    }

    /**
     * Metodo que cierra el modal y retorna el usuario modificado o creado para guardar
     */

    close() {
        this.activeModal.close({ usuario: this.Usuario, edicion: this.editar });
    }

    /**
     * 
     * @param event 
     */
    handlerModal(event) {
        if (event[0]) {
            this.close();
        }
    }

    /**
     * metodo de validacion de formulario 
     */
    validarFormulario() {
        if (this.Usuario.numDocumento != '' && this.Usuario.tipoDocumento != ''
            && this.Usuario.estado != '' && this.Usuario.nombre != ''
            && this.Usuario.numDocumento && this.Usuario.estado && this.Usuario.nombre && this.Usuario.tipoDocumento
        ) {
            this.modalOptions.disabled = false;
        }
    }
}
