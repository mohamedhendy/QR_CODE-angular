import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { SidebarComponent } from './components/layouts/sidebar/sidebar.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { AdminSidebarComponent } from './admin/components/admin-sidebar/admin-sidebar.component';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { CreateQrCodeModule } from './pages/create-qr-code/create-qr-code.module';
import { SharedBarcodeModule } from './sharedModules/shared-barcode/shared-barcode.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    LayoutComponent,
    AdminLayoutComponent,
    AdminSidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CreateQrCodeModule,
    SharedBarcodeModule
    
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule { }
