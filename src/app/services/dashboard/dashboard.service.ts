import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  result:any;
  scans = 0;
  posts:any;
  bolCase = true;
  singleScan:any = [];
  accessToken = localStorage.getItem('access-token')
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: String(this.accessToken)
    })
  };
  constructor(private http: HttpClient) { }
  private dataSource = new BehaviorSubject<any>('');
  currentData = this.dataSource.asObservable();
  private tagsSource = new BehaviorSubject<any>('');
  currentTags = this.tagsSource.asObservable();
  private CompanySource = new BehaviorSubject<any>('');
  currentCompany = this.CompanySource.asObservable();
  private scansSource = new BehaviorSubject<any>('');
  currentScans = this.scansSource.asObservable();
  private singleScanSource = new BehaviorSubject<any>('');
  currentSingleScan = this.singleScanSource.asObservable();
  private BolCaseSource = new BehaviorSubject<any>('');
  currentBolCase = this.BolCaseSource.asObservable();

  getRequest() {
    return this.http.get('https://app.letsqr.com/api/all/posts',this.httpOptions).subscribe((result:any) => {
      this.result = result.docs;
      var mainTags = []
      for(var i =0; i < this.result.length; i ++) {
        if(this.result[i].tags[0] != ''  && this.result[i].tags.length > 0) {
          var x = String(this.result[i].tags[0]).split(',')
          if(x[x.length - 1] == '' ) {
            x.pop()
            
          }
            if(String(this.result[i].tags[0]).includes(' ')) {
              x = this.result[i].tags[0].split(' ')
              if(x[x.length - 1] == '' ) {
                x.pop()
                
              }
            }
            mainTags.push(...x)
        }
      }
      mainTags = mainTags.filter(function (value, index, array) { 
        return array.indexOf(value) === index;
      });
      console.log(mainTags);
      this.tagsSource.next(mainTags)
      
      this.singleScan = []
      // this.getSingleScan(this.result)
      console.log(this.result.reverse());
      
      this.dataSource.next(this.result)
      if(result) {
        this.BolCaseSource.next(this.bolCase)
      }
      
    }, error => {
      console.log(error);
    })
  }
  
  getCompaniesRequest() {
    return this.http.get('https://app.letsqr.com/api/all/companies?$limit=500',this.httpOptions).subscribe((result:any) => {
      this.result = result.companies;
      console.log(this.result);
      
      this.CompanySource.next(this.result)
      if(result) {
        this.BolCaseSource.next(this.bolCase)
      }
      
    }, error => {
      console.log(error);
    })
  }
  
  getScans() {
    return this.http.get('https://app.letsqr.com/api/dashboard',this.httpOptions).subscribe((result:any) => {
      this.scans = result.Scans
      console.log(result);
      this.scansSource.next(this.scans)
    }, error => {
      console.log(error);
    })
  }
  
  getSingleScan(data:any) {
    data.forEach((res:any) => {
      return this.http.get(`https://app.letsqr.com/api/v2/all/request?qrCodeId=${res._id}`,this.httpOptions).subscribe((result:any) => {
       this.singleScan.push(result.checkedRequestToltalCount)
       console.log(this.singleScan);
      }, error => {
        console.log(error);
      })
    });
    this.singleScanSource.next(this.singleScan)
  }
}
