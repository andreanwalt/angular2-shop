import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';

export const appRoutes: Routes = [
  { path: 'shop', component: ShopComponent },
  { path: 'cart', component: CartComponent }
];

export const appRouting = RouterModule.forRoot(
  appRoutes,
  { enableTracing: true } // <-- debugging purposes only
);

export const routingComponents = [
  ShopComponent,
  CartComponent
];
