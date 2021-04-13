import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThankyouComponent } from '../app/thankyou/thankyou.component';
import { CartComponent } from '../app/cart/cart.component';
import { CheckoutComponent } from '../app/checkout/checkout.component';
import { ProductComponent } from '../app/product/product.component';
import { HomeComponent } from './home/home.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { OrdersComponent} from './orders/orders.component';
import { SearchComponent} from './search/search.component';


const routes: Routes = [
  {
    path:'', component: HomeComponent
  },
  {
      path:'product/:id', component: ProductComponent
  },
  {
    path:'cart', component: CartComponent
  },
  {
    path:'checkout', component: CheckoutComponent
  },
  {
    path:'kitchen', component: KitchenComponent

  },
  {
    path:'thankyou', component: ThankyouComponent
  },
  {
    path:'test', component: OrdersComponent
  },
  {
    path:'search', component: SearchComponent
  },
  {
    path:'search/:query', component: SearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
