import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'],
})
export class CompaniesComponent implements OnInit {
  dashboardData: any;
  qr_lenth: any;
  scans = 0;
  page = 1;
  pageNum = 10;
  i = 1;
  lastScans: any;
  currentScansNumber: any;
  singleScans: any = [];
  singleTableScans: any = [];
  p: number = 1;
  setActiveClass: any;
  qrCodeId: any;
  indexQr: any = [];
  accessToken = localStorage.getItem('access-token');
  showScanResult: boolean = true;
  hideCase: boolean = true;
  showResult: any;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: String(this.accessToken),
    }),
  };
  handlePageChange(event: any) {
    this.page = event;
  }
  constructor(
    private http: HttpClient,
    private dashboardServices: DashboardService
  ) {}
  ngOnInit(): void {
    this.dashboardServices.currentCompany.subscribe(
      (res) => (this.qr_lenth = res.length)
    );
    this.dashboardServices.currentCompany.subscribe((res) => {
      this.dashboardData = res;
      if (this.dashboardData) {
        console.log(true);
      }
    });
    this.getDate();
    this.dashboardServices.currentBolCase.subscribe((res) => {
      this.showResult = res;
    });
  }
  getDate() {
    this.dashboardServices.getCompaniesRequest();
  }
  checkActiveClass(i: any) {
    this.setActiveClass = i;
  }
  approveCompany(event: any, data: any):any {
    var company_id = data;
    var pricingPlan ={
      company:data,
      pricing_plan:'6180f2e3c5a289e7f336c683'
  }
    if (event.target.checked) {
      console.log('true');
      return this.http.get(
          `https://app.letsqr.com/api/approve/company/${data}`,
          this.httpOptions
        )
        .subscribe(
          (result: any) => {
            this.dashboardServices.getCompaniesRequest();
            this.addPricing(pricingPlan)
            
          },
          (error) => {
            console.log(error);
          }
        );
    } else {
      console.log('false');
      return this.http
        .get(
          `https://app.letsqr.com/api/suspend/company/${data}`,
          this.httpOptions
        )
        .subscribe(
          (result: any) => {
            this.dashboardServices.getCompaniesRequest()
            console.log(this.lastScans);
          },
          (error) => {
            console.log(error);
          }
        );
    }
  }
  addPricing(data:any){
    var body =  JSON.stringify(data)
    return this.http.post(
          `https://app.letsqr.com/api/adding_company_pricing`,body ,this.httpOptions
        )
        .subscribe(
          (result: any) => {
            console.log('success');
            console.log(result);
          },
          (error) => {
            console.log(error);
          }
        );
  }
  // showScansRequest(event:any) {
  //   this.hideCase = false
  //   event.preventDefault()
  //   event.stopPropagation()
  //   this.qrCodeId = event.path[2].attributes.id.value;
  //   console.log(this.qrCodeId);
  //     return this.http.get(`https://app.letsqr.com/api/v2/all/request?qrCodeId=${this.qrCodeId}`,this.httpOptions).subscribe((result:any) => {
  //        this.lastScans = result.docs.slice(0,3);
  //       this.currentScansNumber = result.checkedRequestToltalCount;
  //       console.log(this.lastScans);
  //     }, error => {
  //       console.log(error);
  //     })
  // }

  // nextResults() {
  //   return this.http.get(`https://app.letsqr.com/api/v2/all/request?$skip=${this.pageNum}`,this.httpOptions).subscribe((result:any) => {
  //     this.pageNum +=10;
  //     this.singleScans = []
  //     this.lastScans = result.docs;
  //     this.showScanResult = false

  //     console.log(this.lastScans);
  //   }, error => {
  //     console.log(error);

  //   })
  // }
}
