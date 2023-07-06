import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhatsappBarcodeRoutingModule } from './whatsapp-barcode-routing.module';
import { WhatsappBarcodeComponent } from './whatsapp-barcode.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [WhatsappBarcodeComponent],
  imports: [
    CommonModule,
    WhatsappBarcodeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class WhatsappBarcodeModule {}
