import { Component, Input, OnInit } from '@angular/core';
import { Products } from './../models/model-interfaces';
import { FormsModule } from '@angular/forms';
import { CartService } from './../cart.service';

import { DialogService } from "ng2-bootstrap-modal";
import { DetailComponent } from './../detail/detail.component';

import { CommonModule } from '@angular/common';
import {Observable}  from 'rxjs/Observable';
import {Observer}  from 'rxjs/Observer';
import {Subscriber}  from 'rxjs/Subscriber';
import { Subscription } from 'rxjs/Subscription';
import {Subject}  from 'rxjs/Subject';
import {BehaviorSubject}  from 'rxjs/BehaviorSubject';

@Component({
  selector: 'ag-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  inputs: ['product'],
  providers: [CartService],
})
export class ProductComponent implements OnInit{

  private product: Products;
  public qty: number = 1;

  constructor(
    private cartService: CartService,
    private dialogService:DialogService
    ){

  }

  ngOnInit(): void {
    this.qty = this.product['qty'];
  }

  increaseQuantity(): void {

    // max quantity qty < 999
    if(this.qty < 999)
      ++this.qty;

  }

  decreaseQuantity(): void {

    // min quantity qty > 1
    if(this.qty > 1)
      --this.qty;

  }

  changeQuantity($event): void {

    // min quantity qty < 0
    if(this.qty <= 0)
      this.qty = 1;

    // max quantity qty < 999
    if(this.qty > 100)
      this.qty = 999;

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

  // dialog
  showProduct(item:any, lgModal:any) {

    //this.selecteditem = item;

    this.dialogService.addDialog(DetailComponent, {
                                                    title: item.title,
                                                    itemid: item.id,
                                                    itemname: item.description,
                                                    itemqty: item.qty,
                                                    v: item
                                                  },
                                                  {
                                                  closeByClickingOutside:true,
                                                  backdropColor: 'rgba(0, 0, 0, 0.5)'
                                                  });
  }


}
