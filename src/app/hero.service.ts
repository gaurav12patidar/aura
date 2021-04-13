import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private firestore: AngularFirestore) { }

  getHomeImage(){
    return  this.firestore.collection("homepage").snapshotChanges();
  }
  getHomeTrending(){
    return  this.firestore.collection("HomepageTrending").snapshotChanges();
  }
  getHomeBestDeal(){
    return  this.firestore.collection("HomepageBestdeal").snapshotChanges();
  }
  getHomeposter(){
    return  this.firestore.collection("HomepagePoster").snapshotChanges();
  }
  getKitchen(){
    return  this.firestore.collection("Kitchen").snapshotChanges();
  }
  getSearch(){
    return  this.firestore.collection("Search").snapshotChanges();
  }
  getProduct(id){
   return this.firestore.collection('Kitchen').doc(id);
  }  
}
