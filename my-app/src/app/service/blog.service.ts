import { Injectable } from '@angular/core';
import { blog } from '../models/blog.interface';
import { bloginfo } from '../models/bloginfo';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
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
  fetchBlogPost(blogId: number): Observable<bloginfo> {
    const url = `${this.blogUrl}/${blogId}`;
    return this.http.get<bloginfo>(url)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMessage = '';
          if (error.error instanceof ErrorEvent) {
            // Client-side error
            errorMessage = `An error occurred: ${error.error.message}`;
          } else {
            // Server-side error
            errorMessage = `Server returned code: ${error.status}, error message is: ${error.message}`;
          }
          console.error(errorMessage);
          return throwError(errorMessage);
        })
      );
  }

  postComment(blogId: number, commentText: string): Observable<any> {

    const url = `https://localhost:7063/Comment`; // Assuming your backend API endpoint for posting comments is something like /api/blogs/:blogId/comments
    const commentData = { 
      blogId: blogId,
      text: commentText }; 
    const headers = new HttpHeaders().set('Authorization', localStorage.getItem('auth') || ''); // Get GUID from local storage and set it as Authorization header
    return this.http.post<any>(url, commentData, { headers } ) 
      .pipe(
        catchError((error: any) => {
          console.error('Error posting comment:', error);
          throw new Error('Failed to post comment');
        })
      );
  }
}
