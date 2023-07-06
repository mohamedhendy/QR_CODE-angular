import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlService } from 'src/app/services/url/url.service';

import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-shared-card',
  templateUrl: './shared-card.component.html',
  styleUrls: ['./shared-card.component.scss'],
})
export class SharedCardComponent implements OnInit {
  constructor(
    private urlF: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private urlService: UrlService
  ) {}
  ngOnInit(): void {}
  showCard() {
    var url = this.router.url;
    var id = url.split('/')[2];
    console.log(id);
    localStorage.setItem('businessCardID', id);
    var body = this.urlForm.value;
    this.urlService.saveBusinessData(id,body);
  }
  urlForm = this.urlF.group({
    email: ['', Validators.required],
    name: [''],
    phone: [''],
  });

  
}
