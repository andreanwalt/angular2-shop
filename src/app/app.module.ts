import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

// 3nd dist
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { routingComponents, appRouting } from './app.routing';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';

import { MessageService } from './message.service';
import { DetailComponent } from './detail/detail.component';
import { ConfirmComponent } from './confirm/confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    CartComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    ProductComponent,
    DetailComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    appRouting,
    HttpModule,
    FormsModule,
    TooltipModule.forRoot(),
    BootstrapModalModule,
    InfiniteScrollModule
  ],
  providers: [
    MessageService,
    {
      provide: LOCALE_ID,
      useValue: 'de-DE', // 'de-DE' for Germany, 'fr-FR' for France ...
    },
  ],
  entryComponents: [
    ConfirmComponent,
    DetailComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
