import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { UrlService } from 'src/app/services/url/url.service';

@Component({
  selector: 'app-sms-barcode',
  templateUrl: './sms-barcode.component.html',
  styleUrls: ['./sms-barcode.component.scss']
})
export class SmsBarcodeComponent implements OnInit {
  message:any;
  imageID:any = '';
  constructor( private email: FormBuilder, private urlServices:UrlService ) { }

  barcodeForm = this.email.group({
    phoneNumber: ['', Validators.required],
    internationalCode: ['',Validators.required ],
    tags: [''],
    message: [''],
    qrPlace: [''],
    })
    ngOnInit(): void {
      this.urlServices.currentMessage.subscribe(message => this.message = message);
      this.urlServices.imageID.subscribe(res => this.imageID = res)
    }
    getUrlQRCode() {
      var body =  this.barcodeForm.value;
      console.log(body);
      
      var nameRoute = "generate/qrcd/sms";
      this.urlServices.getData(body, nameRoute);
      setTimeout(() => {
        this.urlServices.changeMessage(); 
       },500)
    }
    updateUrl() {
      var nameRoute = localStorage.getItem('nameRoute');
      var body =  this.barcodeForm.value;
    this.barcodeForm.value.tags = (this.barcodeForm.value.tags).split(' ');

      localStorage.setItem('urlCode',JSON.stringify(body))
      localStorage.removeItem('all_requests')
      localStorage.removeItem('designData')
      localStorage.setItem('dd','true')
      this.urlServices.getData(body, nameRoute);
    } 
  onSubmit() {
    console.warn(this.barcodeForm.value);
  }
  showBarcode() {
    this.urlServices.showBarcode()
  }
}
