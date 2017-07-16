import { RouterModule, Routes } from '@angular/router';


export const appRoutes: Routes = [
  //{ path: 'shop', component: ShopComponent },
  //{ path: 'cart', component: CartComponent }
];

export const appRouting = RouterModule.forRoot(
  appRoutes,
  { enableTracing: true } // <-- debugging purposes only
);

export const routingComponents = [
  //ShopComponent
];
