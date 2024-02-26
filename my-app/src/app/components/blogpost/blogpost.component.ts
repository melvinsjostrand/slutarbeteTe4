import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../service/blog.service';

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

  constructor(    
    private activatedRoute: ActivatedRoute,
    private blogService: BlogService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const blogid = +params['blogid'];
      if (blogid) {
        this.fetchBlogPost(blogid);
      }
    });
  }
  fetchBlogPost(blogid: number): void {
    this.blogService.fetchBlogPost(blogid)
      .then(blogPost => {
        console.log('Fetched blog post:', blogPost);
      })
      .catch(error => {
        console.error('Error fetching blog post:', error);
      });
  }

}
