import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WhatsappBarcodeComponent } from './whatsapp-barcode.component';

const routes: Routes = [{ path: '', component: WhatsappBarcodeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,]
})
export class WhatsappBarcodeRoutingModule { }
