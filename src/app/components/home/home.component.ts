import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/interfaces/product.interface';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  products: Product[] = []
  productsObservable: Subscription
  add: number = -1

  constructor(private ps: ProductsService, private cs:CartService) { }

  ngOnInit(): void {
    this.productsObservable = this.ps.getAllProducts().subscribe(data => {
      this.products = data.map(element=> {
        return{
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        }
      })
    })
  }

  ngOnDestroy(){
    this.productsObservable.unsubscribe()
  }

  addToCart(index: number){
    this.add = +index
  }

  buy(quantity: number){
    let selectedProduct = this.products[this.add]
    let data = {
      name: selectedProduct.name,
      quantity: +quantity,
      price: selectedProduct.price
    }
    this.cs.addToCart(data).then(() => this.add = -1)
  }

}
