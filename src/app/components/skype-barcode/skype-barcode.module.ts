import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkypeBarcodeRoutingModule } from './skype-barcode-routing.module';
import { SkypeBarcodeComponent } from './skype-barcode.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SkypeBarcodeComponent
  ],
  imports: [
    CommonModule,
    SkypeBarcodeRoutingModule,
    FormsModule,
     ReactiveFormsModule 
  ]
})
export class SkypeBarcodeModule { }
