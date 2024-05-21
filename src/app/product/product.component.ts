import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {product} from './product.model';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './product.component2.html',
  styleUrl: './product.component.css'
})
export class ProductComponent { 

  categoryInput:String="Electronics";
  
   products:product[] =[{productId:100,productName:"Mobile",cost:20000,category:"Electronics"},
   {productId:101,productName:"Earbus",cost:2000,category:"Electronics"},
   {productId:102,productName:"Labtop",cost:40000,category:"Electronics"},
   {productId:103,productName:"Charger",cost:1000,category:"Electronics"},
   {productId:104,productName:"Powebank",cost:2000,category:"Electronics"},
   {productId:105,productName:"Keyboard",cost:500,category:"Electronics"},
   {productId:106,productName:"Mouse",cost:400,category:"Electronics"},
   {productId:107,productName:"Pepsi",cost:90,category:"Beverages"},
   {productId:108,productName:"7up",cost:60,category:"Beverages"},
   {productId:109,productName:"Slice",cost:80,category:"Beverages"},
   {productId:110,productName:"Miranda",cost:80,category:"Beverages"},
   {productId:111,productName:"Pen",cost:80,category:"Stationary"},
   {productId:112,productName:"Pencil",cost:20,category:"Stationary"},
   {productId:113,productName:"Marker",cost:40,category:"Stationary"},
   ]
  

}
