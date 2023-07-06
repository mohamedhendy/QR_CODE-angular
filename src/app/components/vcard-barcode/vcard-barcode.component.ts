import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { UrlService } from 'src/app/services/url/url.service';

@Component({
  selector: 'app-vcard-barcode',
  templateUrl: './vcard-barcode.component.html',
  styleUrls: ['./vcard-barcode.component.scss']
})
export class VcardBarcodeComponent implements OnInit {
  message:any;
  imageID:any = '';
 constructor( private facebook: FormBuilder, private urlServices:UrlService ) { }

  barcodeForm = this.facebook.group({
    title: ['', ],
    suffix: ['', ],
    fName: ['', Validators.required],
    lName: ['', ],
    jobTitle: ['', ],
    company: ['', ],
    email: ['', ],
    website: ['', ],
    mobile: ['', ],
    cell: ['', ],
    address: ['', ],
    fax: ['', ],
    business: ['', ],
    postalCode: ['', ],
    street: ['', ],
    city: ['', ],
    state: ['', ],
    country: ['', ],
    note: ['', ],
    tags: [''],
    qrPlace: [''],
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
    var body =  {
      tags: (this.barcodeForm.value.tags).split(' '),
      title : this.barcodeForm.value.title,
      lName : this.barcodeForm.value.lName,
      jobTitle : this.barcodeForm.value.jobTitle,
      company : this.barcodeForm.value.company,
      email : this.barcodeForm.value.email,
      mobile : this.barcodeForm.value.mobile,
      cell : this.barcodeForm.value.cell,
      address : this.barcodeForm.value.address,
      postalCode : this.barcodeForm.value.postalCode,
      city : this.barcodeForm.value.city,
      state : this.barcodeForm.value.state,
      country : this.barcodeForm.value.country,
      };
    console.log(body);
    
      var directions = "v3/update/qr/url/" + this.imageID
      this.urlServices.updateData(body);
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