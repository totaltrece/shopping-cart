import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  constructor() { 
    this.isDisabled = true;
  }
  showModal:boolean;

  isDisabled: boolean;
  price: number;

  checkout(): void{
    console.log("yeppp");
  }

  ngOnInit(): void {
  }

}
