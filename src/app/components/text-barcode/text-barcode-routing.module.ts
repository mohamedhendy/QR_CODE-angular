import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TextBarcodeComponent } from './text-barcode.component';

const routes: Routes = [{ path: '', component: TextBarcodeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TextBarcodeRoutingModule { }
