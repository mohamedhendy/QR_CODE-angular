import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { UrlService } from 'src/app/services/url/url.service';
@Component({
  selector: 'app-whatsapp-barcode',
  templateUrl: './whatsapp-barcode.component.html',
  styleUrls: ['./whatsapp-barcode.component.scss']
})
export class WhatsappBarcodeComponent implements OnInit {
  message:any;
  imageID:any = '';
  constructor( private insta: FormBuilder , private urlServices:UrlService ) { }

  instaForm = this.insta.group({
    phoneNumber: ['', Validators.required],
    whatsappBody: ['', ],
    internationalCode: ['',  Validators.required],
    tags: ['', ],
    qrPlace: ['', ],
    dynamicUrl: ['', ],
    staticUrl: ['', ],
    })
    ngOnInit(): void {
      this.urlServices.currentMessage.subscribe(message => this.message = message);
      this.urlServices.imageID.subscribe(res => this.imageID = res)
    }
    getUrlQRCode() {
      var nameRoute = localStorage.getItem('nameRoute');
      var body =  this.instaForm.value;
    this.instaForm.value.tags = (this.instaForm.value.tags).split(' ');

      localStorage.setItem('urlCode',JSON.stringify(body))
      localStorage.removeItem('all_requests')
      localStorage.removeItem('designData')
      localStorage.setItem('dd','true')
      this.urlServices.getData(body, nameRoute);
    }
    updateUrl() {
      var body =  {name: this.instaForm.value.whatsappBody, tags: (this.instaForm.value.tags).split(' ') };
      console.log(body);
      
         var directions = "v3/update/qr/url/" + this.imageID
        // this.urlServices.updateData(body);
       setTimeout(() => {
        this.urlServices.changeMessage(); 
       },500)
    }   
  onSubmit() {
    console.warn(this.instaForm.value);
  }
  showBarcode() {
    this.urlServices.showBarcode()
  }
}
