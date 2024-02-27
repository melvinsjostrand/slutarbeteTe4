import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { AuthService } from "../../service/auth.service";
import { CommonModule } from "@angular/common";
@Component({
  selector: "app-login",
  standalone: true,
  imports: [
    // CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: "./login.component.html",
  styleUrls: ["../../../styles.scss"],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loginError: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      mail: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const { mail, password } = this.loginForm.value;
    this.authService
      .login(mail, password)
      .then(() => {
        this.loginError = null;
      })
      .catch((error: any) => {
        console.error("Login failed:", error);
        this.loginError = "Invalid username or password";
      });
  }

  get mail() {
    return this.loginForm.get("mail");
  }

  get password() {
    return this.loginForm.get("password");
  }
}
