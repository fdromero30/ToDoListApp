import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: 'input[lettersAndNumbersOnly]'
})
export class OnlyLettersAndNumbersDirective {

  constructor(private _el: ElementRef) { }

  /**
   * @author fromero
   * Direcriva para permitir el ingreso de letras y numeros unicamente en un input
   * @param event 
   */
  @HostListener('input', ['$event']) onInputChange(event) {
    const initalValue = this._el.nativeElement.value;
    this._el.nativeElement.value = initalValue.replace(/[^A-Za-z0-9Ññ ]*/g, '');
    if (initalValue !== this._el.nativeElement.value) {
      event.stopPropagation();
    }
  }

}
