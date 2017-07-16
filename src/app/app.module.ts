import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { routingComponents, appRouting } from './app.routing';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    CartComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
