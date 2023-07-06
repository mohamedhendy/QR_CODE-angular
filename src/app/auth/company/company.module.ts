import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';


@NgModule({
  declarations: [
    CompanyComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    FormsModule
  ]
})
export class CompanyModule { }
