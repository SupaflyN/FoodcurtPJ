import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Foodcurt } from '../foodcurt';

@Component({
  selector: 'app-food9',
  templateUrl: './food9.component.html',
  styleUrls: ['./food9.component.css']
})
export class Food9Component implements OnInit {

  
  foodcurtRef: AngularFirestoreCollection<Foodcurt>;
  foodcurt$: Observable<Foodcurt[]>;

constructor(private afs: AngularFirestore) {


   
  this.foodcurtRef = this.afs.collection('foodcurt/f009/menu'); // a ref to the todos collection
  this.foodcurt$ = this.foodcurtRef.valueChanges();
  
  }
  ngOnInit() {
    throw new Error("Method not implemented.");
  }

}
