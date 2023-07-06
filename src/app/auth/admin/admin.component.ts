import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from 'src/app/services/auth/auth.service';
interface role {
  text: string;
  value: string;
  selected:boolean
}
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  roleOptions: role[] | undefined;
  public role: any;
  public username: any;
  public password: any;
  haserror: boolean | undefined;
  msg = "";
  selectedValue = "Select User Role";
  constructor(private router: Router, private authService: AuthService,private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  loginUser(e:any) {
    e.preventDefault()
      var self = this;
      this.authService
      .loginUser(this.username, this.password, 'SuperAdmin')
      .subscribe(
          function (result:any) {
            
            self.authService.setUser(result);
              if(result["scope"] == "SuperAdmin"){ 
                  self.router.navigate(["/admin/companies"]);
              }
              else if(result["scope"] == "CompanyAdmin") {
                  self.router.navigate(["/dashboard"]);
              }
          },
          function (error) {
            console.log("hhhh");
            
              self.haserror = true;
              self.msg = "Invalid Credentials";
              return;
          }
      );
    }

}
