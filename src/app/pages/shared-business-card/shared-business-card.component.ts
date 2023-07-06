import { Component, OnInit } from '@angular/core';
import { UrlService } from 'src/app/services/url/url.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
@Component({
  selector: 'app-shared-business-card',
  templateUrl: './shared-business-card.component.html',
  styleUrls: ['./shared-business-card.component.scss']
})
export class SharedBusinessCardComponent implements OnInit {
  QRImage:any;
  QRImageID:any;
  requestBody:any;
  message: any;
  imageID: any = '';
  name: any = 'your name';
  title: any = 'Title';
  company: any = 'Company';
  address1: any = 'address1';
  address2: any = 'address2';
  address3: any = 'address3';
  city: any;
  country: any;
  contact1: any = 'mobile';
  contact2: any = 'phone';
  email1: any= 'Email';
  email2: any;
  website1: any = 'your site';
  website2: any;
  customURLsubdomain: any;
  constructor(private urlServices:UrlService,private sanitizer: DomSanitizer ) { }

  ngOnInit(): void {
    this.urlServices.currentMessage.subscribe(message => this.message = this.sanitizer.bypassSecurityTrustHtml(message));
    this.urlServices.currentRequestBody.subscribe(res => {
      this.name = res.bcard_name 
      console.log(res);
      
    })
    this.urlServices.currentRequestBody.subscribe(res => this.title = res.bcard_title)
    this.urlServices.currentRequestBody.subscribe(res => this.company = res.bcard_company)
    this.urlServices.currentRequestBody.subscribe(res => this.address1 = res.bcard_address1)
    this.urlServices.currentRequestBody.subscribe(res => this.address2 = res.bcard_address2)
    this.urlServices.currentRequestBody.subscribe(res => this.address3 = res.bcard_address3)
    this.urlServices.currentRequestBody.subscribe(res => this.city = res.bcard_city)
    this.urlServices.currentRequestBody.subscribe(res => this.country = res.bcard_country)
    this.urlServices.currentRequestBody.subscribe(res => this.contact1 = res.bcard_contact1)
    this.urlServices.currentRequestBody.subscribe(res => this.contact2 = res.bcard_contact2)
    this.urlServices.currentRequestBody.subscribe(res => this.email1 = res.bcard_email1)
    this.urlServices.currentRequestBody.subscribe(res => this.email2 = res.bcard_email2)
    this.urlServices.currentRequestBody.subscribe(res => this.website1 = res.bcard_website1)
    this.urlServices.currentRequestBody.subscribe(res => this.website2 = res.bcard_website2)
    this.urlServices.currentRequestBody.subscribe(res => this.customURLsubdomain = res.bcard_customURLsubdomain)
  
  }

}
