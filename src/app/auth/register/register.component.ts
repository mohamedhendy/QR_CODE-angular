import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
interface role {
  text: string;
  value: string;
  selected: boolean;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  hide: boolean = true;
  hasError: boolean | undefined;
  errorMessage:any;
  constructor(
    private registerForm: FormBuilder,
    private authService: AuthService
  ) {}

  companyForm = this.registerForm.group({
    name: ['', Validators.required],
    emailId: ['', Validators.required],
    emailPassword: ['', Validators.required],
  });
  ngOnInit(): void {}

  onSubmit() {
    console.log(this.companyForm.value);
    var self = this;
    this.authService.createCompany(this.companyForm.value).subscribe(function(res) {
      self.hide = false;
      console.log(res);
      
    }, 
    function(error) {
      console.log(error.error.Error);
      self.hasError = true
      self.errorMessage = error.error.Error
      return
    })
  }
}
