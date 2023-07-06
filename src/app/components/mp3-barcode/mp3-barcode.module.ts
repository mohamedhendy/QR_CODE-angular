import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Mp3BarcodeRoutingModule } from './mp3-barcode-routing.module';
import { Mp3BarcodeComponent } from './mp3-barcode.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [Mp3BarcodeComponent],
  imports: [
    CommonModule,
    Mp3BarcodeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class Mp3BarcodeModule {}
