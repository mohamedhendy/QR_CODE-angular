import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmsBarcodeComponent } from './sms-barcode.component';

const routes: Routes = [{ path: '', component: SmsBarcodeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmsBarcodeRoutingModule { }
