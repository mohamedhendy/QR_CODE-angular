import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { UrlService } from 'src/app/services/url/url.service';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-url-barcode',
  templateUrl: './url-barcode.component.html',
  styleUrls: ['./url-barcode.component.scss']
})
export class UrlBarcodeComponent implements OnInit {
  message:any;
  imageID:any = '';
  staticCase = true;
  nameRoute = "generate/qrcd/url";
  URL_REGEXP = /^((ftp|http|https):\/\/)?www\.([A-z]+)\.([A-z]{2,})/;
  constructor( private urlF: FormBuilder,private urlServices:UrlService ) { }




  urlForm = this.urlF.group({
    url: ['', [Validators.required ,Validators.pattern(this.URL_REGEXP)]],
    name: [''],
    tags: [''],
    qrPlace: [''],
    dynamicUrl: [''],
    staticUrl: [''],
    
    })

 
  @ViewChild('URL') URL: ElementRef | undefined;
  @ViewChild('static') static: ElementRef | undefined;
  ngOnInit(): void {
    this.urlServices.currentMessage.subscribe(message => this.message = message);
    this.urlServices.imageID.subscribe(res => this.imageID = res)
  }
  changeForm() {
    this.staticCase =  !this.staticCase;
  }
  staticUrl() {
    this.nameRoute = "generate/qrcd/url-static";
  }
  dynamicUrl() {
    this.nameRoute = "generate/qrcd/url";
  }
  getUrlQRCode() {
    
    if (this.URL?.nativeElement.classList.contains('ng-valid')) {
      var self = this;
      var body =  this.urlForm.value;
        this.urlForm.value.tags = (this.urlForm.value.tags).split(' ');
      localStorage.setItem('urlCode',JSON.stringify(body))
      localStorage.removeItem('all_requests')
      localStorage.removeItem('designData')
      localStorage.setItem('dd','true')
  
      this.urlServices.getData(body, this.nameRoute);
 
    }
  }
  
  updateUrl() {
      
    // var body =  {name: this.urlForm.value.name, tags: this.urlForm.value.tags};
    var body =  {name: this.urlForm.value.name, tags: (this.urlForm.value.tags).split(' ')};
    console.log(body);
      this.urlServices.updateData(body);
     setTimeout(() => {
      this.urlServices.changeMessage(); 
     },500)
  }                            
  onSubmit() {
    console.warn(this.urlForm.value);
   
  }
  showBarcode() {
    this.urlServices.showBarcode()
  }

  
}
