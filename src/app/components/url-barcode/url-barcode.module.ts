import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrlBarcodeRoutingModule } from './url-barcode-routing.module';
import { UrlBarcodeComponent } from './url-barcode.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UrlBarcodeComponent
  ],
  imports: [
    CommonModule,
    UrlBarcodeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UrlBarcodeModule { }
