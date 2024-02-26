import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { BlogService } from '../../service/blog.service';
import { blog } from '../../models/blog.interface';

@Component({
  selector: 'app-blog',
  standalone:true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,],
  templateUrl: './blog.component.html',
  styleUrls: ['../../../styles.scss']
})
export class BlogComponent{

  constructor(
    private router: Router,
    private blogService: BlogService
    ) { }
  blogs: blog[] = [];


  ngOnInit(): void {
    this.fetchBlogs();
  }

  fetchBlogs(): void {
    this.blogService.getBlogs()
      .then(blogs => {
        this.blogs = blogs;
        console.log('Fetched blogs:', blogs);
      })
      .catch(error => {
        console.error('Error fetching blogs:', error);
        // Handle error as needed
      });
  }


  onBlogClicked(blogid:number):void {
    console.log('Blog clicked:', blogid);
    this.router.navigate([`blogpost/${blogid}`]);
  }
}

@NgModule({
  declarations: [],
  imports: [CommonModule]
})
export class BlogModule {}
