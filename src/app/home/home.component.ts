import { Component, OnInit } from '@angular/core';
import { Foodcurt } from '../foodcurt';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foodcurtRef: AngularFirestoreCollection<Foodcurt>;
  foodcurt$: Observable<Foodcurt[]>;

  constructor(private afs: AngularFirestore) {


 
    this.foodcurtRef = this.afs.collection('foodcurt'); // a ref to the todos collection
    this.foodcurt$ = this.foodcurtRef.valueChanges();

  }

  ngOnInit() {
  
  }

}
