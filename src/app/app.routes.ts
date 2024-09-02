import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { StudentComponent } from './student/student.component';
import { ProductComponent } from './product/product.component';
import { AccountComponent } from './account/account.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';


export const routes: Routes = [
    {
        path:"shop",
        component:ShopComponent
    },
    {
        path:"student",
        component:StudentComponent
    },
    {
        path:"product",
        component:ProductComponent
    },
    {
        path:"account",
        component:AccountComponent
        
    },
   
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }
