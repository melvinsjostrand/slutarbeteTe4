import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { PostService } from "../../service/postblog.service";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

@Component({
  selector: "app-createblog",
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: "./createblog.component.html",
  styleUrls: ["../../../styles.scss"],
})
export class CreateblogComponent implements OnInit {
  createblog!: FormGroup;

  constructor(
    private postService: PostService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createblog = this.formBuilder.group({
      title: ["", Validators.required],
      text: ["", Validators.required],
      img: [null, Validators.required],
    });
  }
  onFileChange(event: any) {
    const file = event.target.files[0];
    this.convertFileToBase64(file);
  }

  convertFileToBase64(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      this.createblog.patchValue({
        img: reader.result,
      });
    };
    reader.readAsDataURL(file);
  }

  onSubmit(): void {
    try {
      if (this.createblog.valid) {
        const formData = this.createblog.value;
        this.postService.createPost(formData).then(
          (response) => {
            console.log("Post created:", response);
          },
          (error) => {
            console.error("Error creating post:", error);
          }
        );
      } else {
      }
    } catch (error) {
      console.error("Error creating post:", error);
    }
  }
}

