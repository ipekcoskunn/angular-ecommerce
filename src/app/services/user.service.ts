import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fs: AngularFirestore) { }

  addNewUser(id, name, address){
    return this.fs.doc('users/' + id).set({
      name,
      address
    })
  }

}
