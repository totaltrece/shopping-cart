import { Component, OnInit , Input, EventEmitter, Output } from '@angular/core';
import { ProductData, ProductView }  from  "../interfaces/product";   ///interface product

@Component({
  selector: 'app-stateless',
  templateUrl: './stateless.component.html',
  styleUrls: ['./stateless.component.css']
})
export class StatelessComponent implements OnInit {
  @Output() productselected: EventEmitter<ProductView> = new EventEmitter();
  @Input() product: ProductView;
  
  public buttonText: string;
  // private disable: boolean;

  constructor() { }

  ngOnInit(): void {
    this.buttonText = this.product.selected ? '┬íMatriculado!' : 'Matricularse'; 

  }
  selectProduct() {
    // this.disable = true;
    // this.buttonText = '┬íMatriculado!';
    this.productselected.emit( this.product );
  }

  isdisabled() {
    return this.product.selected;
  }

  rightClick(){
    console.log("right");
  }

}
