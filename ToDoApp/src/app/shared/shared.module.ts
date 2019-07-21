
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from './services/alert.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UppercaseInputDirective } from '../pipes/uppercase.pipe';
import { OnlyLettersDirective } from '../pipes/onlyLetters.pipe';
import { OnlyLettersAndNumbersDirective } from '../pipes/onlyLettersAndNumbers.pipe';
import { OnlyNumberDirective } from '../pipes/onlyNumber.pipe';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    OnlyLettersAndNumbersDirective
    , OnlyLettersDirective
    , OnlyNumberDirective
    , UppercaseInputDirective

  ],

  imports: [
    ReactiveFormsModule,
    NgbModule.forRoot(),
    CommonModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  entryComponents: [],
  exports: [
    OnlyNumberDirective,
    OnlyLettersAndNumbersDirective
    , OnlyLettersDirective
    , FormsModule
    , ReactiveFormsModule
    , NgbModule
    , UppercaseInputDirective],
  providers: [AlertService, NgbActiveModal]
})
export class SharedModule { }
