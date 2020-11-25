import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import  { AngularFireModule} from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    ProductsComponent,
    LoginComponent,
    SignupComponent,
    NotFoundComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAZpohKNujCHpK8OU1HeX3rfy6Unhj2C-M",
      authDomain: "angular-ecommerce-6f8c9.firebaseapp.com",
      databaseURL: "https://angular-ecommerce-6f8c9.firebaseio.com",
      projectId: "angular-ecommerce-6f8c9",
      storageBucket: "angular-ecommerce-6f8c9.appspot.com",
      messagingSenderId: "1059347500099",
      appId: "1:1059347500099:web:3fb118ed698458649058f6",
      measurementId: "G-552BMB5ZVB"
    }),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [
    {provide: FirestoreSettingsToken, useValue: {}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
