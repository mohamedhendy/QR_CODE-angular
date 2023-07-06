import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillerQrRoutingModule } from './biller-qr-routing.module';
import { BillerQrComponent } from './biller-qr.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedBarcodeModule } from 'src/app/sharedModules/shared-barcode/shared-barcode.module';

@NgModule({
  declarations: [
    BillerQrComponent
  ],
  imports: [
    CommonModule,
    BillerQrRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedBarcodeModule
  ]
})
export class BillerQrModule { }
