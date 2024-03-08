import { Injectable } from "@angular/core";
import { error } from "node:console";

@Injectable({
  providedIn: "root",
})
export class PostService {
  async createPost(data: any): Promise<any> {
    const url = "https://localhost:7063/Blog";
    const headers = new Headers();
    const guid = localStorage.getItem('user');
    if (!guid) {
      throw new Error("GUID not found in localStorage");
    }
    headers.append("Content-Type", "application/json");
    headers.append("authorization", guid);

    return fetch(url, {
      method:"POST",
      headers:headers,
      body:JSON.stringify(data),
    })
    .then((response) =>{
      if(!response.ok){
        throw new Error("Failed to create post: " + response.statusText);
      }
      const contentType = response.headers.get("content-type");
      if(contentType  && contentType.includes("application/json")){
        return response.json();
      } else {
        return response.text();
      }
    })
    .catch((error) =>{
      console.error("error creating post: ", error);
      throw error;
    });
    }


    async createProduct(data: any): Promise<any> {
      const url = "https://localhost:7063/product";
      const headers = new Headers();
      const guid = localStorage.getItem('user');
      if (!guid) {
        throw new Error("GUID not found in localStorage");
      }
      headers.append("Content-Type", "application/json");
      headers.append("authorization", guid);
  
      return fetch(url, {
        method:"POST",
        headers:headers,
        body:JSON.stringify(data),
      })
      .then((response) =>{
        if(!response.ok){
          throw new Error("Failed to create post: " + response.statusText);
        }
        const contentType = response.headers.get("content-type");
        if(contentType  && contentType.includes("application/json")){
          return response.json();
        } else {
          return response.text();
        }
      })
      .catch((error) =>{
        console.error("error creating post: ", error);
        throw error;
      });
      }
}
