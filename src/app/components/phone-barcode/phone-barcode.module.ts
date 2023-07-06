import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhoneBarcodeRoutingModule } from './phone-barcode-routing.module';
import { PhoneBarcodeComponent } from './phone-barcode.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PhoneBarcodeComponent],
  imports: [
    CommonModule,
    PhoneBarcodeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class PhoneBarcodeModule {}
