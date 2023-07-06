import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhoneBarcodeComponent } from './phone-barcode.component';

const routes: Routes = [{ path: '', component: PhoneBarcodeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhoneBarcodeRoutingModule { }
