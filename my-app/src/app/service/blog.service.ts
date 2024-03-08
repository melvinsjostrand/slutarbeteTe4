import { Injectable } from '@angular/core';
import { blog } from '../models/blog.interface';
import { bloginfo } from '../models/bloginfo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(private http:HttpClient){}
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

  fetchBlogPost(blogid: number): Observable<bloginfo[]> {
    const url = `${this.blogUrl}/${blogid}`;
    return this.http.get<bloginfo[]>(url)
      .pipe(
        catchError((error: any) => {
          console.error('Error fetching blog post:', error);
          throw new Error('Failed to fetch blog post');
        })
      );
  }
}
