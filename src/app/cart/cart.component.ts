import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartEmpty:boolean;
 key:any;
 index=0;
 arry:any=[''];
 length;
count=JSON.parse(localStorage.getItem('count')) || 0;


 
 sum=JSON.parse(localStorage.getItem('total'));
  constructor( private cartService: CartService ) { 
    while(this.index<=localStorage.length){
      console.log(localStorage.length);
      this.length=localStorage.length;
    this.key = JSON.parse(localStorage.getItem(JSON.stringify(this.index)));
    this.arry.push(this.key);this.index++;
     
      
   }
        if(localStorage.length==0){
          this.cartEmpty=true; }
          this.sum=JSON.parse(localStorage.getItem('total'));
         console.log(this.sum);

  }
 
  emptyCart(){
    this.cartService.emptyCart();
    window.location.reload();
  }
  ngOnInit(): void {
    
  }
  
}
