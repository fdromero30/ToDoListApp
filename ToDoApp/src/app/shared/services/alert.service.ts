import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable()
export class AlertService {

  private options: any;

  constructor(private toastr: ToastrService) {

    this.options = this.toastr.toastrConfig;
  }

  public generateAlertError(mensaje, titulo, opciones?) {
    this.options.messageClass = 'toast-error';
    opciones = this.options;
    this.toastr.error(mensaje, titulo, opciones)
    // document.getElementById('botonCerrarToast').focus();
  }
  public generateAlertSuccess(mensaje, titulo, opciones?) {
    this.options.messageClass = 'toast-success';
    opciones = this.options;
    this.toastr.success(mensaje, titulo, opciones)
    // document.getElementById('botonCerrarToast').focus();
  }
}
