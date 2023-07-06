import { Component, OnInit } from '@angular/core';
import { UrlService } from 'src/app/services/url/url.service';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
@Component({
  selector: 'app-invoice-text',
  templateUrl: './invoice-text.component.html',
  styleUrls: ['./invoice-text.component.scss']
})
export class InvoiceTextComponent implements OnInit {

  QRImage: any;
  requestBody:any;
  QRImageID: any;
  message: any;
  imageID: any = '';
  billerCard: boolean = true;
  invoice_date = new Date().toDateString();
  bill_sellerName:any = ''
  bill_sellerBuildingNumber:any = ''
  bill_sellerStreet:any = ''
  bill_sellerDistrict:any = ''
  bill_sellerCity:any = ''
  bill_sellerCountry:any = ''
  bill_sellerPostCode:any = ''
  bill_sellerAdditionNumber:any = ''
  bill_sellerVatNumber:any = ''
  bill_sellerId:any = ''
  bill_buyerName:any = ''
  bill_buyerShipName:any = ''
  bill_buyerDeliveryReference:any = ''
  bill_buyerPoReference:any = ''
  bill_buyerCity:any = ''
  bill_buyerCountry:any = ''
  bill_buyerPostalCode:any = ''
  bill_buyerAdditionNumber:any = ''
  bill_buyerVatNumber:any = ''
  bill_buyerId:any = ''
  bill_invoiceTotalExcludingVat:any = ''
  bill_invoiceDiscount:any = ''
  bill_invoiceTotalTaxableAmount:any = ''
  bill_invoiceTotalVat15:any = ''
  bill_invoiceTotalAmountDue:any = ''
  bill_invoiceAmountInWords:any = ''
  constructor(private http: HttpClient,private urlServices:UrlService,private sanitizer: DomSanitizer ) { }
  ngOnInit(): void {
    this.urlServices.saveInvoiceData()
    this.urlServices.currentMessage.subscribe(message => this.message = this.sanitizer.bypassSecurityTrustHtml(message));
    this.urlServices.currentInvoiceBody.subscribe(res => this.bill_sellerName = res.bill_sellerName)
    this.urlServices.currentInvoiceBody.subscribe(res => this.bill_sellerBuildingNumber = res.bill_sellerBuildingNumber)
    this.urlServices.currentInvoiceBody.subscribe(res => this.bill_sellerStreet = res.bill_sellerStreet)
    this.urlServices.currentInvoiceBody.subscribe(res => this.bill_sellerDistrict = res.bill_sellerDistrict)
    this.urlServices.currentInvoiceBody.subscribe(res => this.bill_sellerCity = res.bill_sellerCity)
    this.urlServices.currentInvoiceBody.subscribe(res => this.bill_sellerCountry = res.bill_sellerCountry)
    this.urlServices.currentInvoiceBody.subscribe(res => this.bill_sellerPostCode = res.bill_sellerPostCode)
    this.urlServices.currentInvoiceBody.subscribe(res => this.bill_sellerAdditionNumber = res.bill_sellerAdditionNumber)
    this.urlServices.currentInvoiceBody.subscribe(res => this.bill_sellerVatNumber = res.bill_sellerVatNumber)
    this.urlServices.currentInvoiceBody.subscribe(res => this.bill_sellerId = res.bill_sellerId)
    this.urlServices.currentInvoiceBody.subscribe(res => this.bill_buyerName = res.bill_buyerName)
    this.urlServices.currentInvoiceBody.subscribe(res => this.bill_buyerShipName = res.bill_buyerShipName)
    this.urlServices.currentInvoiceBody.subscribe(res => this.bill_buyerDeliveryReference = res.bill_buyerDeliveryReference)
    this.urlServices.currentInvoiceBody.subscribe(res => this.bill_buyerPoReference = res.bill_buyerPoReference)
    this.urlServices.currentInvoiceBody.subscribe(res => this.bill_buyerCity = res.bill_buyerCity)
    this.urlServices.currentInvoiceBody.subscribe(res => this.bill_buyerCountry = res.bill_buyerCountry)
    this.urlServices.currentInvoiceBody.subscribe(res => this.bill_buyerPostalCode = res.bill_buyerPostalCode)
    this.urlServices.currentInvoiceBody.subscribe(res => this.bill_buyerAdditionNumber = res.bill_buyerAdditionNumber)
    this.urlServices.currentInvoiceBody.subscribe(res => this.bill_buyerVatNumber = res.bill_buyerVatNumber)
    this.urlServices.currentInvoiceBody.subscribe(res => this.bill_buyerId = res.bill_buyerId)
    this.urlServices.currentInvoiceBody.subscribe(res => this.bill_invoiceTotalExcludingVat = res.bill_invoiceTotalExcludingVat)
    this.urlServices.currentInvoiceBody.subscribe(res => this.bill_invoiceDiscount = res.bill_invoiceDiscount)
    this.urlServices.currentInvoiceBody.subscribe(res => this.bill_invoiceTotalTaxableAmount = res.bill_invoiceTotalTaxableAmount)
    this.urlServices.currentInvoiceBody.subscribe(res => this.bill_invoiceTotalVat15 = res.bill_invoiceTotalVat15)
    this.urlServices.currentInvoiceBody.subscribe(res => this.bill_invoiceTotalAmountDue = res.bill_invoiceTotalAmountDue)
    this.urlServices.currentInvoiceBody.subscribe(res => this.bill_invoiceAmountInWords = res.bill_invoiceAmountInWords)
  }

 
}
