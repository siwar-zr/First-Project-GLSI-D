import { DatePipe, JsonPipe, LowerCasePipe, NgFor, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NaPipe } from '../../pipes/na.pipe';
import { ProgressbarComponent } from "../../reusable/progressbar/progressbar.component";

@Component({
  selector: 'app-ng-for',
  imports: [NgFor, UpperCasePipe, LowerCasePipe, JsonPipe, DatePipe, NaPipe, ProgressbarComponent],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {

  currentDate : Date = new Date();

  courseName: string = "ANgular";

  studentObj: any = {
    name:'Siwar',
    city:'Tunis',
    mobile:'111155558888'
  }

  cityList : string[] = ["Tunis", "Jerba", "Beja", "Nabeul", "Sousse"];
  employeeArray : any[] = [
    {empId:11, city:'Beja', contactNo: '25846987', attendance:40},
    {empId:12, name:'Abir', city:'Tunis', contactNo: '90584765', attendance:50},
    {empId:13, name:'', city:'Nabeul', contactNo: '27859412', attendance:20},
    {empId:14, name:'Mouhamed', city:'Sousse', contactNo: '95876125', attendance:100},
    {empId:15, name:null, city:'Tunis', contactNo: '28456321', attendance:75},
  ]

}
