import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { CartService } from '../cart.service';
import { FormGroup,FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
data;
trend;
desc;
bestdeal;
poster;
key;
count=JSON.parse(localStorage.getItem('count')) || 0;
form = new FormGroup({
    email: new FormControl(''),
    name:  new FormControl(''),
    mobile: new FormControl('')
})
    

length=localStorage.length;
  constructor( private hero: HeroService ,private cart: CartService,private firestore: AngularFirestore) { 
    this.hero.getHomeImage().subscribe(data=>{
      this.data=data;
      this.desc=this.data.pdesc;
    });
    this.hero.getHomeTrending().subscribe(data=>{
      this.trend=data;
    });
    this.hero.getHomeBestDeal().subscribe(data=>{
      this.bestdeal=data;
    });
    this.hero.getHomeposter().subscribe(data=>{
      this.poster=data;
    });
    
   
  }

  ngOnInit(): void {
   
  }
  addToCart(product){
    this.cart.addToCart(product);
  }
  submitForm(){
    this.firestore.collection('Appointment').add({
      email: this.form.value.email,
      name: this.form.value.name,
      mobile:this.form.value.mobile
  }).then(res => {
    console.log(res);
    this.form.reset();
})
.catch(e => {
    console.log(e);
})
  }
}
