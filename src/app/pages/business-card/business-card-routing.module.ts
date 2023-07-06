import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessCardComponent } from './business-card.component';

const routes: Routes = [{ path: '', component: BusinessCardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessCardRoutingModule { }
