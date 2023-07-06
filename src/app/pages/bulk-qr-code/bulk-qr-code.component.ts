import { Component, OnInit } from '@angular/core';
import { UrlService } from 'src/app/services/url/url.service';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-bulk-qr-code',
  templateUrl: './bulk-qr-code.component.html',
  styleUrls: ['./bulk-qr-code.component.scss']
})
export class BulkQrCodeComponent implements OnInit {

  message:any;
  imageID:any = '';
  fileToUpload: any;
  self = this;
  staticCase = true;

  formData: any = new FormData();
  constructor( private mp3: FormBuilder, private urlServices:UrlService ) { }

  barcodeForm = this.mp3.group({
    name: ['', ],
    file: ['', Validators.required ],
    tags: ['', ],
    qrPlace: ['', ],
    dynamicUrl: ['', ],
    staticUrl: ['', ],
    
    })
    ngOnInit(): void {
      this.urlServices.currentMessage.subscribe(message => this.message = message);
      this.urlServices.imageID.subscribe(res => this.imageID = res)
    }
    changeForm() {
      this.staticCase =  !this.staticCase;
    }
    handleFileInput(files: any) {
      console.log(files.files[0]);
  
      var gg = files.files.item(0);
      console.log(gg);
      console.log(this.barcodeForm.value);
      this.barcodeForm.value.file = gg;
      this.formData.append(
        'file',
        this.barcodeForm.value.file,
        this.barcodeForm.value.file.name
      );
      console.log(this.barcodeForm.value);
      this.getUrlQRCode();
    }
  
    getUrlQRCode() {
      this.barcodeForm.value.file = this.formData;
      var body = this.formData;
      console.log(body);
      var nameRoute = 'v3/csv';
      localStorage.removeItem('all_requests');
      localStorage.removeItem('designData');
      localStorage.setItem('dd', 'true');
      this.urlServices.getFileData(body, nameRoute);
      setTimeout(() => {
        this.urlServices.changeMessage();
      }, 500);
    }
    updateUrl() {
      var body: any = {
        name: this.barcodeForm.value.name,
        tags: this.barcodeForm.value.tags.split(' '),
        url :  localStorage.getItem('file_URL')
          };
      console.log(body);
      var fakeBody = JSON.stringify(body);
      localStorage.setItem('urlCode', fakeBody);
      var directions = 'v3/update/qr/url/' + this.imageID;
      this.urlServices.updateData(body);
      setTimeout(() => {
        this.urlServices.changeMessage();
      }, 500);
    }
      
  onSubmit() {
    console.warn(this.barcodeForm.value);
  }
  showBarcode() {
    this.urlServices.showBarcode()
  }

}
