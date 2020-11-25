import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { AngularFirestore } from '@angular/fire/firestore'
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private fs: AngularFirestore, private as: AuthService) { }

  addToCart(data: Product){
    return this.fs.collection(`users/${this.as.userId}/cart`).add(data)
  }
  getCart(){
    return this.fs.collection(`users/${this.as.userId}/cart`).snapshotChanges()
  }

  delete(id){
    return this.fs.doc(`users/${this.as.userId}/cart/${id}`).delete()
  }
  save(id, quantity){
    return this.fs.doc(`users/${this.as.userId}/cart/${id}`).update({
      quantity
    })
  }
}
