import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailBarcodeRoutingModule } from './email-barcode-routing.module';
import { EmailBarcodeComponent } from './email-barcode.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EmailBarcodeComponent],
  imports: [
    CommonModule,
    EmailBarcodeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class EmailBarcodeModule {}
