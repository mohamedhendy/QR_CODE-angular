import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { UrlService } from 'src/app/services/url/url.service';
@Component({
  selector: 'app-text-barcode',
  templateUrl: './text-barcode.component.html',
  styleUrls: ['./text-barcode.component.scss']
})
export class TextBarcodeComponent implements OnInit {
  message:any;
  imageID:any = '';
constructor( private text: FormBuilder, private urlServices:UrlService ) { }

  barcodeForm = this.text.group({
    text: ['', Validators.required],
    tags: ['', ],
    message: ['', ],
    dynamicUrl: ['', ],
    qrPlace: ['', ],
    })
    ngOnInit(): void {
      this.urlServices.currentMessage.subscribe(message => this.message = message);
      this.urlServices.imageID.subscribe(res => this.imageID = res)
    }
    getUrlQRCode() {
      var nameRoute = localStorage.getItem('nameRoute');
      var body =  this.barcodeForm.value;
    this.barcodeForm.value.tags = (this.barcodeForm.value.tags).split(' ');

      localStorage.setItem('urlCode',JSON.stringify(body))
      localStorage.removeItem('all_requests')
      localStorage.removeItem('designData')
      localStorage.setItem('dd','true')
      this.urlServices.getData(body, nameRoute);
    }
    updateUrl() {
      var body =  { tags: (this.barcodeForm.value.tags).split(' ')};
      console.log(body);
      
         var directions = "v3/update/qr/url/" + this.imageID
        // this.urlServices.updateData(body);
       setTimeout(() => {
        this.urlServices.changeMessage(); 
       },500)
    }  
  onSubmit() {
    console.warn(this.barcodeForm.value);
  }
  showBarcode() {
    this.urlServices.showBarcode()
  }
}
