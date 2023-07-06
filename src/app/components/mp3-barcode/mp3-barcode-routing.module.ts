import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Mp3BarcodeComponent } from './mp3-barcode.component';

const routes: Routes = [{ path: '', component: Mp3BarcodeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mp3BarcodeRoutingModule { }
