import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { Observable }  from 'rxjs/Observable';
import { Products } from './../models/model-interfaces';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@Component({
  selector: 'ag-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.sass'],
  providers: [ProductService],
})
export class ShopComponent implements OnInit {

  // create products Observable
  private products$: Observable<Products[]>;


  //////////////////
  array = [];

  title = 'This is Angular InfiniteScroll v';

  modalIsOpen = '';
  modalTitle = 'scroll to update';


  modalScrollDistance = 2;
  modalScrollThrottle = 10;

  allocatedAssetsList = [];
  errorMessage ="";

  counter = 10;
  //////////////////

  constructor(private productService: ProductService ) {
    for (let i = 0; i < this.counter; ++i) {

    this.productService.getProducts().subscribe(
      res => {
        this.allocatedAssetsList = res;
        //console.log(this.allocatedAssetsList[0].id);
        console.log(this.allocatedAssetsList.length);
        this.array.push(this.allocatedAssetsList[i]);
      },
      error =>  this.errorMessage = <any>error);
    }

  }

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
  }

  onScrollDown():void {
    const start = this.counter; // start push from array
    this.counter += 10;   // end push from array

    for (let i = start; i < this.counter; ++i) {
      this.productService.getProducts().subscribe(
        res => {
          this.allocatedAssetsList = res;
          console.log('length: '+this.allocatedAssetsList.length);
          if(this.array.length < this.allocatedAssetsList.length)
            this.array.push(this.allocatedAssetsList[i]);
        },
        error =>  this.errorMessage = <any>error);
    }
  }

}
