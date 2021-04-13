import { Component, OnInit } from '@angular/core';
import { HeroService} from '../hero.service';
import { CartService} from '../cart.service';

import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
data;
id;

count=JSON.parse(localStorage.getItem('count')) || 0;

  constructor(private hero: HeroService,private route: ActivatedRoute,private cart: CartService) {
    
     this.id = this.route.snapshot.params.id;
    

    this.sendProductId(this.id);
   }
   sendProductId(id){
    this.hero.getProduct(id).get().subscribe(data=>{
      this.data=data.data();
      console.log(this.data);
    })
  }
  addToCart(product){
    this.cart.addToCart(product);
    
    this.count=this.cart.countTotal();
    
  }

  calculateTotal(price){
    this.cart.calculateTotal(price);
  }
  ngOnInit(): void {
  }
  
}
