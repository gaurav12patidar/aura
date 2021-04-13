import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { HeroService} from '../hero.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})

export class OrdersComponent implements OnInit {
  // data;
 

    constructor( private firestore : AngularFirestore, private hero: HeroService) { 
    //  this.hero.test();
       
    //   this.sendTestData();
      
    }
    // sendTestData(){
    //  this.hero.sendtestdata().get().subscribe(data=>{
    //    this.data=data.data();
    //    console.log(this.data);
    //  })
    // }
  ngOnInit(): void {
  }
  

}
