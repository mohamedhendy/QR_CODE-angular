import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VcardBarcodeComponent } from './vcard-barcode.component';

const routes: Routes = [{ path: '', component: VcardBarcodeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VcardBarcodeRoutingModule { }
