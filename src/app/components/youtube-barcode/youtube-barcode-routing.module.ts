import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YoutubeBarcodeComponent } from './youtube-barcode.component';

const routes: Routes = [{ path: '', component: YoutubeBarcodeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YoutubeBarcodeRoutingModule { }
