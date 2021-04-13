import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  
  
  constructor(private hero: HeroService ,private cart: CartService) { 
    
    
  }
 

  ngOnInit(): void {
   
  }

}
