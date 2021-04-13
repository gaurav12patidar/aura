import { Component, OnInit } from '@angular/core';
import { OrdersService } from "../shared/orders.service";

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {

  constructor(private ordersService:OrdersService) { }

  ngOnInit() {
  }

}
