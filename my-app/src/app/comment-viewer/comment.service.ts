import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from './comment.interface'; // Import the Comment interface

@Injectable({
 providedIn: 'root',
})
export class CommentService {
 private baseUrl = 'https://jsonplaceholder.typicode.com';

constructor(private http: HttpClient) {}

getComments(): Observable<Comment[]> {
 return this.http.get<Comment[]>(`${this.baseUrl}/comments`);
 }
}