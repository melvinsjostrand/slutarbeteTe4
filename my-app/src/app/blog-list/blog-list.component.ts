import { Component, OnInit } from '@angular/core';
import { blog } from '../blog/blog.interface';
import { BlogService } from '../blog/blog.service';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss'
})
export class BlogListComponent implements OnInit {
  blogs: blog[] = [];
  
  constructor(private BlogService: BlogService) {}
  
  ngOnInit(): void {
  this.BlogService.getBlog().subscribe((blogs: any) => {
  this.blogs = blogs;
  });
  }
  }