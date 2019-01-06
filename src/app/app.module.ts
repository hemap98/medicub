import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routing';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ItemListComponent } from './item-list/item-list.component';
import { FooterComponent } from './footer/footer.component';
import { KartService } from './kart-service.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    CartComponent,
    ItemListComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule
    RouterModule.forRoot(AppRoutes),
  ],
  providers: [KartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
