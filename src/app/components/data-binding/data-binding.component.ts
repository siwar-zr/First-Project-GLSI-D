import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  firstName: string = "Mohamed";
  annee: number = 2025;
  isActive: boolean = true;
  currentDate: Date = new Date();
  myPlaceHolder: string = "Entrez votre nom";
  divClassName: string = "text-bg-primary p-3";

  constructor(){
    console.log(this.firstName);
    this.isActive = false;
    console.log(this.isActive);
  }

  showWelcomeMessage(){
    alert("Welcome to our Angular Course!");
  }

  onCityChange(){
    console.log("City changed");
  }

}
