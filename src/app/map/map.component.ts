import { Component, OnInit } from '@angular/core';
import { Foodcurt } from '../foodcurt'
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

 // foodcurtRef: AngularFirestoreDocument<Foodcurt>;

 foodcurtRef: AngularFirestoreCollection<Foodcurt>;
 foodcurt$: Observable<Foodcurt[]>;

constructor(private afs: AngularFirestore) {



 this.foodcurtRef = this.afs.collection('foodcurt'); // a ref to the todos collection
 this.foodcurt$ = this.foodcurtRef.valueChanges();
}

ngOnInit() {

}

}
