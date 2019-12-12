import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';

//Rounter
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
//Component
import { HomeComponent } from './home/home.component';
import { Food1Component } from './food1/food1.component';
import { Food2Component } from './food2/food2.component';
import { Food3Component } from './food3/food3.component';
import { Food4Component } from './food4/food4.component';
import { Food5Component } from './food5/food5.component';
import { Food6Component } from './food6/food6.component';
import { Food7Component } from './food7/food7.component';
import { Food8Component } from './food8/food8.component';
import { Food9Component } from './food9/food9.component';
import { Food10Component } from './food10/food10.component';
import { FoodcurtComponent } from './foodcurt/foodcurt.component';
import { HowtoComponent } from './howto/howto.component';
import { ContactComponent } from './contact/contact.component';
import { MapComponent } from './map/map.component';
import { HistoryComponent } from './history/history.component';
//Firebase
import { AngularFireModule} from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';



import { Food11Component } from './food11/food11.component';
import { Food12Component } from './food12/food12.component';
import { Food13Component } from './food13/food13.component';


const appRoutes: Routes = [
  {path: 'home', component: HomeComponent}, //หน้าแรก
  {path: 'foodcurt' , component: FoodcurtComponent},
  {path: 'food1' , component: Food1Component},
  {path: 'food2' , component: Food2Component},
  {path: 'food3' , component: Food3Component},
  {path: 'food4' , component: Food4Component},
  {path: 'food5' , component: Food5Component},
  {path: 'food6' , component: Food6Component},
  {path: 'food7' , component: Food7Component},
  {path: 'food8' , component: Food8Component},
  {path: 'food9' , component: Food9Component},
  {path: 'food10' , component: Food10Component},
  {path: 'food11' , component: Food10Component},
  {path: 'food12' , component: Food10Component},
  {path: 'food13' , component: Food10Component},
  {path: 'howto' , component: HowtoComponent},
  {path: 'contact' , component: ContactComponent},
  {path: 'map' , component: MapComponent},
  {path: 'history' , component: HistoryComponent}

  
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Food1Component,
    Food2Component,
    Food3Component,
    Food4Component,
    Food5Component,
    Food6Component,
    Food7Component,
    Food8Component,
    Food9Component,
    Food10Component,
    FoodcurtComponent,
    HowtoComponent,
    ContactComponent,
    MapComponent,
    HistoryComponent,
    Food11Component,
    Food12Component,
    Food13Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    RouterModule.forRoot(appRoutes) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
