import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Foodcurt } from '../foodcurt';

@Injectable({
  providedIn: 'root'
})
export class FoodcurtService {

  private dbPath = '/foodcurt';

  foodcurtRef: AngularFireList<Foodcurt> = null;


  constructor(private db: AngularFireDatabase) { 
    this.foodcurtRef = db.list(this.dbPath);
  }
  getStudentList(): AngularFireList<Foodcurt> {
    return this.foodcurtRef;
  }
}
