import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstagramBarcodeComponent } from './instagram-barcode.component';

const routes: Routes = [{ path: '', component: InstagramBarcodeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstagramBarcodeRoutingModule { }
