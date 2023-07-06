import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedBusinessCardRoutingModule } from './shared-business-card-routing.module';
import { SharedBusinessCardComponent } from './shared-business-card.component';


@NgModule({
  declarations: [
    SharedBusinessCardComponent
  ],
  imports: [
    CommonModule,
    SharedBusinessCardRoutingModule
  ]
})
export class SharedBusinessCardModule { }
