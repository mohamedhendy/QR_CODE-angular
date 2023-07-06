import { Component, OnInit } from '@angular/core';
import { UrlService } from 'src/app/services/url/url.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {
  DomSanitizer,
  SafeResourceUrl,
  SafeUrl,
} from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-biller-qr',
  templateUrl: './biller-qr.component.html',
  styleUrls: ['./biller-qr.component.scss'],
})
export class BillerQrComponent implements OnInit {
  constructor(
    private facebook: FormBuilder,
    private urlServices: UrlService,
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    private router: Router
  ) {}
  QRImage: any;
  QRImageID: any;
  message: any;
  imageID: any = '';
  postID:any;
  billerCard: boolean = true;
  invoice_date = new Date().toDateString();
  bill_sellerName: any;
  bill_sellerBuildingNumber: any;
  bill_sellerStreet: any;
  bill_sellerDistrict: any;
  bill_sellerCity: any;
  bill_sellerCountry: any;
  bill_sellerPostCode: any;
  bill_sellerAdditionNumber: any;
  bill_sellerVatNumber: any;
  bill_sellerId: any;
  bill_buyerName: any;
  bill_buyerShipName: any;
  bill_buyerDeliveryReference: any;
  bill_buyerPoReference: any;
  bill_buyerCity: any;
  bill_buyerCountry: any;
  bill_buyerPostalCode: any;
  bill_buyerAdditionNumber: any;
  bill_buyerVatNumber: any;
  bill_buyerId: any;
  bill_invoiceTotalExcludingVat: any;
  bill_invoiceDiscount: any;
  bill_invoiceTotalTaxableAmount: any;
  bill_invoiceTotalVat15: any;
  bill_invoiceTotalAmountDue: any;
  bill_invoiceAmountInWords: any;
  step1 =  false;
  step2 =  true;
  DownloadPng:any
  downloadLink:string = 'https://app.letsqr.com/api/v2/download/'
  step3 =  true;
  nameC: any;
  mainURL: any = 'https://tonse.co/mhendy/Qr/#/shared_Card/';
  barcodeForm = this.facebook.group({
    bill_sellerName: ['name', Validators.required],
    bill_sellerBuildingNumber: [''],
    bill_sellerStreet: [''],
    bill_sellerDistrict: [''],
    bill_sellerCity: [''],
    bill_sellerCountry: [''],
    bill_sellerPostCode: [''],
    bill_sellerAdditionNumber: [''],
    bill_sellerVatNumber: [''],
    bill_sellerId: [''],
    bill_buyerName: [''],
    bill_buyerShipName: [''],
    bill_buyerDeliveryReference: [''],
    bill_buyerPoReference: [''],
    bill_buyerCity: [''],
    bill_buyerCountry: [''],
    bill_buyerPostalCode: [''],
    bill_buyerAdditionNumber: [''],
    bill_buyerVatNumber: [''],
    bill_buyerId: [''],
    bill_invoiceTotalExcludingVat: [''],
    bill_invoiceDiscount: [''],
    bill_invoiceTotalTaxableAmount: [''],
    bill_invoiceTotalVat15: [''],
    bill_invoiceTotalAmountDue: [''],
    bill_invoiceAmountInWords: [''],
    marker: "leaf",
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
    localStorage.setItem('billerCard', body);
    this.saveData(data);
  }
  changeField(event: any) {
        this.bill_sellerName = this.barcodeForm.value.bill_sellerName ;
        this.bill_sellerBuildingNumber = this.barcodeForm.value.bill_sellerBuildingNumber ;
        this.bill_sellerStreet = this.barcodeForm.value.bill_sellerStreet ;
        this.bill_sellerDistrict = this.barcodeForm.value.bill_sellerDistrict ;
        this.bill_sellerCity = this.barcodeForm.value.bill_sellerCity ;
        this.bill_sellerCountry = this.barcodeForm.value.bill_sellerCountry ;
        this.bill_sellerPostCode = this.barcodeForm.value.bill_sellerPostCode ;
        this.bill_sellerAdditionNumber = this.barcodeForm.value.bill_sellerAdditionNumber ;
        this.bill_sellerVatNumber = this.barcodeForm.value.bill_sellerVatNumber ;
        this.bill_sellerId = this.barcodeForm.value.bill_sellerId ;
        this.bill_buyerName = this.barcodeForm.value.bill_buyerName ;
        this.bill_buyerShipName = this.barcodeForm.value.bill_buyerShipName ;
        this.bill_buyerDeliveryReference = this.barcodeForm.value.bill_buyerDeliveryReference ;
        this.bill_buyerPoReference = this.barcodeForm.value.bill_buyerPoReference ;
        this.bill_buyerCity = this.barcodeForm.value.bill_buyerCity ;
        this.bill_buyerCountry = this.barcodeForm.value.bill_buyerCountry ;
        this.bill_buyerPostalCode = this.barcodeForm.value.bill_buyerPostalCode ;
        this.bill_buyerAdditionNumber = this.barcodeForm.value.bill_buyerAdditionNumber ;
        this.bill_buyerVatNumber = this.barcodeForm.value.bill_buyerVatNumber ;
        this.bill_buyerId = this.barcodeForm.value.bill_buyerId ;
        this.bill_invoiceTotalExcludingVat = this.barcodeForm.value.bill_invoiceTotalExcludingVat ;
        this.bill_invoiceDiscount = this.barcodeForm.value.bill_invoiceDiscount ;
        this.bill_invoiceTotalTaxableAmount = this.barcodeForm.value.bill_invoiceTotalTaxableAmount ;
        this.bill_invoiceTotalVat15 = this.barcodeForm.value.bill_invoiceTotalVat15 ;
        this.bill_invoiceTotalAmountDue = this.barcodeForm.value.bill_invoiceTotalAmountDue ;
        this.bill_invoiceAmountInWords = this.barcodeForm.value.bill_invoiceAmountInWords ;
      
  }
  onSubmit() {
    console.warn(this.barcodeForm.value);
  }

  saveData(data: any) {
    var accessToken = localStorage.getItem('access-token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: String(accessToken),
      }),
    };
    var body = JSON.stringify(data);
    console.log(body);

