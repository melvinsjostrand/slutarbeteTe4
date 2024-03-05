import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { product } from "../models/product";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private productUrl = "https://localhost:7063/Product";

  async getProduct(): Promise<product[]> {
    try {
      const response = await fetch(`${this.productUrl}/AllProducts`);
      if (!response.ok) {
        throw new Error("Failed to fetch blogs: " + response.statusText);
      }

      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        return await response.json();
      } else {
        throw new Error("Failed to fetch blogs: Invalid response format");
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
      throw error;
    }
  }

  async addProduct(data : any):Promise<any>{
      const response = await fetch(`${this.productUrl}`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if(!response.ok){
        throw new Error("Failed to create post: " + response.statusText);
      }
      
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        return await response.json();
      } else {
        return await response.text(); // Return response as text if it's not JSON
      }
    }

  async addProductToCart(productid:number):Promise<void>{
  }
