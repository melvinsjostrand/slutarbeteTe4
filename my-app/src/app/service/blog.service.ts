import { Injectable } from '@angular/core';
import { blog } from '../models/blog.interface';
import { bloginfo } from '../models/bloginfo';
@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogUrl = 'https://localhost:7063/Blog';

  async getBlogs(): Promise<blog[]> {
      const url = (`${this.blogUrl}/AllBlog`);
      return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch blog post');
        }
        return response.json();
      });
  }

  async fetchBlogPost(blogid: number): Promise<bloginfo[]> {
    const url = `${this.blogUrl}/${blogid}`;
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch blog post');
        }
        return response.json();
      });
  }
}
