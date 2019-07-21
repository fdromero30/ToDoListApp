import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: 'input[onlyNumber]'
})
export class OnlyNumberDirective {

  constructor(private _el: ElementRef) { }

  /**
   * Directiva para permitir el ingreso de numeros unicamente en un input
   * @param event 
   */
  @HostListener('input', ['$event']) onInputChange(event) {
    const initalValue = this._el.nativeElement.value;
    this._el.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
    if ( initalValue !== this._el.nativeElement.value) {
      event.stopPropagation();
    }
  }

}

