import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{blog} from  '../components/blog/blog.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  getBlog() {
    throw new Error('Method not implemented.');
  }
  private blogUrl = 'https://localhost:7063/Blog'; 

  constructor(private http: HttpClient) {}

  getBlogs(): Observable<any[]> {
    return this.http.get<blog[]>(`${this.blogUrl}/AllBlog`);
  }
}
