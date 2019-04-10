import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 isValidate: Boolean;
  constructor() { 
  this.isValidate=true;
  }

  ngOnInit() {
  
}
  isValidateC(){ 
  this.isValidate = false;
  }

}
