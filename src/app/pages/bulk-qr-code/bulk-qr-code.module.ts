import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BulkQrCodeRoutingModule } from './bulk-qr-code-routing.module';
import { BulkQrCodeComponent } from './bulk-qr-code.component';
import { SharedBarcodeModule } from 'src/app/sharedModules/shared-barcode/shared-barcode.module';


@NgModule({
  declarations: [
    BulkQrCodeComponent
  ],
  imports: [
    CommonModule,
    BulkQrCodeRoutingModule,
     FormsModule,
    ReactiveFormsModule,
    SharedBarcodeModule
  ]
})
export class BulkQrCodeModule { }
