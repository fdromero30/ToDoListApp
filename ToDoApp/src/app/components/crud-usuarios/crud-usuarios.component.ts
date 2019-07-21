import { GlobalService } from '../../shared/global.service';
import { Component, Renderer2, Inject, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { DOCUMENT } from '@angular/platform-browser';
import { AssetsService } from '../../shared/services/assets.service';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario.model';

@Component({
    selector: 'app-crud-usuarios',
    templateUrl: './crud-usuarios.component.html',
    styleUrls: ['./crud-usuarios.component.scss']
})
export class CrudUsuariosComponent implements OnInit {

    public usuarios: UsuarioModel[];

    constructor() {

        this.usuarios = [];
    }

    ngOnInit() { }

}
