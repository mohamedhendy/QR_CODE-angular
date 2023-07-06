import { Component, OnInit } from '@angular/core';

import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { UrlService } from 'src/app/services/url/url.service';
@Component({
  selector: 'app-design-barcode',
  templateUrl: './design-barcode.component.html',
  styleUrls: ['./design-barcode.component.scss'],
})
export class DesignBarcodeComponent implements OnInit {
  designData: any;
  base64textString: String = '';
  constructor(
    private designFormF: FormBuilder,
    private urlServices: UrlService
  ) {}
  designForm = this.designFormF.group({
    frontcolor: [''],
    backcolor: [''],
    radial: [''],
    gradient: [''],
    gradient_color: [''],
    pattern: [''],
    marker: [''],
    marker_in: [''],
    optionlogo: [''],
    outer_frame: [''],
    no_logo_bg: [''],
    transparent: [''],
  });

  handleFileSelect(evt: any) {
    var files = evt.target.files;
    var file = files[0];
    if (files && file) {
      var reader = new FileReader();
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
    
  }

  handleReaderLoaded(readerEvt: any) {
    var binaryString = readerEvt.target.result;
    this.base64textString = "data:image/png;base64," + btoa(binaryString);
    // console.log(this.base64textString);
    this.designForm.value.optionlogo = this.base64textString
    this.getImage(this.designForm.value);
  }
  resetform() {
    if (localStorage.getItem('dd')) {
      localStorage.getItem('dd')
      this.designForm.controls['frontcolor'].reset()
      this.designForm.controls['backcolor'].reset()
      this.designForm.controls['radial'].reset()
      this.designForm.controls['gradient'].reset()
      this.designForm.controls['gradient_color'].reset()
      this.designForm.controls['pattern'].reset()
      this.designForm.controls['marker'].reset()
      this.designForm.controls['marker_in'].reset()
      this.designForm.controls['optionlogo'].reset()
      this.designForm.controls['outer_frame'].reset()
      this.designForm.controls['no_logo_bg'].reset()
      this.designForm.controls['transparent'].reset()
      localStorage.removeItem('dd')
     
    //  this.designForm.reset()
    }  

  }
  onChange() {
    
    console.log(this.designForm.value);
    this.designForm.value.optionlogo = this.base64textString
    this.getImage(this.designForm.value);
  }
  getImage(data: any) {
   
    
    // var imageID = localStorage.getItem('imageID');
    this.urlServices.getDesignPatternData(data);
    // var nameRoute = 'v3/update/qr/url/' + imageID;
    this.urlServices.updateData(this.designData);
    console.log(this.designData);
  }
  changeTr() {
    this.designForm.value.transparent = false
  }
  changeTC() {
    this.designForm.value.transparent = true;
  }
  onSubmit() {
    console.warn(this.designForm.value);
  }

  ngOnInit(): void {
    this.urlServices.patternDesign.subscribe(
      (res) => (this.designData = this.designForm.value)
    );
  }
}
