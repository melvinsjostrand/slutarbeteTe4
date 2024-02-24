import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone:true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent{
  constructor(private router: Router) { }
  blogs: { id: number, title: string, blogText: string, username: string, dateTimePosted: Date }[] = [
    { 
      id: 1, 
      title: "First Blog", 
      blogText: "Lorem ipsum dolor sit amet.", 
      username: "John Doe", 
      dateTimePosted: new Date() // Current date and time
    },
    { 
      id: 2, 
      title: "Second Blog", 
      blogText: "Consectetur adipiscing elit.", 
      username: "Jane Smith", 
      dateTimePosted: new Date() // Current date and time
    }
    // Add more blogs as needed
  ];

  onBlogClicked(blog: { id: any; }) {
    console.log('Blog clicked:', blog.id);
    this.router.navigate([`blogpost/${blog.id}`]);
  }
}

@NgModule({
  declarations: [],
  imports: [CommonModule]
})
export class BlogModule {}
