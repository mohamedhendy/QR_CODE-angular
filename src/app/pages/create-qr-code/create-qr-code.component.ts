import { Component, OnInit } from '@angular/core';
import { UrlService } from 'src/app/services/url/url.service';
@Component({
  selector: 'app-create-qr-code',
  templateUrl: './create-qr-code.component.html',
  styleUrls: ['./create-qr-code.component.scss']
})
export class CreateQrCodeComponent implements OnInit {
  constructor(private urlServices:UrlService ) { }
  showClass = false;
  ngOnInit(): void {
    this.urlServices.showBarcodeClass.subscribe(res => this.showClass = res)
  }

}
