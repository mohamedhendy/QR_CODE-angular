import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwitterBarcodeRoutingModule } from './twitter-barcode-routing.module';
import { TwitterBarcodeComponent } from './twitter-barcode.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TwitterBarcodeComponent
  ],
  imports: [
    CommonModule,
    TwitterBarcodeRoutingModule,
    FormsModule,
     ReactiveFormsModule 
  ]
})
export class TwitterBarcodeModule { }
