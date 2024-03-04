import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { product } from '../../models/product';
import { AuthService } from '../../service/auth.service';
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
  isAuthenticated: boolean = false
  userRole: string | undefined;
  constructor(
    private router: Router,
    private productService :ProductService, 
    private  authService :AuthService
  ){}

  products: product[] = [];

  ngOnInit():void{
    this.fetchProduct();
    this.isAuthenticated = this.authService.isAuthenticated();
    this.setUserRole();
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
  async setUserRole(): Promise<void> {
    if (this.isAuthenticated) {
      try {
        await this.authService.verify();
        this.userRole = this.authService.getUserRole();
        console.log('User role:', this.userRole);
      } catch (error) {
        console.error('Failed to verify user role:', error);
      }
    }
  }
}



export class productModule{}
