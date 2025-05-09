import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  imports: [],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css'
})
export class LifecycleComponent implements OnInit, AfterViewInit, AfterViewChecked, 
AfterContentInit, AfterContentChecked, OnDestroy {

  constructor(){
    console.log('Constructor')
  }

  ngOnInit(): void {
    console.log("ngOnInit")
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit", performance.now())
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }


  ngOnDestroy(): void {
    alert("You are leaving page")
    console.log("ngOnDestroy")
  }
}
