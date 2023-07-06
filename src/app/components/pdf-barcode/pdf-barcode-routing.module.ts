import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdfBarcodeComponent } from './pdf-barcode.component';

const routes: Routes = [{ path: '', component: PdfBarcodeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PdfBarcodeRoutingModule { }
