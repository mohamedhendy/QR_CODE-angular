import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UrlService } from 'src/app/services/url/url.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import { Router } from '@angular/router';
@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.component.html',
  styleUrls: ['./barcode.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BarcodeComponent implements OnInit {

  hide = false
  showCase = false
  hideCode = false
  constructor(private urlServices:UrlService,private sanitizer: DomSanitizer) { }
  MainImg = localStorage.getItem('barcodeImg');
  message:any;  
  IMAGE_ID:any;
  downloadLink:string = 'https://app.letsqr.com/api/v2/download/'
  DownloadPng:any;
  DownloadSvg:any;
  DownloadPdf:any;
  ngOnInit(): void {
    this.urlServices.currentMessage.subscribe(message => this.message = this.sanitizer.bypassSecurityTrustHtml(message))
    this.urlServices.imageID.subscribe(data => this.DownloadPng = this.downloadLink + 'png/' + data);
    this.urlServices.imageID.subscribe(data => this.DownloadSvg = this.downloadLink + 'svg/' + data);
    this.urlServices.imageID.subscribe(data => this.DownloadPdf = this.downloadLink + 'pdf/' + data);
    this.urlServices.downloadBarcodeClass.subscribe(data => this.hide = data);
    this.urlServices.downloadBarcodeClass.subscribe(data => this.showCase = data);
  }
  show() {
    this.urlServices.saveBarcode()
      setTimeout(() => {
        if( localStorage.getItem('exist')) {
          this.hideCode = true;
        } else {
          this.hideCode = false;
          
        }
      },500)
  }
}
