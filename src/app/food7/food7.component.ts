import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Foodcurt } from '../foodcurt';

@Component({
  selector: 'app-food7',
  templateUrl: './food7.component.html',
  styleUrls: ['./food7.component.css']
})
export class Food7Component implements OnInit {

  
  foodcurtRef: AngularFirestoreCollection<Foodcurt>;
  foodcurt$: Observable<Foodcurt[]>;

constructor(private afs: AngularFirestore) {


   
  this.foodcurtRef = this.afs.collection('foodcurt/f007/menu'); // a ref to the todos collection
  this.foodcurt$ = this.foodcurtRef.valueChanges();
  
}
ngOnInit() {
  
}

}
