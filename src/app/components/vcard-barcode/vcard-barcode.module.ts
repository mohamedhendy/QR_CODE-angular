import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VcardBarcodeRoutingModule } from './vcard-barcode-routing.module';
import { VcardBarcodeComponent } from './vcard-barcode.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    VcardBarcodeComponent
  ],
  imports: [
    CommonModule,
    VcardBarcodeRoutingModule,
    FormsModule,
     ReactiveFormsModule 
  ]
})
export class VcardBarcodeModule { }
