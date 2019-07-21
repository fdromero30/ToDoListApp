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


  constructor(
    private router: Router
  ) {
  }
  ngOnInit() {

    this.router.navigate(['main/crud-usuarios']);

  }

  cathException(error) {

  }
}
