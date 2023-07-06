import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateQrCodeComponent } from './create-qr-code.component';

const routes: Routes = [{ 
  path: '', component: CreateQrCodeComponent,
  children: [
    {
      path: '',
      loadChildren: () =>
        import('../../components/url-barcode/url-barcode.module').then(
          (m) => m.UrlBarcodeModule
        ),
    },
    {
      path: 'urlBarcode',
      loadChildren: () =>
        import('../../components/url-barcode/url-barcode.module').then(
          (m) => m.UrlBarcodeModule
        ),
    },
    {
      path: 'whatsppBarcode',
      loadChildren: () =>
        import('../../components/whatsapp-barcode/whatsapp-barcode.module').then(
          (m) => m.WhatsappBarcodeModule
        ),
    },
    {
      path: 'instagramBarcode',
      loadChildren: () =>
        import('../../components/instagram-barcode/instagram-barcode.module').then(
          (m) => m.InstagramBarcodeModule
        ),
    },
    {
      path: 'facebook-barcode',
      loadChildren: () =>
        import('../../components/facebook-barcode/facebook-barcode.module').then(
          (m) => m.FacebookBarcodeModule
        ),
    },
    {
      path: 'youtube-barcode',
      loadChildren: () =>
        import('../../components/youtube-barcode/youtube-barcode.module').then(
          (m) => m.YoutubeBarcodeModule
        ),
    },
    {
      path: 'twitter-barcode',
      loadChildren: () =>
        import('../../components/twitter-barcode/twitter-barcode.module').then(
          (m) => m.TwitterBarcodeModule
        ),
    },
    {
      path: 'linkedin-barcode',
      loadChildren: () =>
        import('../../components/linkedin-barcode/linkedin-barcode.module').then(
          (m) => m.LinkedinBarcodeModule
        ),
    },
    {
      path: 'skype-barcode',
      loadChildren: () =>
        import('../../components/skype-barcode/skype-barcode.module').then(
          (m) => m.SkypeBarcodeModule
        ),
    },
    {
      path: 'pdf-barcode',
      loadChildren: () =>
        import('../../components/pdf-barcode/pdf-barcode.module').then(
          (m) => m.PdfBarcodeModule
        ),
    },
    {
      path: 'mp3-barcode',
      loadChildren: () =>
        import('../../components/mp3-barcode/mp3-barcode.module').then(
          (m) => m.Mp3BarcodeModule
        ),
    },
    {
      path: 'vcard-barcode',
      loadChildren: () =>
        import('../../components/vcard-barcode/vcard-barcode.module').then(
          (m) => m.VcardBarcodeModule
        ),
    },
    {
      path: 'phone-barcode',
      loadChildren: () =>
        import('../../components/phone-barcode/phone-barcode.module').then(
          (m) => m.PhoneBarcodeModule
        ),
    },
    {
      path: 'email-barcode',
      loadChildren: () =>
        import('../../components/email-barcode/email-barcode.module').then(
          (m) => m.EmailBarcodeModule
        ),
    },
    {
      path: 'text-barcode',
      loadChildren: () =>
        import('../../components/text-barcode/text-barcode.module').then(
          (m) => m.TextBarcodeModule
        ),
    },
    {
      path: 'smsBarcode',
      loadChildren: () =>
        import('../../components/sms-barcode/sms-barcode.module').then(
          (m) => m.SmsBarcodeModule
        ),
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateQrCodeRoutingModule {}
