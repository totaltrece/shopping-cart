import { Component, OnInit, ViewChild,SimpleChanges, DoCheck } from '@angular/core';
import { ConfirmComponent } from '../confirm/confirm.component';
import { ProductData, ProductView }  from  "../interfaces/product";   ///interface product
import { Shop } from "../models/shop.model";
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-stateful',
  templateUrl: './stateful.component.html',
  styleUrls: ['./stateful.component.css']
})
export class StatefulComponent implements OnInit {

  @ViewChild(ConfirmComponent, {static:false})
  confirmChild : ConfirmComponent;

  shopModel: Shop = new Shop();
  viewProducts: Array<ProductView>;
  boughtItems: Array<ProductView>;
  priceTotal: number =  0;
  showShopConfirmed :boolean = false;
  errorHttp: boolean;

  private shopSubscription: Subscription;
  

  constructor( private http: HttpClient ) {
    this.boughtItems = [];

    console.log(1, this.shopModel.shopItems);
   }

  ngOnInit(): void {
    // console.log(this.items, typeof this.items);
    // console.log(2, this.shopModel.shopItems, typeof this.shopModel.shopItems);

    //this.items = this.shopModel;
    // this.items = this.shopModel.shopItems.subscribe();

    this.shopSubscription = this.http.get('assets/courses.json').subscribe(
      (respuesta: Array<ProductData>) => { 
        this.shopModel.shopItems = respuesta;
        this.viewProducts = this.shopModel.shopItems.map( item => {

          let itemView: ProductView = {
            id : item.id,
            desc : item.desc,
            picture : item.picture,
            price : item.price,
            title : item.title,
            selected : false
          };

          return itemView;
        });
      },
        
      (respuesta: Response) => { 
        this.errorHttp = true }
    )
  }

  ngDestroy(){
    document.removeEventListener("keypress", this.onKeyboard);
    this.shopSubscription.unsubscribe();
  }

  itemSelected(_event: ProductView){
    this.addToCart(_event);
  }

  addToCart(curso: ProductView){
      curso.selected = true;
      this.boughtItems.push(curso)
      this.priceTotal += curso.price;

      this.updateConfirmData();
  }


  /*
  onInit, onChanges,

  ngOnChanges(changes: SimpleChanges): void{
      console.log(changes);

      SimpleChanges, DoCheck hay que importarlos
  }

  ngDoCheck muy sencilla pero consume mucha memoria
  */

  removeFromCart(curso:ProductView){
    curso.selected = false;
    this.boughtItems = this.boughtItems.filter( (item: ProductView)  => item.id !== curso.id ); // filtramos
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

  onKeyboard(_event){
    if(_event.key === 'Enter'){
      console.log("enter pulsado");
    }
  }

  shopConfirmed(confirmed:boolean){
    this.showShopConfirmed = true;
  }
  

  onGlobalKeyboard(){
    console.log("yep");
   // document.addEventListener()
  }
}
