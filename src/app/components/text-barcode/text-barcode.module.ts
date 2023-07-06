import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextBarcodeRoutingModule } from './text-barcode-routing.module';
import { TextBarcodeComponent } from './text-barcode.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TextBarcodeComponent
  ],
  imports: [
    CommonModule,
    TextBarcodeRoutingModule,
    FormsModule,
     ReactiveFormsModule 
  ]
})
export class TextBarcodeModule { }
