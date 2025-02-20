import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ng-class',
  imports: [NgClass, FormsModule],
  templateUrl: './ng-class.component.html',
  styleUrl: './ng-class.component.css'
})
export class NgClassComponent {

  divBgColor: string = "bg-success";
  isChecked: boolean = false;
  div3ClassName: string ='';

  constructor(private router: Router){

  }

  addDiv1Color(className: string){
    this.divBgColor = className;
  }

  navigateToDB(){
    this.router.navigateByUrl("/dataBinding")
  }

}
