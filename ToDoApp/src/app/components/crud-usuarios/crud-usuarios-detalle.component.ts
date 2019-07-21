import { GlobalService } from '../../shared/global.service';
import { Component, Renderer2, Inject, OnInit, Input } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { DOCUMENT } from '@angular/platform-browser';
import { AssetsService } from '../../shared/services/assets.service';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-crud-usuarios-detalle',
    templateUrl: './crud-usuarios-detalle.component.html',
    styleUrls: ['./crud-usuarios-detalle.component.scss']
})
export class CrudUsuariosDetalleComponent implements OnInit {


    @Input() Usuario: UsuarioModel
    public editar: boolean;

    constructor(private activeModal: NgbActiveModal) {
        if (!this.Usuario) {
            this.Usuario = new UsuarioModel(null, null, null, null);
            this.editar = false;
        } else {
            this.editar = true;
        }


    }

    ngOnInit() {

    }

    close() {
        this.activeModal.close();
    }
}
