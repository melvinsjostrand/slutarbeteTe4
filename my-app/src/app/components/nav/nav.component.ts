import { Component, OnInit, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../service/auth.service';
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,],
templateUrl: "./nav.component.html",
styleUrl: './nav.component.scss'
})
export class NavComponent {
    isAuthenticated: boolean = false;

    constructor(private authService: AuthService) { }
  
    ngOnInit(): void {
      this.isAuthenticated = this.authService.isAuthenticated();
    }
  

    isLoggedIn(): boolean {
      return this.authService.isAuthenticated();
    }
  
    logout(): void {
      this.authService.logout();
    }
}
