import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SanitizeHtmlPipe } from 'src/app/pipe/sanitize-html.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    SanitizeHtmlPipe,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule

  ]
})

export class DashboardModule { }

