import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessCardRoutingModule } from './business-card-routing.module';
import { BusinessCardComponent } from './business-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedBarcodeModule } from 'src/app/sharedModules/shared-barcode/shared-barcode.module';


@NgModule({
  declarations: [
    BusinessCardComponent
  ],
  imports: [
    CommonModule,
    BusinessCardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedBarcodeModule
  ]
})
export class BusinessCardModule { }
