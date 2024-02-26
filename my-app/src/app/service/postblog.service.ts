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

      if (!response.ok) {
        throw new Error('Failed to create post: ' + response.statusText);
      }

      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        return await response.json();
      } else {
        return await response.text(); // Return response as text if it's not JSON
      }
    } catch (error) {
      console.error('Error creating post:', error);
      throw error;
    }
  }
}
