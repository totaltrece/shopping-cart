import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmComponent } from '../confirm/confirm.component';
import { Product }  from  "../interfaces/product";   ///interface product
import { Shop } from "../models/shop.model";

@Component({
  selector: 'app-stateful',
  templateUrl: './stateful.component.html',
  styleUrls: ['./stateful.component.css']
})
export class StatefulComponent implements OnInit {

  @ViewChild(ConfirmComponent, {static:false})
  confirmChild : ConfirmComponent;

  shopModel: Shop = new Shop();
  items : Array<Product>;
  boughtItems: Array<Product>;
  priceTotal: number =  0;

  

  constructor() {
    this.items = []; 
    this.boughtItems = [];

    console.log(1, this.shopModel.shopItems);
   }

  ngOnInit(): void {
    // console.log(this.items, typeof this.items);
    // console.log(2, this.shopModel.shopItems, typeof this.shopModel.shopItems);

    //this.items = this.shopModel;
    // this.items = this.shopModel.shopItems.subscribe();
  }

  itemSelected(_event: Product){
    this.addToCart(_event);
  }

  addToCart(curso: Product){
      curso.selected = true;
      this.boughtItems.push(curso)
      this.priceTotal += curso.price;

      this.updateConfirmData();
  }

  removeFromCart(curso:Product){
    curso.selected = false;
    this.boughtItems = this.boughtItems.filter( (item: Product)  => item.id !== curso.id ); // filtramos
    this.priceTotal -= curso.price;

    this.updateConfirmData();
  }

  private updateConfirmData(){
    this.confirmChild.price = this.priceTotal;

    if(this.boughtItems.length){
      this.confirmChild.isDisabled = false;
    }else{
      this.confirmChild.isDisabled = true;
    }
  }

}
