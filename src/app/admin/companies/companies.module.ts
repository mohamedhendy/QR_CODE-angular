import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompaniesRoutingModule } from './companies-routing.module';
import { CompaniesComponent } from './companies.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    CompaniesComponent,
  ],
  imports: [
    CommonModule,
    CompaniesRoutingModule,
    NgxPaginationModule

  ]
})
export class CompaniesModule { }
