import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BulkQrCodeComponent } from './bulk-qr-code.component';

const routes: Routes = [{ path: '', component: BulkQrCodeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BulkQrCodeRoutingModule { }
