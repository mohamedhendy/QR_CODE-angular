import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { UrlService } from 'src/app/services/url/url.service';
@Component({
  selector: 'app-qrtype-buttons',
  templateUrl: './qrtype-buttons.component.html',
  styleUrls: ['./qrtype-buttons.component.scss'],
})
export class QRTypeButtonsComponent implements OnInit {
  selectedRoute: any;
  setActiveClass: any;
  SOCIAL = 'SOCIAL';
  FILES = 'FILES';
  CONTACT = 'CONTACT';
  trueCase = false;
  myPath = this.router.url;
  SCase= false;
  FCase= false;
  CCase= false;
  constructor(private router: Router,private urlService :UrlService) {}
  collapseBtn(data: any) {
    this.selectedRoute == data;
  }

  ngOnInit(): void {
    console.log(this.myPath);

    if (
      this.myPath.includes('smsBarcode') ||
      this.myPath.includes('text-barcode') ||
      this.myPath.includes('email-barcode') ||
      this.myPath.includes('phone-barcode') ||
      this.myPath.includes('vcard-barcode')
    ) {
      // this.check();
      this.setActiveClass = 'CONTACT';
      this.SCase = false;
      this.FCase= false;
      this.CCase= true;
    } else if (
      this.myPath.includes('pdf-barcode') ||
      this.myPath.includes('mp3-barcode')
    ) {
      this.setActiveClass = 'FILES';
      this.FCase = true;
      this.SCase = false;
      this.CCase= false;

    } else if (
      this.myPath.includes('instagramBarcode') ||
      this.myPath.includes('whatsppBarcode') ||
      this.myPath.includes('facebook-barcode') ||
      this.myPath.includes('youtube-barcode') ||
      this.myPath.includes('twitter-barcode') ||
      this.myPath.includes('linkedin-barcode') ||
      this.myPath.includes('skype-barcode')
    ) {
      this.setActiveClass = 'SOCIAL';
      this.CCase = false;
      this.FCase = false;
      this.SCase = true;
    }
    console.log(this.setActiveClass);
  }
  check() {
    console.log('right');
  }
  hideQrDownload() {
    
    this.urlService.showDownload()
  }

  setRouteName(data:any) {
    localStorage.setItem('nameRoute', data)
  }
}
