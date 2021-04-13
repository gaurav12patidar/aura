import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { CartService } from '../cart.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Route, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
data;
myArray:any = [];
count=JSON.parse(localStorage.getItem('count')) || 0;
term="sofa";
  constructor(private hero: HeroService ,private cart: CartService, private firestore: AngularFirestore,private route: ActivatedRoute) { 
    this.term = this.route.snapshot.params.query;
    this.firestore.collection("Search").get().subscribe((ss) => {
          ss.docs.forEach((doc) => {
          this.myArray.push(doc.data());
    });
    console.log(this.myArray);
    const newArray= this.myArray.map(element => element.title);
    console.log(newArray);
    this.Search(this.term);
  });
  /////////////////////////////////////////////////////////////////////////
}
Search(term){
  this.myArray = this.myArray.filter(res=>{
    return res.title.toLocaleLowerCase().match(term.toLocaleLowerCase());
  })
}

  ngOnInit(): void {
  }
  
}
