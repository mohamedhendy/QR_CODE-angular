import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlBarcodeComponent } from './url-barcode.component';

const routes: Routes = [{ path: '', component: UrlBarcodeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UrlBarcodeRoutingModule { }
