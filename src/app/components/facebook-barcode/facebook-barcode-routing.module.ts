import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacebookBarcodeComponent } from './facebook-barcode.component';
const routes: Routes = [{ path: '', component: FacebookBarcodeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacebookBarcodeRoutingModule { }
