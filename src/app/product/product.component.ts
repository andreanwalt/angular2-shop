import { Component, Input, OnInit } from '@angular/core';
import { Products } from './../models/model-interfaces';
import { FormsModule } from '@angular/forms';
import { CartService } from './../cart.service';

@Component({
  selector: 'ag-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass'],
  inputs: ['product'],
  providers: [CartService],
})
export class ProductComponent implements OnInit{

  private product: Products;
  private qty: number = 1;

  constructor(private cartService: CartService){

  }

  ngOnInit(): void {
    this.qty = this.product['qty'];
  }

  increaseQuantity(): void {
    // todo max quantity
    ++this.qty;
  }

  decreaseQuantity(): void {
    // min quantity qty > 1
    if(this.qty > 1)
      --this.qty;
  }

  changeQuantity($event): void {
    // min quantity qty < 0
    if(this.qty <= 0){
      this.qty = 1;
      return;
    }
  }

  addCart(product): void {
    product.qty = this.qty;
    this.cartService.addItem(product);
  }

  isActive(id): boolean{
    if(this.cartService.findIndexById(id) === null){
      return false;
    }
    else{
      return true;
    }
  }

  // todo make dialog
  showProduct(){
    return 1;
  }

}
