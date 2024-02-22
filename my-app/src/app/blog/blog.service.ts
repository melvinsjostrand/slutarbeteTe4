import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{blog} from  './blog.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogUrl = 'https://localhost:7063/Blog'; 

  constructor(private http: HttpClient) {}

  getBlogs(): Observable<any[]> {
    return this.http.get<blog[]>(`${this.blogUrl}/AllBlog`);
  }
}
