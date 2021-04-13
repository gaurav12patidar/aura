import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit {
sum=0;
  constructor() {
    this.sum=JSON.parse(sessionStorage.getItem('total'));

   }

  ngOnInit(): void {
  }

}
