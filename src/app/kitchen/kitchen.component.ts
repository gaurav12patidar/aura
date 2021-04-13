import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit {
data;

length=localStorage.length;
sum=0;
count=JSON.parse(localStorage.getItem('count')) || 0;
  constructor( private hero: HeroService ,private cart: CartService) { 
    this.hero.getKitchen().subscribe(data=>{
      this.data=data;
    });
    
    
  }
  addToCart(product){
    this.cart.addToCart(product);
    
    this.count=this.cart.countTotal();
    this.length=localStorage.length;
  }

  calculateTotal(price){
    this.cart.calculateTotal(price);
  }
  
  ngOnInit(): void {
 
    
  }

}
