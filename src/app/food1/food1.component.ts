import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Foodcurt } from '../foodcurt';

@Component({
  selector: 'app-food1',
  templateUrl: './food1.component.html',
  styleUrls: ['./food1.component.css']
})
export class Food1Component implements OnInit {

   
  foodcurtRef: AngularFirestoreCollection<Foodcurt>;
  foodcurt$: Observable<Foodcurt[]>;

constructor(private afs: AngularFirestore) {


   
  this.foodcurtRef = this.afs.collection('foodcurt/f001/menu'); // a ref to the todos collection
  this.foodcurt$ = this.foodcurtRef.valueChanges();
  
  }
  ngOnInit() {
    throw new Error("Method not implemented.");
  }

}
