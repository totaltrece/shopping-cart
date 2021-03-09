import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  @Output() shopconfirmed: EventEmitter<boolean> = new EventEmitter();

  constructor() { 
    this.isDisabled = true;
  }
  showModal:boolean;

  isDisabled: boolean;
  price: number;

  checkout(): void{

    this.showModal = false;
    this.shopconfirmed.emit( true );

  }

  ngOnInit(): void {
  }

}
