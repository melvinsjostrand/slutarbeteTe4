import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostService } from '../../service/postblog.service';
import { response } from 'express';

@Component({
  selector: 'app-uploadproduct',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule ],
  templateUrl: './uploadproduct.component.html',
  styleUrl: './uploadproduct.component.scss'
})
export class UploadproductComponent implements OnInit{
  createproduct!: FormGroup;
  selectedCategory: string = 'Annat';

  constructor(
  private postService: PostService,    
  private formBuilder: FormBuilder) {
    this.createproduct = this.formBuilder.group({
      productname: ["", Validators.required],
      desc:["", Validators.required],
      img: [null, Validators.required],
      price: ["", Validators.required],
      stock: ["", Validators.required],
      category: ["", Validators.required],
      content: [''],
      feeding: ['']
    });;
  }

  ngOnInit(): void {
    this.onCategoryChange();
  }
  onFileChange(event: any) {
    const file = event.target.files[0];
    this.convertFileToBase64(file);
  }
  onSubmit() {
    console.log(this.createproduct.value);
    try{
      if(this.createproduct.valid){
        const formData = this.createproduct.value;
        this.postService.createProduct(formData).then(
          (response) =>{
            console.log("Product created ", response);
          },
          (error)=>{
            console.log('Error creating the product', error);
          }
        );
      }else{
        console.log('Please check your inputs');
      }    
    }catch(err){
      console.log(err);
    }
  }
  onCategoryChange() {
    const categoryControl = this.createproduct.get('category');
    if (categoryControl && categoryControl.value) {
      this.selectedCategory = categoryControl.value;
    }
  }

  convertFileToBase64(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      this.createproduct.patchValue({
        img: reader.result,
      });
    };
    reader.readAsDataURL(file);
  }



}
