import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  index=localStorage.length;
  count=JSON.parse(localStorage.getItem('count')) || 0;
  constructor() { 
   
  }

  addToCart(product) {
    var data= product;
   
    localStorage.setItem(JSON.stringify(this.index),JSON.stringify(data))
    window.alert('Your product has been added to the cart!');
    console.log(product); this.index++;this.count++;
    localStorage.setItem('count',JSON.stringify(this.count));
  }
  emptyCart(){
    localStorage.clear();
    
  }
 sum=JSON.parse(localStorage.getItem('total'));
  calculateTotal(price){
    this.sum=this.sum+price;
    localStorage.setItem('total',JSON.stringify(this.sum))
  }

  countTotal(){
    
    return this.count;
  }
  

}
