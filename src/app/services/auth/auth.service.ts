import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user: any = null;
  public apiUrlExt: any;
  public scope: any;
  public menu: any;
  public username: string | undefined;

  constructor(private http: HttpClient, private router: Router) {}

  public setUser(user: any) {
    localStorage.setItem('access-token', user['token']);
    localStorage.setItem('companyId', user['comapnyId']);
    this.user = user;
    this.scope = user.scope;
  }

  public loginUser(username: any, password: any, role: any) {
    this.username = username;
    var URL;
    if (role != 'CompanyAdmin') {
      this.apiUrlExt = 'superadmin/login';
      URL = 'https://app.letsqr.com/api/';
    } else if (role == 'CompanyAdmin') {
      this.apiUrlExt = 'company/login';
      URL = 'https://app.letsqr.com/api/v3/';
    }
      console.log(URL + this.apiUrlExt);
      
    return this.http.post( URL + this.apiUrlExt, {
      username: username,
      password: password,
    });
  }
  public createCompany(data: any) {
    const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
        })
      };
    var body = data;
    console.log(body);
    var mainJS = JSON.stringify(body)
    console.log(mainJS);
    const url = 'https://app.letsqr.com/api/v3/company';
    return this.http.post(url, mainJS,httpOptions);
  }

  public logOut() {
    this.router.navigate(['/']);
  }
}
