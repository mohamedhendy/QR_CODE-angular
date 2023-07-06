import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacebookBarcodeRoutingModule } from './facebook-barcode-routing.module';
import { FacebookBarcodeComponent } from './facebook-barcode.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FacebookBarcodeComponent],
  imports: [
    CommonModule,
    FacebookBarcodeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class FacebookBarcodeModule {}
