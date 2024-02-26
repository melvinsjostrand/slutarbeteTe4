import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { blog } from '../models/blog.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogUrl = 'https://localhost:7063/Blog';

  async getBlogs(): Promise<blog[]> {
    try {
      const response = await fetch(`${this.blogUrl}/AllBlog`);
      if (!response.ok) {
        throw new Error('Failed to fetch blogs: ' + response.statusText);
      }

      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        return await response.json();
      } else {
        throw new Error('Failed to fetch blogs: Invalid response format');
      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
      throw error;
    }
  }
  fetchBlogPost(blogid: number): Promise<any> {
    const url = `${this.blogUrl}/blogpost/${blogid}`;
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch blog post');
        }
        return response.json();
      });
  }
}
