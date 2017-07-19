import { Component, Input, OnInit } from '@angular/core';
import { Products } from './../models/model-interfaces';
import { FormsModule } from '@angular/forms';
import {CartService} from './../cart.service';

@Component({
  selector: 'ag-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass'],
  inputs: ['product'],
  providers: [CartService],
})
export class ProductComponent{

  private product: Products;
  private qty: number = 1;

  constructor(private cartService: CartService){

  }

  ngOnInit() {
    this.qty = 1+this.product['qty'];
  }

  increaseQuantity(){
    this.product["qty"] = ++this.qty;
    this.cartService.increaseQuantity();
    return this.product["qty"];
  }

  decreaseQuantity(){
    if(this.qty > 1)
      this.qty--;

    this.cartService.decreaseQuantity();
    return this.qty;
  }

  addCart(product){
    this.cartService.addItem(product);
    console.log(product);
  }

  changeQuantity($event){
    let c = confirm("Are you sure about this?")

    // accept confirm
    if(c){
        //True, accept the value
    } else {
        this.qty = 1;
    }

    // qty > 0
    if(this.qty < 0)
      this.qty = 1;

    this.cartService.updateQuantity();
    this.product["qty"] = this.qty;
  }

  // todo
  showProduct(){
    return 1;
  }

}
