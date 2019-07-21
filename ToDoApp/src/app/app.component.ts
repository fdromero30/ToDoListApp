import { AlertService } from './shared/services/alert.service';
import { UsuarioModel } from './models/usuario.model';
import { GlobalService } from './shared/global.service';
import { Component, OnInit } from '@angular/core';
import { UrlService } from './shared/services/url.service';
import { UrlControl } from './shared/models/generic.model';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConstantesService } from './shared/services/constantes.service';

declare var jQuery;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'DemoAccesibilidad';
  public idioma = 'Español';
  public tamanoletra: number;
  public style: any;
  public iconDemo: string;
  public tamanoletras: any = null;
  public modificacionmenu: any;
  public modificacioncontenido: any;
  public idiomas: any;
  public imageuser: string;
  public iconomenColor: string;
  public iconomenDark: string;
  public username: string;
  public hidden: any;
  public escogerRol: boolean;
  public menuprincipal: boolean;
  private fechaExpiracionToken = null;
  private usuario: UsuarioModel;
  private callValidateToken: any;

  private listaPermisos: any[];

  constructor(

    private global: GlobalService
    , private urlService: UrlService
    , private alertService: AlertService
    , private route: ActivatedRoute
    , private router: Router
    , private modalService: NgbModal
  ) {
  }
  ngOnInit() {

    this.router.navigate(['main/crud-usuarios']);

  }

  cathException(error) {

  }
}
