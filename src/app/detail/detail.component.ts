import { Component } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import {CartService} from './../cart.service';

export interface DetailModel {
  title:string;
  question:string;
  itemid: number;
  itemname: string
  itemqty: number;
  v: Object;

  backdropColor?: '#000';
}

@Component({
  selector: 'ag-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  providers: [CartService],
})
export class DetailComponent  extends DialogComponent<DetailModel, string> implements DetailModel{

  title: string;
  itemid: number;
  itemname: string;
  itemqty: number;
  v: Object;


  question: string;
  message: string = '';


  constructor(dialogService: DialogService, private cartService: CartService) {
    super(dialogService);
  }
  apply() {
    this.result = this.message;
    this.close();
  }

  increaseQuantity(): void {
    // todo max quantity
    ++this.v['qty']
  }

  decreaseQuantity(): void {
    // min quantity qty > 1
    if(this.v['qty'] > 1)
      --this.v['qty'];
  }

  changeQuantity($event): void {

    // min quantity qty < 0
    if(this.v['qty'] <= 0)
      this.v['qty'] = 1;

    // max quantity qty < 999
    if(this.v['qty'] > 100)
      this.v['qty'] = 999;

  }



  add(item){
    this.cartService.addItem(item);
    //this.v['qty'] = this.v['min'];
  }

}
