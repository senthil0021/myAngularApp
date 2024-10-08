import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { FormsModule } from '@angular/forms';
import { ShopComponent } from './shop/shop.component';
import { ProductComponent } from './product/product.component';
import { AccountComponent } from './account/account.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,StudentComponent,FormsModule,ShopComponent,ProductComponent,AccountComponent,RouterLink,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularApp';
}
