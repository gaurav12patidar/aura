import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
term:String;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  Search(){
    this.router.navigate(['/search',this.term])
  }
}
