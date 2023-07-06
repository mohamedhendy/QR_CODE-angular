import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstagramBarcodeRoutingModule } from './instagram-barcode-routing.module';
import { InstagramBarcodeComponent } from './instagram-barcode.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [InstagramBarcodeComponent],
  imports: [
    CommonModule,
    InstagramBarcodeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class InstagramBarcodeModule {}
