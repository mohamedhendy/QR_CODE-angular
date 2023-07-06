import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceTextRoutingModule } from './invoice-text-routing.module';
import { InvoiceTextComponent } from './invoice-text.component';


@NgModule({
  declarations: [
    InvoiceTextComponent
  ],
  imports: [
    CommonModule,
    InvoiceTextRoutingModule
  ]
})
export class InvoiceTextModule { }
