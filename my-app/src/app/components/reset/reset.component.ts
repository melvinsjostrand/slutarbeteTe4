import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { ResetPassword } from '../../models/resetModel';
import { CommonModule } from '@angular/common';
import { confirmPasswordValidator } from '../../confirm-password.validator';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reset',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './reset.component.html',
  styleUrl: './reset.component.scss'
})
export class ResetComponent implements OnInit {
  resetPasswordForm! : FormGroup;
  emailToReset! : string;
  emailToken!: string;
  resetPasswordObj = new ResetPassword();
  resetService: any;

  constructor(private router: Router,
    private toast: ToastrService ,private fb: FormBuilder, private activatedRoute : ActivatedRoute) {}

  ngOnInit(): void {
    this.resetPasswordForm = this.fb.group({
      password:[null, Validators.required],
      confirmpassword:[null, Validators.required]
    },{
    validators: confirmPasswordValidator('password', 'confirmpassword')
    });

    this.activatedRoute.queryParams.subscribe(val=>{
      this.emailToReset = val['email'];
      let uriToken = val['code'];

      this.emailToken= uriToken.replace(/ /g,'+');
      console.log(this.emailToReset);
      console.log(this.emailToken);
    })
  }

  reset(){
  if(this.resetPasswordForm.valid){
    this.resetPasswordObj.email = this.emailToReset;
    this.resetPasswordObj.newPassword = this.resetPasswordForm.value.password;
    this.resetPasswordObj.confirmPassword = this.emailToReset;
    this.resetPasswordObj.emailToken = this.emailToken;

    this.resetService.resetPassword(this.resetPasswordObj)
      .subscribe({
        next:(res:any)=>{
        this.toast.success('Successful Password Reset!', 'SUCCESS', { timeOut: 3000 });
        this.router.navigate(['/']);
    },
    error:(err:any)=>{
      this.toast.success('Successful Password Reset!', 'SUCCESS', { timeOut: 3000 });
    }

  })
}
}
}
