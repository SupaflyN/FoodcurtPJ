import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Foodcurt } from '../foodcurt';

@Injectable({
  providedIn: 'root'
})
export class FoodcurtService {

  private dbPath = '/foodcurt/6nDfbdRirA8zB7SpfHVG';

  foodcurtRef: AngularFireList<Foodcurt> = null;


  constructor(private db: AngularFireDatabase) { 
    this.foodcurtRef = db.list(this.dbPath);
  }
  getStudentList(): AngularFireList<Foodcurt> {
    return this.foodcurtRef;
  }
}
