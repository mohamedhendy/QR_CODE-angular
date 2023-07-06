import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinkedinBarcodeRoutingModule } from './linkedin-barcode-routing.module';
import { LinkedinBarcodeComponent } from './linkedin-barcode.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LinkedinBarcodeComponent],
  imports: [
    CommonModule,
    LinkedinBarcodeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class LinkedinBarcodeModule {}
