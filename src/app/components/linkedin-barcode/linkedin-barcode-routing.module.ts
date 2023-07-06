import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkedinBarcodeComponent } from './linkedin-barcode.component';

const routes: Routes = [{ path: '', component: LinkedinBarcodeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinkedinBarcodeRoutingModule { }
