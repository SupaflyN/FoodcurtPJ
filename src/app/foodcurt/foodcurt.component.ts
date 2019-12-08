import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Foodcurt } from '../foodcurt';

@Component({
  selector: 'app-foodcurt',
  templateUrl: './foodcurt.component.html',
  styleUrls: ['./foodcurt.component.css']
})
export class FoodcurtComponent implements OnInit {
 
  foodcurtRef: AngularFirestoreCollection<Foodcurt>;
  foodcurt$: Observable<Foodcurt[]>;

constructor(private afs: AngularFirestore) {


   
  this.foodcurtRef = this.afs.collection('foodcurt'); // a ref to the todos collection
  this.foodcurt$ = this.foodcurtRef.valueChanges();
  
  }
  ngOnInit() {
    throw new Error("Method not implemented.");
  }

}
