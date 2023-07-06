import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateQrCodeRoutingModule } from './create-qr-code-routing.module';
import { CreateQrCodeComponent } from './create-qr-code.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QRTypeButtonsComponent } from 'src/app/components/qrtype-buttons/qrtype-buttons.component';
import { SharedBarcodeModule } from 'src/app/sharedModules/shared-barcode/shared-barcode.module';

@NgModule({
  declarations: [
    CreateQrCodeComponent,
    QRTypeButtonsComponent,
   
  ],
  imports: [
    CommonModule,
    CreateQrCodeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedBarcodeModule
  ],
  
})
export class CreateQrCodeModule { }
