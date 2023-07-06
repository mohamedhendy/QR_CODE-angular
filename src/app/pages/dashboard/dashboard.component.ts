import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';  
import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { UrlService } from 'src/app/services/url/url.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['/dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  dashboardData:any;
  qr_lenth:any;
  scans = 0;
  page = 1;
  pageNum = 10;
  search = '';
  i=1;
  dataDate:any;
  URLSelected:any = '';
  sQrImage:any;
  companyId:any;
  updatedAt:any;
  lastScans:any;
  currentScansNumber: any;
  singleScans:any = [];
  singleTableScans:any = [];
  MTags:any = ''
  p: number = 1;
  tags:any;
  setActiveClass:any;
  qrCodeId:any;
  indexQr:any = [];
  accessToken = localStorage.getItem('access-token')
  showScanResult:boolean = true;
  hideCase:boolean = true;
  showResult:any;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: String(this.accessToken)
    })
  };
  handlePageChange(event:any) {
    this.page = event;
  }
  constructor( private router: Router, private http: HttpClient, private dashboardServices:DashboardService,private urlF: FormBuilder,private urlServices:UrlService ) { }
  urlForm = this.urlF.group({
    url: [ [this.URLSelected]],
    })



    updateURLCode() {
      var body =  this.urlForm.value;
        var ID =  this.qrCodeId;
        this.urlServices.UPdateLink(body, ID);
    }   


  ngOnInit(): void {
    this.dashboardServices.currentData.subscribe(res => {

      this.dashboardData = res
    });
    this.dashboardServices.currentData.subscribe(res => this.qr_lenth = res.length);
    this.dashboardServices.currentScans.subscribe(scans => this.scans = scans);
    this.dashboardServices.currentSingleScan.subscribe(scans => this.singleTableScans = scans);
    this.dashboardServices.currentTags.subscribe(scans => this.MTags = scans);
    this.getDate()
    this.dashboardServices.currentBolCase.subscribe(res => {
      this.showResult = res
    });
    this.router.onSameUrlNavigation = 'reload'
  }
  
  getDate() {
    this.dashboardServices.getRequest();
    this.dashboardServices.getScans();
    
    
  }
  

  checkActiveClass(i:any) {
    this.setActiveClass = i;
  }
  changeV(data:any) {
    
    this.URLSelected = data.requestBody.url;
    this.urlForm.value.url = this.URLSelected
    this.urlForm.patchValue({
      url: this.URLSelected
    })
    
  }
  showScansRequest(event:any,data?:any) {
    this.hideCase = false
    event.preventDefault()
    event.stopPropagation()
    
    this.qrCodeId = data._id;
    
    this.tags = data.tags
    this.companyId = data.companyId
    this.updatedAt = data.updatedAt
    this.dataDate = data.createdAt
    this.sQrImage = data.qrImage
    this.URLSelected = data.requestBody.url
      return this.http.get(`https://app.letsqr.com/api/v2/all/request?qrCodeId=${this.qrCodeId}`,this.httpOptions).subscribe((result:any) => {
         this.lastScans = result.docs;
        this.currentScansNumber = result.checkedRequestToltalCount;
       
      }, error => {
       
      })
  }
  deleteQr(event:any,data?:any) {
    event.preventDefault()
    event.stopPropagation()
    var ID = data._id;
    
      return this.http.get(`https://app.letsqr.com/api/post/${ID}`,this.httpOptions).subscribe((result:any) => {
       
      }, error => {
        
      })
  }
  
  filterSearch() {
    return this.http.get(`https://app.letsqr.com/api/all/posts?globalSearch=${this.search}`,this.httpOptions).subscribe((result:any) => {

      this.dashboardData = result.docs
      this.qr_lenth = result.docs.length
    }, error => {
     
    })
  }

  filterTags(data:any) {
    return this.http.get(`https://app.letsqr.com/api/all/posts?tags=${data}`,this.httpOptions).subscribe((result:any) => {
      this.dashboardData = result.docs
      this.qr_lenth = result.docs.length
    }, error => {
     
    })
  }

  showResults() {
    return this.http.get(`https://app.letsqr.com/api/v2/all/request?qrCodeId=${this.qrCodeId}`,this.httpOptions).subscribe((result:any) => {
      this.singleScans = []
      this.lastScans = result.docs;
      this.showScanResult = false
      
    }, error => {
     
    })
  }
  nextResults() {
    return this.http.get(`https://app.letsqr.com/api/v2/all/request?$skip=${this.pageNum}`,this.httpOptions).subscribe((result:any) => {
      this.pageNum +=10;
      this.singleScans = []
      this.lastScans = result.docs;
      this.showScanResult = false
      
    }, error => {
     
    })
  }

}
