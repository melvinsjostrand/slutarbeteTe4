import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BlogService } from "../../service/blog.service";
import { CommonModule } from "@angular/common";
import { bloginfo } from "../../models/bloginfo";
import { Router } from "@angular/router";

@Component({
  selector: "app-blogpost",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./blogpost.component.html",
  styleUrls: ["../../../styles.scss"],
})
export class BlogpostComponent{
  blogs: bloginfo[] = [];

  constructor(
    private route : Router,
    private activatedRoute: ActivatedRoute,
    private blogService: BlogService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const blogid = +params["id"];
      console.log("Extracted blogid:", blogid);
      if (blogid) {
        this.fetchBlogPost(blogid);
      }
    });
  }
  fetchBlogPost(blogid: number): void {
    this.blogService
      .fetchBlogPost(blogid)
      .then((blogPost) => {
        this.blogs = blogPost;
        console.log(blogPost);
      })
      .catch((error) => {
        console.error("Error fetching blog post:", error);
      });
  }
}
