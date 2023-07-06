import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { UrlService } from 'src/app/services/url/url.service';

@Component({
  selector: 'app-youtube-barcode',
  templateUrl: './youtube-barcode.component.html',
  styleUrls: ['./youtube-barcode.component.scss'],
})
export class YoutubeBarcodeComponent implements OnInit {
  message: any;
  imageID: any = '';
  URL_REGEXP =
    /(?:(?:http|https):\/\/)?(?:www\.)?(?:youtube\.com)\/([A-Za-z0-9-_\.]+)/;
  constructor(private insta: FormBuilder, private urlServices: UrlService) {}

  barcodeForm = this.insta.group({
    videoID: ['', ],
    url: ['', [Validators.required, Validators.pattern(this.URL_REGEXP)]],
    tags: ['', ],
    qrPlace: ['', ],
    dynamicUrl: ['', ],
    staticUrl: ['', ],
  });
  ngOnInit(): void {
    this.urlServices.currentMessage.subscribe(
      (message) => (this.message = message)
    );
    this.urlServices.imageID.subscribe((res) => (this.imageID = res));
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
    var body = { tags: this.barcodeForm.value.tags.split(' ') };
    console.log(body);

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
    this.urlServices.showBarcode();
  }
}
