import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YoutubeBarcodeRoutingModule } from './youtube-barcode-routing.module';
import { YoutubeBarcodeComponent } from './youtube-barcode.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    YoutubeBarcodeComponent
  ],
  imports: [
    CommonModule,
    YoutubeBarcodeRoutingModule,
    FormsModule,
     ReactiveFormsModule 
  ]
})
export class YoutubeBarcodeModule { }
