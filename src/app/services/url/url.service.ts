import {  Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  [x: string]: any;
  constructor(private http: HttpClient,private router: Router) { }
  QRImage = '';
  QRImageID = '';
  designData:any = '';
  showClass = false
  private sourceRequestBody = new BehaviorSubject<any>('');
  currentRequestBody = this.sourceRequestBody.asObservable();
  private sourceInvoiceBody = new BehaviorSubject<any>('');
  currentInvoiceBody = this.sourceInvoiceBody.asObservable();
  private showBarcodeSource = new BehaviorSubject<any>('');
  showBarcodeClass = this.showBarcodeSource.asObservable();
  downloadClass = false
  private downloadBarcodeSource = new BehaviorSubject<any>('');
  downloadBarcodeClass = this.downloadBarcodeSource.asObservable();
  private messageSource = new BehaviorSubject<any>('');
  currentMessage = this.messageSource.asObservable();
  private imageSource = new BehaviorSubject<any>('');
  imageID = this.imageSource.asObservable();
  private patternDesignSource = new BehaviorSubject<any>('');
  patternDesign= this.patternDesignSource.asObservable();
  mData:any;
  getFileData(data:any, nameRoute:any) {
    var accessToken = localStorage.getItem('access-token')
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: String(accessToken)
      })
    };
    console.log(data);
    var body = JSON.stringify(data);
    console.log(data);
      
    return this.http.post('https://app.letsqr.com/api/' + nameRoute ,data, httpOptions ).subscribe( (result:any) => {
        console.log(result);
        this.QRImage = result.QRCode;
        console.log(result.QRCode._id);
        localStorage.setItem('file_id', result.QRCode._id)
        localStorage.setItem('file_URL', result.QRCode.requestBody.url)

        // this.QRImageID = result.QRCode._id
        this.changeMessage()
    },  error => {
      console.log(error);
      this.QRImage = ''
      // this.QRImageID = ''
    },() => {
      // No errors, route to new page here
    });
  }
  getData(data:any, nameRoute:any) {
    var accessToken = localStorage.getItem('access-token')
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: String(accessToken)
      })
    };
    console.log(data);
    var body = JSON.stringify(data);
    console.log(data);
      
    return this.http.post('https://app.letsqr.com/api/' + nameRoute ,data, httpOptions ).subscribe( (result:any) => {
        console.log(result);
        this.QRImage = result.QRCode;
        // this.QRImageID = result.QRCode._id
        this.changeMessage()
    },  error => {
      console.log(error);
      this.QRImage = ''
      // this.QRImageID = ''
    },() => {
      // No errors, route to new page here
    });
  }
  UPdateLink(data:any, ID:any) {
    var accessToken = localStorage.getItem('access-token')
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: String(accessToken)
      })
    };
    var body = JSON.stringify(data);
    console.log(ID);
    console.log(body);
    return this.http.put('https://app.letsqr.com/api/v3/update/qr/url/' + ID ,body, httpOptions ).subscribe( (result:any) => {
       console.log("success");
       console.log(result);
    },  error => {
      console.log(error);
    },() => {
      // No errors, route to new page here
    });
  }
  saveData(data:any, nameRoute:any) {
    var accessToken = localStorage.getItem('access-token')
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: String(accessToken)
      })
    };
    var body = JSON.stringify(data);
    
    return this.http.post('https://app.letsqr.com/api/' + nameRoute ,body, httpOptions ).subscribe( (result:any) => {
        console.log(result);
        this.QRImage = result.QRCode.qrImage;
        this.QRImageID = result.QRCode._id;
        console.log(this.QRImageID);
        this.changeMessage()
        this.downloadBarcodeSource.next(!this.downloadClass)
        localStorage.removeItem('exist')
    },  error => {
        if(error.error) {
          this.downloadBarcodeSource.next(this.downloadClass)
          localStorage.setItem('exist','true')
          
        }
      
    },() => {
      // No errors, route to new page here
    });
  }
  
  updateData(data:any) {
    var nameRoute = localStorage.getItem('nameRoute');
    var body = data;
    var putDesign = JSON.stringify(data)
    localStorage.setItem('designData', putDesign)
    var urlCode:any = localStorage.getItem('urlCode');
    var urlCodeObj = JSON.parse(urlCode);
    var mainUrlInfo = {...urlCodeObj, ...body}
    localStorage.setItem('all_requests', JSON.stringify(mainUrlInfo));
    console.log(mainUrlInfo);
    this.getData(mainUrlInfo, nameRoute);
 
  }

  saveBarcode() {
    var nameRoute:any = localStorage.getItem('nameRoute')?.split('/qrcd/');
    console.log(nameRoute );
    var nameRou = 'v2/' + nameRoute.join('/qr/')
    if(localStorage.getItem('all_requests')) {
      var mainUrlInfo:any = localStorage.getItem('all_requests');
      var parsDa = JSON.parse(mainUrlInfo);
      console.log(nameRou);
      console.log(mainUrlInfo)
      console.log(parsDa);
      
      this.saveData(parsDa, nameRou);
    } else {
      var mainUrlInfo:any = localStorage.getItem('urlCode');
      var parsDa = JSON.parse(mainUrlInfo);
      console.log(nameRou);
      console.log(mainUrlInfo)
      console.log(parsDa);
      this.saveData(parsDa, nameRou);
    }
  
  }
  saveCardBarcode() {
  }
  changeMessage() {
    
    this.downloadBarcodeSource.next(this.downloadClass)
    this.messageSource.next(this.QRImage)
    this.imageSource.next(this.QRImageID)
    // console.log(this.QRImageID);
  }
  changePatternDesign() {
    this.patternDesignSource.next(this.designData)
  }
  getDesignPatternData(designData:any) {
    this.patternDesignSource.next(designData)
  }

  showBarcode() {
    this.showClass = true
    this.showBarcodeSource.next(this.showClass)
  }
  showDownload() {
    this.downloadBarcodeSource.next(this.downloadClass)
    this.showClass = false
    this.showBarcodeSource.next(this.showClass)
  }



  saveBusinessData(data: any,body:any) {
    var accessToken = localStorage.getItem('access-token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: String(accessToken),
      }),
    };
    
    console.log(body);
    var dataT = JSON.stringify(body);
    console.log(dataT);

    var id = data;
    return this.http
      .post('https://app.letsqr.com/api/businesscard/' + id, dataT, httpOptions)
      .subscribe(
        (result: any) => {
          console.log(result);
          this.QRImage = result.post.qrImage;
          this.requestBody = result.post.requestBody;
          console.log(this.requestBody);
          this.messageSource.next(this.QRImage)
          this.sourceRequestBody.next(this.requestBody)
          var url = '/sharedBusinessCard/';
          this.router.navigate([url])
        },
        (error) => {
          if (error.error) {
            console.log(error);
          }
        },
        () => {
          // No errors, route to new page here
        }
      );
  }
  saveInvoiceData() {
    var url = this.router.url;
    var id = url.split('/')[2];
    var accessToken = localStorage.getItem('access-token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: String(accessToken),
      }),
    };
    
    return this.http
      .post('https://app.letsqr.com/api/bill/' + id, httpOptions)
      .subscribe(
        (result: any) => {
          console.log(result);
          this.QRImage = result.post.qrImage;
          this.requestBody = result.post;
          console.log(this.requestBody);
          
          this.sourceInvoiceBody.next(this.requestBody)
          this.saveInvoiceQRData(result.post)
          this.messageSource.next(this.QRImage)
        },
        (error) => {
          if (error.error) {
            console.log(error);
          }
        },
        () => {
          // No errors, route to new page here
        }
      );
  }

  saveInvoiceQRData(data:any) {
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
          this.QRImage = result.QRCode.json_qrImage;
          this.QRImageID = result.QRCode._id;
          this.messageSource.next(this.QRImage)
          this.imageSource.next(this.QRImageID)
        },
        (error) => {
          if (error.error) {
          }
        },
        () => {
          
        }
      );
  }

  
}



