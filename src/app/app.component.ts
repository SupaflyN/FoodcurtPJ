import { Component } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import { Foodcurt } from './foodcurt'
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

foodcurtRef: AngularFirestoreCollection<Foodcurt>;
foodcurt$: Observable<Foodcurt[]>;

constructor(private afs: AngularFirestore) {
 this.foodcurtRef = this.afs.collection('foodcurt');
 this.foodcurt$ = this.foodcurtRef.valueChanges();
}
     
}