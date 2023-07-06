import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PdfBarcodeRoutingModule } from './pdf-barcode-routing.module';
import { PdfBarcodeComponent } from './pdf-barcode.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PdfBarcodeComponent],
  imports: [
    CommonModule,
    PdfBarcodeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class PdfBarcodeModule {}
