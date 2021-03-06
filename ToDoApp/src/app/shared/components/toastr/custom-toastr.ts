import { Component, EventEmitter } from '@angular/core';
import { Toast, ToastrService, ToastPackage } from 'ngx-toastr';
import {
    animate,
    keyframes,
    state,
    style,
    transition,
    trigger
} from '@angular/animations';

@Component({
    selector: 'custom-toastr',
    templateUrl: './custom-toastr.html',
    animations: [
        trigger('flyInOut', [
            state('inactive', style({
                opacity: 0,
            })),
            transition('inactive => active', animate('400ms ease-out', keyframes([
                style({
                    transform: 'translate3d(100%, 0, 0) skewX(-30deg)',
                    opacity: 0,
                }),
                style({
                    transform: 'skewX(20deg)',
                    opacity: 1,
                }),
                style({
                    transform: 'skewX(-5deg)',
                    opacity: 1,
                }),
                style({
                    transform: 'none',
                    opacity: 1,
                }),
            ]))),
            transition('active => removed', animate('400ms ease-out', keyframes([
                style({
                    opacity: 1,
                }),
                style({
                    transform: 'translate3d(100%, 0, 0) skewX(30deg)',
                    opacity: 0,
                }),
            ]))),
        ]),
    ],
    preserveWhitespaces: false,
})
export class CustomToastr extends Toast {


    // constructor is only necessary when not using AoT
    constructor(
        protected toastrService: ToastrService,
        public toastPackage: ToastPackage,
    ) {
        super(toastrService, toastPackage);
    }

    /**
     * 
     * @param event @author fromero
     */
    action(event: Event) {
        event.stopPropagation();   
        this.toastPackage.triggerAction('cancelado');
        this.remove();
        return false;

    }
}