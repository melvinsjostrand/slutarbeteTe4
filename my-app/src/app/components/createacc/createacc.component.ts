import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
@Component({
  selector: 'app-createacc',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './createacc.component.html',
  styleUrls: ["../../../styles.scss"],
})
export class CreateaccComponent {
  createAccountForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private authservice : AuthService) {
    this.createAccountForm = this.formBuilder.group({
      username: ['', Validators.required],
      mail: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      address: ['', Validators.required]
    });
  }
  onSubmit() {
    if (this.createAccountForm.valid) {
      const userData = this.createAccountForm.value;
      this.authservice.createUser(userData).subscribe(
        (response: any) => {
          console.log('Account created successfully:', response);
          // You can handle success response here
        },
        (error: any) => {
          console.error('Failed to create account:', error);
          // You can handle error response here
        }
      );
    } else {
      console.log('Form is invalid. Please fill out all required fields.');
    }
  }
}
