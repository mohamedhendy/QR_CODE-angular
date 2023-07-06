import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillerQrComponent } from './biller-qr.component';

const routes: Routes = [{ path: '', component: BillerQrComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillerQrRoutingModule { }
