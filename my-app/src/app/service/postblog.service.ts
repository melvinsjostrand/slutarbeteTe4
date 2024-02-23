import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  async createPost(data: any): Promise<any> {
    try {
      const response = await fetch('https://localhost:7063/Blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      return await response.json();
    } catch (error) {
      console.error('Error creating post:', error);
      throw error;
    }
  }
}
