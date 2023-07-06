import { Component, OnInit } from '@angular/core';
import { UrlService } from 'src/app/services/url/url.service';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.scss'],
})
export class BusinessCardComponent implements OnInit {
  constructor(private facebook: FormBuilder, private urlServices: UrlService,private http: HttpClient, private sanitizer: DomSanitizer, private router:Router) {}
  QRImage:any;
  QRImageID:any;
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
  nameC: any;
  mainURL:any = 'https://tonse.co/mhendy/Qr/#/shared_Card/';
  barcodeForm = this.facebook.group({
    name: ['your name'],
    title: [''],
    Company: ['Company'],
    address1: ['address1'],
    address2: ['address2'],
    address3: ['address3'],
    city: [''],
    country: [''],
    contact1: ['mobile'],
    contact2: [''],
    email1: ['Email'],
    email2: [''],
    website1: ['your site'],
    website2: [''],
    customURLsubdomain: [''],
    marker: "leaf"
  });
  ngOnInit(): void {
    this.urlServices.currentMessage.subscribe(
      (message) => (this.message = message)
    );
    this.urlServices.imageID.subscribe((res) => (this.imageID = res));
  }
  getUrlQRCode() {
    console.log(this.barcodeForm.value);
    var data = this.barcodeForm.value;
    var body = JSON.stringify(this.barcodeForm.value);
    localStorage.setItem('businessCard', body)
    this.saveData(data)
  }
  changeField(event: any) {
        this.message = this.barcodeForm.value.message;
        this.imageID = this.barcodeForm.value.imageID;
        this.name = this.barcodeForm.value.name;
        this.title = this.barcodeForm.value.title;
        this.company = this.barcodeForm.value.company;
        this.address1 = this.barcodeForm.value.address1;
        this.address2 = this.barcodeForm.value.address2;
        this.address3 = this.barcodeForm.value.address3;
        this.city = this.barcodeForm.value.city;
        this.country = this.barcodeForm.value.country;
        this.contact1 = this.barcodeForm.value.contact1;
        this.contact2 = this.barcodeForm.value.contact2;
        this.email1 = this.barcodeForm.value.email1;
        this.email2 = this.barcodeForm.value.email2;
        this.website1 = this.barcodeForm.value.website1;
        this.website2 = this.barcodeForm.value.website2;
        this.customURLsubdomain = this.barcodeForm.value.customURLsubdomain;
        this.nameC = this.barcodeForm.value.nameC;
  }
  onSubmit() {
    console.warn(this.barcodeForm.value);
  }

  saveData(data:any) {
    var accessToken = localStorage.getItem('access-token')
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: String(accessToken)
      })
    };
    var body = JSON.stringify(data);
    console.log(body);
    
    return this.http.post('https://app.letsqr.com/api/v2/generate/qr/bcard' ,body, httpOptions ).subscribe( (result:any) => {
        console.log(result);
        this.QRImage = result.QRCode.qrImage;
        this.QRImageID = result.QRCode._id;
        this.message = this.sanitizer.bypassSecurityTrustHtml(this.QRImage)
        console.log(this.QRImageID);
        var postID = result.QRCode.mypostId
        console.log(postID);
        
        var url = '/shared_Card/' + postID;
        this.mainURL = 'https://tonse.co/mhendy/Qr/#/shared_Card/' + postID;
        // this.router.navigate([url])
    },  error => {
        if(error.error) {
          
        }
      
    },() => {
      // No errors, route to new page here
    });
  }
  copyLink() {
    console.log(this.mainURL);
    
    navigator.clipboard.writeText(String(this.mainURL)).then().catch(e => console.error(e));
    
  }
}
