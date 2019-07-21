import { AlertService } from './../../shared/services/alert.service';
import { UrlService } from './../../shared/url.service';
import { GlobalService } from '../../shared/global.service';
// import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, Input, Output, ɵConsole, ElementRef, OnInit } from '@angular/core';
// import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { UrlControl } from 'src/app/shared/models/generic.model';


@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.scss']
})

export class MenuPrincipalComponent implements OnInit {

  @Input() public estadoMenu: any;
  @Output() public fontValue = new EventEmitter();
  @Output() theme = new EventEmitter();
  @HostBinding('class') componentCssClass;

  public opened = true;
  public menu: any;
  public accesibilidad = true;
  public checked = false;
  public checkedgif = true;
  public gif;
  public tamanoletra = 100;
  public style;
  public modificacionmenu;
  public modificacioncontenido;
  public aumentomenu = 18;
  public aumentocontenido = 18;
  public aumentoright = 0;
  public tamanioLetraApp = 100;
  public rolUsuario: '';
  public checkBlack: boolean;
  public checkPink: boolean;
  public checkGray: boolean;



  constructor(public router: Router
    , private global: GlobalService
    , private urlService: UrlService
    , private alertService: AlertService) {

  }

  ngOnInit() {
    this.menu = [];
    const theme = sessionStorage.getItem('theme');
    if (theme === 'yeti') {
      this.checked = false;
      this.checkBlack = false;
      this.checkGray = false;
      this.checkPink = false;
    } else {
      this.validarTema(theme);
      this.setTheme();
    }
    this.opened = true;
  }


  /**
   * 
   * @param theme 
   */
  validarTema(theme) {
    switch (theme) {
      case 'dark-white':
        this.checkBlack = true;
        this.checkGray = false;
        this.checkPink = false;
        break;
      case 'rosa-fucsia':
        this.checkPink = true;
        this.checkGray = false;
        this.checkBlack = false;
        break;
      case 'gris-blanco':
        this.checkGray = true;
        this.checkBlack = false;
        this.checkPink = false;
        break;
    }

    return theme;
  }

  /**
   * 
   * @param accion 
   */
  setAccesibilidad(accion: any) {

    if (accion) {
      this.accesibilidad = true;
    } else {
      this.accesibilidad = false;
    }
  }


  /**
   * 
   * @param temaSeleccionado 
   * @param event 
   */
  public setTheme(temaSeleccionado?: any, event?) {
    let tema;
    if (event && event.target.checked) {
      tema = this.validarTema(temaSeleccionado);
    } else {
      tema = 'yeti';
    }
    this.theme.emit({ theme: tema });
  }


  /**
   * 
   * @param theme 
   */
  public restablecerAjustes(theme?: any) {
    this.setTheme(theme);
    this.checked = false;
    this.checkBlack = false;
    this.checkGray = false;
    this.checkPink = false;
  }


  /**
   * 
   * @param error 
   */
  cathException(error) {
    this.alertService.generateAlertError('', 'Error');
  }
}




