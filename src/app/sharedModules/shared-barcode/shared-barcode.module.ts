import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarcodeComponent } from 'src/app/components/barcode/barcode.component';
import { DesignBarcodeComponent } from 'src/app/components/design-barcode/design-barcode.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BarcodeComponent,
    DesignBarcodeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
  ], exports : [
    BarcodeComponent,
    DesignBarcodeComponent
  ]
})
export class SharedBarcodeModule { }
