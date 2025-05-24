import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: any = {
    username: '',
    password: ''
  }

  apiLoginObj: any = {
    "EmailId": "",
    "Password": ""
  }

  router = inject(Router);
  http = inject(HttpClient)

  onLogin(){
    debugger;
    this.http.post("https://projectapi.gerasim.in/api/UserApp/login",this.apiLoginObj).subscribe((res:any)=>{
      localStorage.setItem("TekupStudent",res.data.userId);
      localStorage.setItem("TekupToken",res.data.token);
      this.router.navigateByUrl("admin")
    },errors =>{
      alert("Wrong Credentials")
    })
  }

}