    return this.http
      .post(
        'https://app.letsqr.com/api/v2/generate/qr/bill',
        body,
        httpOptions
      )
      .subscribe(
        (result: any) => {
          console.log(result);
          this.QRImage = result.QRCode.qrImage;
          this.QRImageID = result.QRCode._id;
          this.imageID = result.QRCode._id;
          this.message = this.sanitizer.bypassSecurityTrustHtml(this.QRImage);
          console.log(this.QRImageID);
          this.postID = result.QRCode.mypostId;
          this.DownloadPng = this.downloadLink + 'png/' + this.imageID
          this.billerCard = false;
          
        },
        (error) => {
          if (error.error) {
          }
        },
        () => {
          
        }
      );
  }
  copyLink(text:any) {
    this.mainURL = 'https://tonse.co/mhendy/Qr/#/' + text + '/' + this.postID;
    console.log(this.mainURL);
    navigator.clipboard
      .writeText(String(this.mainURL))
      .then()
      .catch((e) => console.error(e));
  }

  prev(data:any) {
    if (data == 1) {
      this.step1 = false;
      this.step2 = true;
      this.step3 = true;
    } else if (data == 2) {
      this.step1 = true;
      this.step2 = false;
      this.step3 = true;
    }
    
  }
  next(data:any) {
    if (data == 1) {
      this.step1 = true;
      this.step2 = false;
      this.step3 = true;
    } else if (data == 2) {
      this.step1 = true;
      this.step2 = true;
      this.step3 = false;
    }
   
    
  }
}
