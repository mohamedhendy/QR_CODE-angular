import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceTextComponent } from './invoice-text.component';

const routes: Routes = [{ path: '', component: InvoiceTextComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceTextRoutingModule { }
