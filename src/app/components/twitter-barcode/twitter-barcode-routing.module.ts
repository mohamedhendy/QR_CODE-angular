import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TwitterBarcodeComponent } from './twitter-barcode.component';

const routes: Routes = [{ path: '', component: TwitterBarcodeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TwitterBarcodeRoutingModule { }
