import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { product } from '../../models/product';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule],
  templateUrl: './product.component.html',
  styleUrls: ['../../../styles.scss']
})
export class ProductComponent {
  constructor(
    private router: Router,
    private productService :ProductService 
  ){}

  products: product[] = [];

  ngOnInit():void{
    this.fetchProduct();
  }
  fetchProduct() {
  this.productService.getProduct()
    .then(products=>{
      this.products = products;
      console.log(products);
    })
    .catch(error=>{
      console.error(error);
    });
  }

  onClicked(productid:number):void {
    console.log('clicked:', productid);
  }
}


@NgModule({
  declarations: [],
  imports: [CommonModule]
})
export class productModule{}
