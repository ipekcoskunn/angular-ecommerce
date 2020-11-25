import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductsComponent } from './components/products/products.component';
import { SignupComponent } from './components/signup/signup.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
{ path: '', component: HomeComponent},
{ path: 'login', component: LoginComponent},
{ path: 'cart', component: CartComponent},
{ path: 'signup', component: SignupComponent},
{ path: 'admin', component: ProductsComponent},
{ path: 'about', component: AboutComponent},
{ path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
