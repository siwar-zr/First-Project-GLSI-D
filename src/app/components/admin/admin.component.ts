import { Component } from '@angular/core';
import { ProgressbarComponent } from "../../reusable/progressbar/progressbar.component";
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin',
  imports: [ProgressbarComponent, RouterLink],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  constructor(private http: HttpClient){
    this.getUsers()
  }

  getUsers(){
    this.http.get("https://projectapi.gerasim.in/api/UserApp/GetAllUsers").subscribe((res:any)=>{
      debugger;
    })
  }

}
