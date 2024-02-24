import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PostService } from '../../service/postblog.service';

@Component({
  selector: 'app-createblog',
  templateUrl: './createblog.component.html',
  styleUrls: ['./createblog.component.scss']
})
export class CreateblogComponent implements OnInit {
  createblog!: FormGroup;

  constructor(
    private postService: PostService,   
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
  ) { }

  ngOnInit(): void {
    this.createblogForm();
  }

  createblogForm(): void {
    this.createblog = this.formBuilder.group({
      title: ['', Validators.required],
      desc: ['', Validators.required],
      img: ['']
    });
  }

  onSubmit(): void {
    try {
      if (this.createblog.valid) {
        const formData = this.createblog.value;
        const response = this.postService.createPost(formData);
        console.log('Post created:', response);
        this.toastrService.success('Blog post created successfully.');
      } else {
        this.toastrService.error('Please fill in all required fields.');
      }
    } catch (error) {
      console.error('Error creating post:', error);
      this.toastrService.error('An error occurred while creating the blog post.');
    }
  }
}
