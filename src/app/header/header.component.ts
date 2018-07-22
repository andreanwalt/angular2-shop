import { Component, OnInit } from '@angular/core';
import {CartService} from './../cart.service';

@Component({
  selector: 'ag-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [CartService]
})
export class HeaderComponent implements OnInit {

  values = '';
  mybool:boolean;
  headerimg: string;

  constructor(
    private cartService: CartService
  ){}


  ngOnInit(){
  }


  count(){
    let count = this.cartService.countItem();
    return count;
  }

  price(){
    let price = this.cartService.price();
    return price;
  }


}
