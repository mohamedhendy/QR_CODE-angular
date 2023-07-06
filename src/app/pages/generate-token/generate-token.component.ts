import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-generate-token',
  templateUrl: './generate-token.component.html',
  styleUrls: ['./generate-token.component.scss']
})
export class GenerateTokenComponent implements OnInit {
  URLSelected:any = '';
  copy:any = 'Copy';
  accessToken = localStorage.getItem('access-token')
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: String(this.accessToken)
    })
  };
  constructor(private http: HttpClient, private urlF: FormBuilder) { }
  urlForm = this.urlF.group({
    url: [ [this.URLSelected]],
    })
  ngOnInit(): void {
    this.showToken()
  }

  showToken() {
    return this.http.get(`https://app.letsqr.com/api/generate/token`,this.httpOptions).subscribe((result:any) => {
      console.log(result);
      this.URLSelected = result.Token
      this.urlForm.patchValue({
        url: this.URLSelected
      })
       
      }, error => {
       
      })
    
  }
  resetToken() {
    return this.http.get(`https://app.letsqr.com/api/generate/token`,this.httpOptions).subscribe((result:any) => {
      console.log(result);
      this.URLSelected = result.Token
      this.urlForm.patchValue({
        url: this.URLSelected
      })
       
      }, error => {
       
      })
  }
  copyLink() {
      this.copy = 'Copied'
      navigator.clipboard
        .writeText(String(this.urlForm.value.url))
        .then()
        .catch((e) => console.error(e));
  }
}
