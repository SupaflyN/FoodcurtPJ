import { Component, OnInit } from '@angular/core';
import { Foodcurt } from '../foodcurt';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-howto',
  templateUrl: './howto.component.html',
  styleUrls: ['./howto.component.css']
})
export class HowtoComponent implements OnInit {

   howtoRef: AngularFirestoreCollection<Foodcurt>;
  howto$: Observable<Foodcurt[]>;

  constructor(private afs: AngularFirestore) {


 
    this.howtoRef = this.afs.collection('howto'); // a ref to the todos collection
    this.howto$ = this.howtoRef.valueChanges();

  }

  ngOnInit() {
  
  }

}
