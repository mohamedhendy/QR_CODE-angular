import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkypeBarcodeComponent } from './skype-barcode.component';

const routes: Routes = [{ path: '', component: SkypeBarcodeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkypeBarcodeRoutingModule { }
