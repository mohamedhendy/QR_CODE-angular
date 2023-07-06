import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedCardRoutingModule } from './shared-card-routing.module';
import { SharedCardComponent } from './shared-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SharedCardComponent
  ],
  imports: [
    CommonModule,
    SharedCardRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedCardModule { }
