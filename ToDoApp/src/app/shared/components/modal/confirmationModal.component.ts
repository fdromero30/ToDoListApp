import { ConfirmationModalOptions } from './../../models/modal.model';
import { Component, Input, OnInit, EventEmitter, Output, ViewChild, OnChanges } from '@angular/core';
import { NgbModal, NgbActiveModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ModalOptions } from 'angular-bootstrap-md';


@Component({
  selector: 'confirmation-app-modal',
  templateUrl: './confirmationModal.component.html',
  styleUrls: ['./confirmationModal.component.scss']
})
export class ConfirmationModalComponent implements OnInit, OnChanges {

  @Input('msg') modalOptions: ConfirmationModalOptions;
  @Input('data') data: any;
  @Output('resp') modalResponse = new EventEmitter();


  constructor(
    public activeModal: NgbActiveModal, private modalService: NgbModal
  ) {
  }

  ngOnChanges() {

  }
  ngOnInit() {

    this.modalOptions = this.modalOptions;

  }

  /**
   * METODO DE INVOCACION ABRIR MODAL
   * @param content 
   */
  open(content) {
    this.activeModal = this.modalService.open(content, { centered: false });
  }

  /**
   * METODO DE CONFIRMACION DE OPCIONES
   */
  aceptar() {
    this.activeModal.close();
    this.modalResponse.emit([true, this.data]);
  }

  /**
   * METODO DE CANCELACION DE OPCIONES
   */
  cancelar() {
    this.activeModal.close();
    this.modalResponse.emit([false, this.data]);
  }
}
