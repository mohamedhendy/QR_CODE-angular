import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenerateTokenRoutingModule } from './generate-token-routing.module';
import { GenerateTokenComponent } from './generate-token.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GenerateTokenComponent
  ],
  imports: [
    CommonModule,
    GenerateTokenRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class GenerateTokenModule { }
