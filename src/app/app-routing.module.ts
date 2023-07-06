import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';

const routes: Routes = [
  
  
  { path: '', loadChildren: () => import('./auth/company/company.module').then(m => m.CompanyModule) },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'createQrCode',
        loadChildren: () =>
          import('./pages/create-qr-code/create-qr-code.module').then(
            (m) => m.CreateQrCodeModule
          ),
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      { path: 'bulkQrCode', loadChildren: () => import('./pages/bulk-qr-code/bulk-qr-code.module').then(m => m.BulkQrCodeModule) },
      { path: 'businessCard', loadChildren: () => import('./pages/business-card/business-card.module').then(m => m.BusinessCardModule) },
      { path: 'billerQr', loadChildren: () => import('./pages/biller-qr/biller-qr.module').then(m => m.BillerQrModule) },
      { path: 'generateToken', loadChildren: () => import('./pages/generate-token/generate-token.module').then(m => m.GenerateTokenModule) },

    ],
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'admin',
        loadChildren: () =>
          import('./admin/companies/companies.module').then(
            (m) => m.CompaniesModule
          ),
      },
      { 
       path: 'companies',
       loadChildren: () => import('./admin/companies/companies.module').then(m => m.CompaniesModule) 
      }
    ],
  },
  {
    path: 'createQrCode',
    loadChildren: () =>
      import('./pages/create-qr-code/create-qr-code.module').then(
        (m) => m.CreateQrCodeModule
      ),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./auth/register/register.module').then((m) => m.RegisterModule),
  },
  { path: 'admin', loadChildren: () => import('./admin/companies/companies.module').then(m => m.CompaniesModule) },
  { path: 'login/company', loadChildren: () => import('./auth/company/company.module').then(m => m.CompanyModule) },
  { path: 'login/admin', loadChildren: () => import('./auth/admin/admin.module').then(m => m.AdminModule) },
  
  
  { path: 'shared_Card/:id', loadChildren: () => import('./pages/shared-card/shared-card.module').then(m => m.SharedCardModule) },
  
  
  { path: 'sharedBusinessCard', loadChildren: () => import('./pages/shared-business-card/shared-business-card.module').then(m => m.SharedBusinessCardModule) },
  
  
  { path: 'invoice/:id', loadChildren: () => import('./pages/invoice/invoice.module').then(m => m.InvoiceModule) },
  
  
  { path: 'invoiceText/:id', loadChildren: () => import('./pages/invoice-text/invoice-text.module').then(m => m.InvoiceTextModule) },
  
  
  
  
  
  
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

