import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'cart', component: CartComponent }
];

export const appRouting = RouterModule.forRoot(
  appRoutes,
  { enableTracing: false } // <-- debugging purposes only
);

export const routingComponents = [
  HomeComponent,
  AboutComponent,
  ContactComponent,
  ShopComponent,
  CartComponent
];
