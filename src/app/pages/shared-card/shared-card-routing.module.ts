import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedCardComponent } from './shared-card.component';

const routes: Routes = [{ path: '', component: SharedCardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedCardRoutingModule { }
