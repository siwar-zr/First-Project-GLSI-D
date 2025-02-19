import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  imports: [NgFor],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {

  cityList : string[] = ["Tunis","Beja","Nabeul","Jerba","Sousse"];

  employeeArray: any[] = [
    {empId: 11, name: 'Ahmed', city: 'Beja', contactNo: '25489632'},
    {empId: 12, name: 'Abir', city: 'Tunis', contactNo: '90548632'},
    {empId: 13, name: 'Ali', city: 'Monastir', contactNo: '24736158'},
    {empId: 14, name: 'Sonia', city: 'Beja', contactNo: '95861483'},
    {empId: 15, name: 'Mouhamed', city: 'Sousse', contactNo: '28456357'}
  ];
}
