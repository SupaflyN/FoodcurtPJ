import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Foodcurt } from '../foodcurt';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactRef: AngularFirestoreCollection<Foodcurt>;
  contact$: Observable<Foodcurt[]>;
  constructor(private afs: AngularFirestore) { 
  
  this.contactRef = this.afs.collection('contact'); // a ref to the todos collection
  this.contact$ = this.contactRef.valueChanges();
}
  ngOnInit() {
    
  }

}
