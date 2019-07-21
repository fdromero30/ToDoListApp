import { GlobalService } from '../../shared/global.service';
import { Component, Renderer2, Inject } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { DOCUMENT } from '@angular/platform-browser';
import { AssetsService } from '../../shared/services/assets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainframe',
  templateUrl: './mainframe.component.html',
  styleUrls: ['./mainframe.component.scss']
})
export class MainframeComponent {

  public estadoMenu = false;
  public iconDemo: string;
  private currentTheme = 'yeti';
  public modificacionmenu;
  public modificacioncontenido;
  public idiomas: any;
  public imageuser: string;
  public iconomenColor: string;
  public hidden;
  public menuprincipal: boolean;



  constructor(
    private renderer: Renderer2, @Inject(DOCUMENT) private document, private global: GlobalService, private router: Router) {
    this.iconomenColor = AssetsService.URL_ICONO_DEMO_JPG;
    this.imageuser = AssetsService.URL_IMAGEN_USER_MENU;
    this.imageuser = AssetsService.URL_IMAGEN_USER_MENU;
    this.obtenerConfiguracion();

    this.hidden = {
      display: 'none'
    };
    this.menuprincipal = true;
  }
  /**
   * @author fromero
   */
  private obtenerConfiguracion() {
    this.setThemeInit();
  }

  /**
   * @author fromero
   */
  private setThemeInit() {
    // Recupera Tema Seleccionado
    this.currentTheme = sessionStorage.getItem('theme');
    if (this.currentTheme == null) {
      this.currentTheme = 'yeti';
    }
    this.theme(this.currentTheme);
  }

  /**
   * @author fromero
   * @param type 
   */
  public theme(type) {
    this.renderer.removeClass(this.document.body, 'theme-' + this.currentTheme);
    if (type.theme) {
      this.currentTheme = type.theme;
    } else {
      this.currentTheme = type;
    }
    this.iconDemo = this.iconomenColor;
    sessionStorage.setItem('theme', this.currentTheme);
    this.renderer.addClass(document.body, 'theme-' + this.currentTheme);
  }

  /**
   * @author fromero
   */
  public accionMenu() {

    const menu = document.getElementById('contenedorMenu');
    if (menu.classList.contains('menuActive')) {
      menu.classList.remove('menuActive');
    } else {
      menu.classList.add('menuActive');
    }
  }
}
