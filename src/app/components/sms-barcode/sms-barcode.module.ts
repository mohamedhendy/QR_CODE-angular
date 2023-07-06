import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmsBarcodeRoutingModule } from './sms-barcode-routing.module';
import { SmsBarcodeComponent } from './sms-barcode.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SmsBarcodeComponent
  ],
  imports: [
    CommonModule,
    SmsBarcodeRoutingModule ,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SmsBarcodeModule { }
