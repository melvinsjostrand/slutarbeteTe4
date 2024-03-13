import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule

  ],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
public resetPasswordEmail!: string;
public isValidEmail!: boolean;


checkValidEmail(event:string){
const value = event;
const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
this.isValidEmail=pattern.test(value);
return this.isValidEmail;
}
confirmSend(){
  if(this.checkValidEmail(this.resetPasswordEmail)){
    console.log(this.resetPasswordEmail);
    this.resetPasswordEmail='';
  }
}
}
