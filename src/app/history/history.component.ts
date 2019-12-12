import { Component, OnInit } from '@angular/core';
import { Foodcurt } from '../foodcurt';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  historyRef: AngularFirestoreCollection<Foodcurt>;
  history$: Observable<Foodcurt[]>;

  constructor(private afs: AngularFirestore) {


 
    this.historyRef = this.afs.collection('history'); // a ref to the todos collection
    this.history$ = this.historyRef.valueChanges();

  }

  ngOnInit() {
  
  }

}
