import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { Observable }  from 'rxjs/Observable';
import { Products } from './../models/model-interfaces';

@Component({
  selector: 'ag-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.sass'],
  providers: [ProductService],
})
export class ShopComponent implements OnInit {

  // create products Observable
  private products$: Observable<Products[]>;

  constructor(private productService: ProductService ) { }

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
  }

}
