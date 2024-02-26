import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.scss']
})
export class BlogpostComponent implements OnInit {
  blogId!: number;
  blogTitle!: string;
  blogText!: string;
  username!: string;
  dateTimePosted!: Date; 

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.blogId = +params['id']; 

      this.getBlogPostDetails(this.blogId);
    });
  }

  // Function to fetch the details of the selected blog post
  getBlogPostDetails(blogId: number) {
    if (blogId === 1) {
      this.blogTitle = "First Blog";
      this.blogText = "Lorem ipsum dolor sit amet.";
      this.username = "John Doe";
      this.dateTimePosted = new Date();
    } else if (blogId === 2) {
      this.blogTitle = "Second Blog";
      this.blogText = "Consectetur adipiscing elit.";
      this.username = "Jane Smith";
      this.dateTimePosted = new Date();
    }
  }
}
